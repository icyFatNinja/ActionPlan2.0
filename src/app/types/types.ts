// Types that are used in several places and they are defined in a seperate file

export type JobInfo = {
  id: string;
  title: string;
  education: boolean;
  experience: boolean;
};

export type JobInfoWithOpenPositions = JobInfo & { openPosition: number };

export type Plan = {
  firstName: string;
  lastName: string;
  text1: string;
  text2: string;
  text3: string;
  occupations: JobInfo[];
  additionalInfo: string;
};
