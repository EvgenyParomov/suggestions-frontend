import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { StatusId, TagId } from "./entities";

export type SuggestionOrder = "grade-desc" | "createAt-desc";

export type SuggestionFiltersData = {
  query: string;
  tag: TagId | undefined;
  status: StatusId | undefined;
  order: SuggestionOrder;
};

const filtersContext = createContext<{
  data: SuggestionFiltersData;
  setData: Dispatch<SetStateAction<SuggestionFiltersData>>;
} | null>(null);

export function FiltersDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SuggestionFiltersData>({
    order: 'createAt-desc',
    query: "",
    status: undefined,
    tag: undefined,
  });
  return (
    <filtersContext.Provider value={useMemo(() => ({ data, setData }), [data])}>
      {children}
    </filtersContext.Provider>
  );
}

export function useFilters() {
  const contextValue = useContext(filtersContext);
  if (!contextValue) throw new Error("context not provided");

  const { data, setData } = contextValue;

  const updateQuery = (query: string) => {
    setData((d) => ({ ...d, query }));
  };
  const updateTag = (tag: TagId | undefined) => {
    setData((d) => ({ ...d, tag }));
  };
  const updateStatus = (status: StatusId | undefined) => {
    setData((d) => ({ ...d, status }));
  };
  const updateOrder = (order: SuggestionOrder) => {
    setData((d) => ({ ...d, order }));
  };

  return {
    data,
    updateStatus,
    updateTag,
    updateQuery,
    updateOrder,
  };
}
