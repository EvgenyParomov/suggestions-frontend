export type TagId = number;
export type StatusId = number;

export type TagEntity = {
  id: number;
  label: string;
};

export type StatusEntity = {
  id: number;
  label: string;
};

export type SuggestionEntity = {
  id: number;
  title: string;
  description: string;
  tags: TagEntity[];
  status: StatusEntity;
  createdAt: Date;
  grade: number;
};
