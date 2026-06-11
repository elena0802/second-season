export type EducatorPortrait = {
  src: string;
  alt: string;
  caption: string;
};

export type EducatorProfile = {
  name: string;
  honorific: string;
  role: string;
  yearsOfService: number;
  headline: string;
  headlineLines: [string, string];
  subheadline: string;
  timelineSectionTitle: string;
  openingNarrative: string;
  portrait: EducatorPortrait;
};

export type CareerMilestone = {
  id: string;
  chapter: number;
  period: string;
  title: string;
  description: string;
};

export type EducatorData = {
  profile: EducatorProfile;
  careerTimeline: CareerMilestone[];
  homeFeaturedTimelineIds: string[];
};
