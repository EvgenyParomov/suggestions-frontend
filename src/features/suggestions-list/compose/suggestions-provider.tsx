import { ReactNode } from "react";
import { FiltersDataProvider } from "../model/filters.model";

export function SuggestionsProvider({ children }: { children: ReactNode }) {
  return <FiltersDataProvider>{children}</FiltersDataProvider>;
}
