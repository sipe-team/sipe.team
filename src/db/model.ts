interface CommonActivity {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  name: string;
  date: string;
  link: string;
  profile: string;
}

export interface ActivityPost extends CommonActivity {
  type: 'B';
}

export interface ActivityVideo extends CommonActivity {
  type: 'V';
}

export interface Activity {
  post: ActivityPost[];
  video: ActivityVideo[];
}

export type PeopleGeneration = '1' | '2' | 'contribute';

export type People = Record<PeopleGeneration, PeopleItem[]>;

export interface PeopleItem {
  id: string;
  period: PeopleGeneration;
  isOrganizer: boolean;
  thumbnail: string;
  name: string;
  part: string;
  introduce: string;
  review: string;
  github?: string;
  linkedin?: string;
  etc?: string;
}

export interface Faq {
  key: string;
  question: string;
  answer: string;
}

export interface AboutActivity {
  key: string;
  name: string;
  title: string;
  description: string;
  activities: string[];
}

export interface Sponsor {
  key: string;
  name: string;
  link: string;
}

export interface About {
  activity: Record<string, AboutActivity>;
  sponsor: Record<string, Sponsor>;
}
