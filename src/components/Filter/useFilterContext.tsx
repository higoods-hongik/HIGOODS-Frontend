import { createContext, ReactNode, useContext, useState } from "react";

type FilterContextType = {
  checkedValue: string[];
  setCheckedValue: (newValue: string[]) => void;
};

const defaultState = { checkedValue: [], setCheckedValue: () => {} };

const FilterContext = createContext<FilterContextType>(defaultState);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [checkedValue, setCheckedValue] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{ checkedValue, setCheckedValue }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilteContext 훅은 FilterProvider 안에서 사용 되어야 해요."
    );
  }
  return context;
};

export { FilterProvider, useFilterContext };
