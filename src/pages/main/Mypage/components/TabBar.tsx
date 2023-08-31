import styled from "@emotion/styled";

import React, { ComponentProps, useEffect, useState } from "react";
import { useRef } from "react";

import { css } from "@emotion/react";
import { media } from "~/styles/theme";
import useScreenWidth from "~/hooks/useScreenWidth";
import { Padding, PaddingSize } from "~/components/layout/Padding";
import { FlexBox } from "~/components/layout/FlexBox";
import { Txt } from "~/components/atoms/Txt";

export interface TabBarProps extends ComponentProps<"div"> {
  menus: string[];
  curActiveMenu: number;
  setCurActiveMenu: (nextMenu: number) => void;
  padding?: PaddingSize;
}

export const TabBar = ({
  menus,
  curActiveMenu,
  setCurActiveMenu,
  padding = [0, 0],
  ...rest
}: TabBarProps) => {
  const width = useScreenWidth(50);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement[]>([]);
  // [left position, width]
  const [indicatorPositionAndWidth, setIndicatorPositionAndWidth] = useState<
    [number, number]
  >([0, 0]);

  const addRef = (element: HTMLDivElement) => {
    if (contentRef.current.length < menus.length)
      contentRef.current?.push(element);
  };

  useEffect(() => {
    if (
      contentRef.current.length === menus.length &&
      curActiveMenu + 1 > 0 &&
      curActiveMenu + 1 <= menus.length
    ) {
      menuIndicatorHandler(curActiveMenu);
    } else {
      setIndicatorPositionAndWidth([0, 0]);
    }
  }, [curActiveMenu]);

  useEffect(() => {
    menuIndicatorHandler(curActiveMenu);
  }, [width]);

  const menuIndicatorHandler = (index: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    const leftMarginWidth = wrapperRef.current
      ? wrapperRef.current.getBoundingClientRect().left
      : 0;
    const indicatorPosition =
      contentRef.current[index].getBoundingClientRect().left -
      leftMarginWidth +
      convertedPadding[3];
    const indicatorWidth =
      contentRef.current[index].getBoundingClientRect().width;
    setCurActiveMenu(index);
    setIndicatorPositionAndWidth([indicatorPosition, indicatorWidth]);
  };

  const convertedPadding = paddingConvertion({ padding });

  return (
    <TabBarWrapper size={convertedPadding as PaddingSize} {...rest}>
      <div ref={wrapperRef}>
        <FlexBox justify="center" gap={14}>
          {menus.map((menu, index) => (
            <div ref={(el: HTMLDivElement) => addRef(el)} key={menu}>
              <Content
                key={index}
                onClick={(e: React.MouseEvent) =>
                  menuIndicatorHandler(index, e)
                }
              >
                <Txt
                  as="div"
                  css={css`
                    display: block;
                    height: 22px;
                    white-space: nowrap;
                  `}
                  typo="heading.4"
                  color={curActiveMenu === index ? "black" : "grey4"}
                >
                  {menu}
                </Txt>
              </Content>
            </div>
          ))}
        </FlexBox>
        <Indicator leftAndWidth={indicatorPositionAndWidth} />
      </div>
    </TabBarWrapper>
  );
};

// ------------------------------------------------------

interface paddingConvertionProps {
  padding: PaddingSize;
}

const paddingConvertion = ({ padding }: paddingConvertionProps) => {
  const convertedPadding =
    typeof padding === "number"
      ? [padding, padding, 0, padding]
      : padding.length === 2
      ? [padding[0], padding[1], 0, padding[1]]
      : [padding[0], padding[1], 0, padding[3]];
  return convertedPadding;
};

// ------------------------------------------------------

const TabBarWrapper = styled(Padding)`
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey2};
  position: relative;
  height: 100%;
`;

const Content = styled.div`
  width: 144px;
  display: flex;
  justify-content: center;
  padding-bottom: 12px;
  ${media.mobile} {
    width: calc((100vw - 60px) / 3);
  }
  & > span:hover {
    cursor: pointer;
  }
`;

interface IndicatorProps {
  leftAndWidth: [number, number];
}

const Indicator = styled.div<IndicatorProps>`
  position: absolute;
  height: 2px;
  background: ${({ theme }) => theme.palette.red};
  left: ${({ leftAndWidth }) => `${leftAndWidth[0]}px`};
  width: ${({ leftAndWidth }) => `${leftAndWidth[1]}px`};
  transition: all 300ms ease-in-out;
  transform: translateY(-1px);
`;
