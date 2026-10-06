import {
  APPLICATION_DUE_DATE,
  APPLICATION_START_DATE,
  CURRENT_GENERATION,
  JOIN_FORM_URL,
} from '@/libs/constants/recruit';

export type ApplicationStatusKey = 'before' | 'ongoing' | 'after';
export type ApplicationDetail = {
  buttonText: string;
  formUrl: string | undefined;
  dueDate: number | undefined;
};

export const displayApplication: Record<
  ApplicationStatusKey,
  ApplicationDetail
> = {
  before: {
    buttonText: `${CURRENT_GENERATION}기 모집 준비 중`,
    formUrl: undefined,
    dueDate: APPLICATION_START_DATE.getTime(),
  },
  ongoing: {
    buttonText: JOIN_FORM_URL
      ? `${CURRENT_GENERATION}기 모집 신청`
      : `${CURRENT_GENERATION}기 모집 준비 중`,
    formUrl: JOIN_FORM_URL,
    dueDate: APPLICATION_DUE_DATE.getTime(),
  },
  after: {
    buttonText: `${CURRENT_GENERATION}기 모집 마감`,
    formUrl: undefined,
    dueDate: undefined,
  },
};

export const getCurrentStatus = (now: number) => {
  if (now < APPLICATION_START_DATE.getTime()) {
    return 'before';
  }

  if (
    now >= APPLICATION_START_DATE.getTime() &&
    now < APPLICATION_DUE_DATE.getTime()
  ) {
    return 'ongoing';
  }

  return 'after';
};
