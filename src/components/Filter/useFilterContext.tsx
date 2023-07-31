import { createContext, ReactNode, useContext, useState } from "react";

type FilterContextType = {
  checkedValue: string[];
  setCheckedValue: (newValue: string[]) => void;
  onChange?: (name: string, value: string[]) => void;
  name: string;
  type: "checkbox" | "radio";
};

const defaultState: FilterContextType = {
  checkedValue: [],
  setCheckedValue: () => {},
  onChange: () => {},
  name: "",
  type: "checkbox",
};

const FilterContext = createContext<FilterContextType>(defaultState);

const FilterProvider = ({
  children,
  defaultChecked = [],
  name,
  onChange,
  type = "checkbox",
}: {
  children: ReactNode;
  defaultChecked?: string[];
  name: string;
  onChange?: (name: string, value: string[]) => void;
  type: "checkbox" | "radio";
}) => {
  const [checkedValue, setCheckedValue] = useState<string[]>(defaultChecked);

  return (
    <FilterContext.Provider
      value={{ checkedValue, setCheckedValue, name, onChange, type }}
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
