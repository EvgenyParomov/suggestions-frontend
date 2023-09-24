import {
  SuggestionsFilters,
  SuggestionsList,
  SuggestionsProvider,
} from "@/features/suggestions-list";
import { Layout } from "./ui/layout";
import { MainActions } from "./ui/main-actions";
import { MainPageInfo } from "./ui/main-page-info";

export function HomePage() {
  return (
    <SuggestionsProvider>
      <Layout
        actions={<MainActions />}
        mainPageInfo={<MainPageInfo />}
        mainContent={<SuggestionsList />}
        sidebar={<SuggestionsFilters />}
      />
    </SuggestionsProvider>
  );
}
