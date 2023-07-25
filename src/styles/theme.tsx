import { ThemeProvider as BaseThemeProvider } from "@emotion/react";

import { palette } from "./palette";
import { typo } from "./typo";

export const theme = {
  palette,
  typo,
};
export type keyOfPalette = keyof typeof palette;
export type keyOfTypo = keyof typeof typo;

export const ThemeProvider = (props: React.PropsWithChildren<unknown>) => {
  const { children } = props;
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
