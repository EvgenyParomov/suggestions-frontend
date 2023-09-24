import { useSuggestionsList } from "../model/suggestions-list.model";
import { ListLayout } from "../ui/list-layout";
import { SuggestionCard } from "../ui/suggestion-card";

export function SuggestionsList() {
  const list = useSuggestionsList();

  return (
    <ListLayout>
      {list.map((suggestion) => (
        <SuggestionCard key={suggestion.id} {...suggestion} />
      ))}
    </ListLayout>
  );
}
