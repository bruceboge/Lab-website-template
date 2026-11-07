export type FocusArea = { title: string; text: string };

export type ProjectRecord = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  status: string;
  year: string;
  tools: string;
};

export type ProjectSummary = Pick<ProjectRecord, "slug" | "title" | "summary">;

export type EventRecord = {
  slug: string;
  title: string;
  date: string;
  kind: string;
  status: "upcoming" | "past";
};

export type PublicationRecord = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
};
