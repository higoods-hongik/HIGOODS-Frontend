import { createContext, ReactNode, useContext, useState } from "react";

type RadioContextType = {
  checkedValue: string[];
  setCheckedValue: (newValue: string[]) => void;
  onChange?: (name: string, value: string[]) => void;
  name: string;
  type: "checkbox" | "radio";
};

const defaultState: RadioContextType = {
  checkedValue: [],
  setCheckedValue: () => {},
  onChange: () => {},
  name: "",
  type: "checkbox",
};

const RadioContext = createContext<RadioContextType>(defaultState);

const RadioProvider = ({
  children,
  defaultChecked = [],
  name,
  onChange,
  outerValue,
  type = "checkbox",
}: {
  children: ReactNode;
  defaultChecked?: string[];
  name: string;
  onChange?: (name: string, value: string[]) => void;
  outerValue?: string[];
  type: "checkbox" | "radio";
}) => {
  const [checkedValue, setCheckedValue] = useState<string[]>(defaultChecked);

  return (
    <RadioContext.Provider
      value={{
        checkedValue: outerValue ? outerValue : checkedValue,
        setCheckedValue,
        name,
        onChange,
        type,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};

const useRadioContext = (): RadioContextType => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error(
      "useRadioContext 훅은 RadioProvider 안에서 사용 되어야 해요."
    );
  }
  return context;
};

export { RadioProvider, useRadioContext };
