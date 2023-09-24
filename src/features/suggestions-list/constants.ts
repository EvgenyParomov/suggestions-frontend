import { SuggestionOrder } from "./model/filters.model";

export const tagsOptions = [
  { id: undefined, label: "Без тега" },
  { id: 1, label: "Тег1" },
  { id: 2, label: "Тег2" },
  { id: 3, label: "Тег3" },
];

export const statusOptions = [
  { id: undefined, label: "Любой" },
  { id: 1, label: "Открыто" },
  { id: 2, label: "Закрыто" },
];

export const sortOptions = [
  { id: "createAt-desc", label: "По дате создания" },
  { id: "grade-desc", label: "По пулярности" },
] satisfies Array<{ id: SuggestionOrder; label: string }>;
