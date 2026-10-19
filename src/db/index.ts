import type { About, Activity, Faq, People } from '@/db/model';

import aboutData from './about.json';
import activityData from './activity.json';
import { getActivityVideoThumbnail } from './activityThumbnails';
import faqData from './faq.json';
import peopleData from './people.json';

export const getAbout = (): About => aboutData;
export const getFaq = (): { about: Faq[]; recruit: Faq[] } => faqData;
export const getPeople = () => peopleData as People;
export const getActivity = () =>
  ({
    post: activityData.B,
    video: (activityData.V as Activity['video']).map((video) => ({
      ...video,
      thumbnail: getActivityVideoThumbnail(video.link, video.thumbnail),
    })),
  }) as Activity;
