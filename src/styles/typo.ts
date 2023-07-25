import { css } from "@emotion/react";

const generateTypo = (
  size: number,
  weight: number,
  lineHeight: number = 140
) => css`
  font-style: normal;
  line-height: ${lineHeight}%;
  font-display: auto;
  font-weight: ${weight};
  font-size: ${size}px;
`;

export const typo = {
  "heading.1": generateTypo(24, 600),
  "heading.2": generateTypo(20, 600),
  "heading.3": generateTypo(18, 600),
  "heading.4": generateTypo(16, 600),
  "label.1": generateTypo(14, 500, 120),
  "label.2": generateTypo(14, 600),
  "label.3": generateTypo(12, 600),
  "body.1": generateTypo(16, 500, 160),
  "body.2": generateTypo(14, 500, 160),
} as const;
