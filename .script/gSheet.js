const fs = require('fs');
const dotenv = require('dotenv');
const { JWT } = require('google-auth-library');
const { GoogleSpreadsheet } = require('google-spreadsheet');

dotenv.config();

// * 구글 스프레드시트 시트 이름 상수
const SHEET_NAMES = {
  CONFIG: 'config',
  REVIEW: 'review',
  ACTIVITY: 'activity',
  FAQ_ABOUT: 'faq_about',
  FAQ_RECRUIT: 'faq_recruit',
  ABOUT_ACTIVITY: 'about_activity',
  ABOUT_SPONSOR: 'about_sponsor',
};

// * 파일 경로 상수
const FILE_PATHS = {
  PEOPLE: 'src/db/people.json',
  ACTIVITY: 'src/db/activity.json',
  ABOUT: 'src/db/about.json',
  FAQ: 'src/db/faq.json',
};

async function getGoogleSheet() {
  try {
    // * 구글 서비스 계정 인증
    const serviceAccountAuth = new JWT({
      email: process.env.EMAIL,
      key: process.env.KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // * 구글 스프레드시트 문서 로드
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    // * 구글 스프레드시트 시트 로드
    const sheets = {
      config: doc.sheetsByTitle[SHEET_NAMES.CONFIG],
      peoples: doc.sheetsByTitle[SHEET_NAMES.REVIEW],
      activities: doc.sheetsByTitle[SHEET_NAMES.ACTIVITY],
      faqAbout: doc.sheetsByTitle[SHEET_NAMES.FAQ_ABOUT],
      faqRecruit: doc.sheetsByTitle[SHEET_NAMES.FAQ_RECRUIT],
      aboutActivity: doc.sheetsByTitle[SHEET_NAMES.ABOUT_ACTIVITY],
      aboutSponsor: doc.sheetsByTitle[SHEET_NAMES.ABOUT_SPONSOR],
    };

    // * 시트가 존재하지 않을 시 에러 전파
    const isMissingSheet = Object.values(sheets).some((sheet) => !sheet);
    if (isMissingSheet) {
      throw new Error('Sheet is not found');
    }

    // * 구글 스프레드시트 데이터 처리
    const data = await processSheetData(sheets);

    // * 구글 스프레드시트 데이터 저장
    await saveJsonFiles(data);
  } catch (error) {
    console.error('Error in Google Sheet processing:', error);
    process.exit(1);
  }
}

// * 구글 각 스프레드시트 정적 데이터 처리
async function processSheetData(sheets) {
  const rows = await getSheetRows(sheets);
  const config = await processConfigData(rows.configRow);

  return {
    people: processPeopleData(rows.peoplesRow, config),
    activity: processActivityData(rows.activitiesRow, config),
    about: processAboutData(
      rows.aboutActivityRow,
      rows.aboutSponsorRow,
      config,
    ),
    faq: processFaqData(rows.faqAboutRow, rows.faqRecruitRow),
  };
}

// * 구글 각 스프레드시트 데이터 행 가져오기
async function getSheetRows(sheets) {
  try {
    const [
      configRow,
      peoplesRow,
      activitiesRow,
      faqAboutRow,
      faqRecruitRow,
      aboutActivityRow,
      aboutSponsorRow,
    ] = await Promise.all([
      sheets.config.getRows(),
      sheets.peoples.getRows(),
      sheets.activities.getRows(),
      sheets.faqAbout.getRows(),
      sheets.faqRecruit.getRows(),
      sheets.aboutActivity.getRows(),
      sheets.aboutSponsor.getRows(),
    ]);

    return {
      configRow,
      peoplesRow,
      activitiesRow,
      faqAboutRow,
      faqRecruitRow,
      aboutActivityRow,
      aboutSponsorRow,
    };
  } catch (error) {
    console.error('Error fetching sheet rows:', error);
    throw error;
  }
}

// * 설정 시트 데이터 처리
async function processConfigData(configRow) {
  try {
    if (!configRow || configRow.length === 0) {
      console.warn('Config sheet is empty');
      return {};
    }

    const driveData = configRow.find((it) => it._rowNumber === 3)['_rawData'];
    const periods = configRow
      .find((it) => it._rowNumber === 2)
      ['_rawData'].slice(1)[0]
      .split(',')
      .map((it) => it.trim());
    const activitiesType = configRow
      .find((it) => it._rowNumber === 4)
      ['_rawData'].slice(1)[0]
      .split(',')
      .map((it) => it.trim());
    const imageBaseUrl = driveData[1].trim();

    return {
      periods,
      activitiesType,
      imageBaseUrl,
      periodsMap: periods.reduce((acc, period) => {
        acc[period] = [];
        return acc;
      }, {}),
      activityMap: activitiesType.reduce((acc, activity) => {
        acc[activity] = [];
        return acc;
      }, {}),
    };
  } catch (error) {
    console.error('Error processing config data:', error);
    throw error;
  }
}

// * 정적 데이터 파일 저장
async function saveJsonFiles(data) {
  try {
    await Promise.all([
      fs.writeFileSync(FILE_PATHS.PEOPLE, JSON.stringify(data.people), {
        flag: 'w+',
      }),
      fs.writeFileSync(FILE_PATHS.ACTIVITY, JSON.stringify(data.activity), {
        flag: 'w+',
      }),
      fs.writeFileSync(FILE_PATHS.ABOUT, JSON.stringify(data.about), {
        flag: 'w+',
      }),
      fs.writeFileSync(FILE_PATHS.FAQ, JSON.stringify(data.faq), {
        flag: 'w+',
      }),
    ]);
  } catch (error) {
    console.error('Error saving JSON files:', error);
  }
}

// * 사람 시트 데이터 처리
function processPeopleData(peoplesRow, config) {
  const { imageBaseUrl, periodsMap } = config;

  peoplesRow.forEach((it) => {
    const row = it['_rawData'];

    const thumbnailId = (row[12] ?? '').match(/\/d\/(.*?)\/view/)?.[1] ?? '';
    const key = row[0] || Math.random().toString(36).substring(2, 15);
    const period = row[4];

    periodsMap[period].push({
      id: key,
      period,
      isOrganizer: row[5] === 'TRUE',
      thumbnail: thumbnailId ? `${imageBaseUrl}${thumbnailId}` : '',
      name: row[3],
      part: row[6],
      introduce: row[7],
      review: row[8],
      github: row[9],
      linkedin: row[10],
      etc: row[11],
    });
  });

  return periodsMap;
}

// * Activity 페이지 데이터 처리
function processActivityData(activitiesRow, config) {
  const { imageBaseUrl, activityMap } = config;

  activitiesRow.forEach((it) => {
    const row = it['_rawData'];
    const type = row[1] || 'B';

    activityMap[type].push({
      id: row[0],
      type,
      thumbnail: row[2] ? `${imageBaseUrl}${row[2]}&sz=w1000` : '',
      title: row[3] || '',
      description: row[4] || '',
      name: row[5] || '',
      date: row[6] || '',
      link: row[7] || '',
      profile: row[8] ? `${imageBaseUrl}${row[8]}` : '',
    });
  });

  return activityMap;
}

// * About 페이지 데이터 처리
function processAboutData(aboutActivityRow, aboutSponsorRow, config) {
  const { imageBaseUrl } = config;

  const aboutMap = {
    activity: {},
    sponsor: {},
  };

  aboutActivityRow.forEach((it) => {
    const row = it['_rawData'];
    const key = row[0];

    aboutMap.activity[key] = {
      key,
      name: row[1],
      title: row[2],
      description: row[3],
      activities:
        row[4]
          ?.split(',')
          .map((imageId) => `${imageBaseUrl}${imageId}&sz=w1000`) || [],
    };
  });

  aboutSponsorRow.forEach((it) => {
    const row = it['_rawData'];
    const key = row[0];

    aboutMap.sponsor[key] = {
      key,
      name: row[1] || '',
      link: row[2] ? `${imageBaseUrl}${row[2]}&sz=w1000` : '',
    };
  });

  return aboutMap;
}

// * FAQ 페이지 데이터 처리
function processFaqData(faqAboutRow, faqRecruitRow) {
  const faqMap = {
    about: [],
    recruit: [],
  };

  faqAboutRow.forEach((it) => {
    const row = it['_rawData'];
    faqMap.about.push({
      key: row[0],
      question: row[1],
      answer: row[2],
    });
  });

  faqRecruitRow.forEach((it) => {
    const row = it['_rawData'];
    faqMap.recruit.push({
      key: row[0],
      question: row[1],
      answer: row[2],
    });
  });

  return faqMap;
}

getGoogleSheet();
