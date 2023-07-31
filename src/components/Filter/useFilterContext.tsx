import { createContext, ReactNode, useContext, useState } from "react";

type FilterContextType = {
  checkedValue: string[];
  setCheckedValue: (newValue: string[]) => void;
  onChange?: (name: string, value: string[]) => void;
  name: string;
};

const defaultState: FilterContextType = {
  checkedValue: [],
  setCheckedValue: () => {},
  onChange: () => {},
  name: "",
};

const FilterContext = createContext<FilterContextType>(defaultState);

const FilterProvider = ({
  children,
  defaultChecked = [],
  name,
  onChange,
}: {
  children: ReactNode;
  defaultChecked?: string[];
  name: string;
  onChange?: (name: string, value: string[]) => void;
}) => {
  const [checkedValue, setCheckedValue] = useState<string[]>(defaultChecked);

  return (
    <FilterContext.Provider
      value={{ checkedValue, setCheckedValue, name, onChange }}
    >
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
