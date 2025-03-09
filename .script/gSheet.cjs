const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const fs = require('fs');

require('dotenv').config();

function isEmpty(data) {
  return data === '' || data.length === 0;
}

const PEOPLE_SHEET_HEADERS = {
  Timestamp: 0,
  Email: 1,
  Consent: 2,
  Name: 3,
  Cohort: 4,
  Organizer: 5,
  Position: 6,
  Introduce: 7,
  Review: 8,
  Github: 9,
  Linkedin: 10,
  Blog: 11,
  Profile: 12,
};

function getGoogleSheet() {
  // Initialize the sheet - doc ID is the long id in the sheets URL

  const serviceAccountAuth = new JWT({
    email: process.env.EMAIL,
    key: process.env.KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(process.env.SHEET_ID, serviceAccountAuth);

  try {
    (async () => {
      try {
        await doc.loadInfo();
        const config = doc.sheetsByTitle['config'];
        const peoples = doc.sheetsByTitle['review']; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
        const activities = doc.sheetsByTitle['activity'];
        const faqAbout = doc.sheetsByTitle['faq_about'];
        const faqRecruit = doc.sheetsByTitle['faq_recruit'];
        const aboutActivity = doc.sheetsByTitle['about_activity'];
        const aboutSponsor = doc.sheetsByTitle['about_sponsor'];

        const peoplesRow = await peoples.getRows();
        const activitiesRow = await activities.getRows();
        const faqAboutRow = await faqAbout.getRows();
        const faqRecruitRow = await faqRecruit.getRows();
        const aboutActivityRow = await aboutActivity.getRows();
        const aboutSponsorRow = await aboutSponsor.getRows();

        const configRow = await config.getRows();

        const driveData = configRow.find((it) => it._rowNumber === 3)[
          '_rawData'
        ];
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

        const periodsMap = {};
        periods.forEach((period) => {
          periodsMap[period] = [];
        });

        peoplesRow.forEach((it) => {
          const row = it['_rawData'];

          const thumbnailId = (row[PEOPLE_SHEET_HEADERS.Profile] ?? '').match(/\/d\/(.*?)\/view/)?.[1] ?? '';
          const key =
            row[PEOPLE_SHEET_HEADERS.Timestamp] ??
            Math.random().toString(36).substring(2, 15);
          const period = row[PEOPLE_SHEET_HEADERS.Cohort];
          const isOrganizer = row[PEOPLE_SHEET_HEADERS.Organizer] === 'TRUE';
          const thumbnail = thumbnailId ? `${imageBaseUrl}${thumbnailId}` : '';
          const name = row[PEOPLE_SHEET_HEADERS.Name];
          const part = row[PEOPLE_SHEET_HEADERS.Position];
          const introduce = row[PEOPLE_SHEET_HEADERS.Introduce];
          const review = row[PEOPLE_SHEET_HEADERS.Review];
          const github = row[PEOPLE_SHEET_HEADERS.Github];
          const linkedin = row[PEOPLE_SHEET_HEADERS.Linkedin];
          const etc = row[PEOPLE_SHEET_HEADERS.Blog];

          periodsMap[period].push({
            id: key,
            period,
            isOrganizer,
            thumbnail,
            name,
            part,
            introduce,
            review,
            github,
            linkedin,
            etc,
          });
        });

        const activityMap = {};
        activitiesType.forEach((activity) => {
          activityMap[activity] = [];
        });

        activitiesRow.forEach((it) => {
          const row = it['_rawData'];
          const key = row[0];
          const type = row[1];
          const thumbnail = row[2];
          const title = row[3];
          const description = row[4];
          const name = row[5];
          const date = row[6];
          const link = row[7];
          const profile = row[8];

          activityMap[type].push({
            id: key,
            type: type || 'B',
            thumbnail: thumbnail ? imageBaseUrl + thumbnail + '&sz=w1000' : '',
            title: title || '',
            description: description || '',
            name: name || '',
            date: date || '',
            link: link || '',
            profile: profile ? imageBaseUrl + profile : '',
          });
        });

        const faqMap = {
          about: [],
          recruit: [],
        };

        faqAboutRow.forEach((it) => {
          const row = it['_rawData'];
          const key = row[0];
          const question = row[1];
          const answer = row[2];
          faqMap.about.push({
            key,
            question,
            answer,
          });
        });

        faqRecruitRow.forEach((it) => {
          const row = it['_rawData'];
          const key = row[0];
          const question = row[1];
          const answer = row[2];

          faqMap.recruit.push({
            key,
            question,
            answer,
          });
        });

        const aboutMap = {
          activity: {},
          sponsor: {},
        };

        aboutActivityRow.forEach((it) => {
          const row = it['_rawData'];
          const key = row[0];
          const name = row[1];
          const title = row[2];
          const description = row[3];
          const activities =
            row[4]
              ?.split(',')
              .map((imageId) => imageBaseUrl + imageId + '&sz=w1000') || [];

          aboutMap.activity[key] = {
            key,
            name,
            title,
            description,
            activities,
          };
        });

        aboutSponsorRow.forEach((it) => {
          const row = it['_rawData'];
          const key = row[0];
          const name = row[1] || '';
          const link = imageBaseUrl + row[2] + '&sz=w1000' || '';

          aboutMap.sponsor[key] = {
            key,
            name,
            link,
          };
        });

        const json = {
          people: periodsMap,
          activity: activityMap,
          about: aboutMap,
          faq: faqMap,
        };

        fs.writeFileSync('src/db/people.json', JSON.stringify(json.people), {
          flag: 'w+',
        });

        fs.writeFileSync(
          'src/db/activity.json',
          JSON.stringify(json.activity),
          {
            flag: 'w+',
          },
        );

        fs.writeFileSync('src/db/about.json', JSON.stringify(json.about), {
          flag: 'w+',
        });

        fs.writeFileSync('src/db/faq.json', JSON.stringify(json.faq), {
          flag: 'w+',
        });
      } catch (e) {
        console.error(e);
      }
    })();
  } catch (e) {
    console.error(e);
  }

  // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
}

getGoogleSheet();
