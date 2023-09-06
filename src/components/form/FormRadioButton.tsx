import { useFormContext } from "react-hook-form";
import Button from "../atoms/Button";
import { ComponentProps } from "react";

export const FormRadioButton = ({
  name,
  value,
  ...rest
}: { name: string; value: string } & Omit<
  ComponentProps<typeof Button>,
  "color" | "size"
>) => {
  const { setValue, watch } = useFormContext();

  return (
    <Button
      color={watch(name) === value ? "line" : "lineGray"}
      size="md"
      value={value}
      onClick={(e) => setValue(name, e.currentTarget.value)}
    >
      {rest.children}
    </Button>
  );
};
