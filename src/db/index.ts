import type { About, Activity, Faq, People } from '@/db/model';
import { RECRUIT_FAQ } from '@/libs/constants/recruitFaq';

import aboutData from './about.json';
import activityData from './activity.json';
import faqData from './faq.json';
import peopleData from './people.json';

export const getAbout = (): About => aboutData;
export const getFaq = (): { about: Faq[]; recruit: Faq[] } => ({
  about: faqData.about,
  recruit: RECRUIT_FAQ,
});
export const getPeople = () => peopleData as People;
export const getActivity = () =>
  ({
    post: activityData.B,
    video: activityData.V,
  }) as Activity;
