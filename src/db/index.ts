import type { About, Activity, Faq, People } from '@/db/model';

import aboutData from './about.json';
import { B as post, V as video } from './activities.json';
import faqData from './faq.json';
import peopleData from './people.json';

export const getAbout = (): About => aboutData;
export const getFaq = (): { about: Faq[]; recruit: Faq[] } => faqData;
export const getPeople = (): People => ({
  '1기': peopleData[1],
  '2기': peopleData[2],
  기여자: peopleData.contribute,
});
export const getActivity = () =>
  ({
    post,
    video,
  } as Activity);
