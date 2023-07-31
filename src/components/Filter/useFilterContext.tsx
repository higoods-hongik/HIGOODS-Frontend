import { createContext, ReactNode, useContext, useState } from "react";

type FilterContextType = {
  checkedValue: string[];
  setCheckedValue: (newValue: string[]) => void;
};

const defaultState: FilterContextType = {
  checkedValue: [],
  setCheckedValue: () => {},
};

const FilterContext = createContext<FilterContextType>(defaultState);

const FilterProvider = ({
  children,
  defaultChecked = [],
}: {
  children: ReactNode;
  defaultChecked?: string[];
}) => {
  const [checkedValue, setCheckedValue] = useState<string[]>(defaultChecked);

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
