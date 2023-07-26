import styled from "@emotion/styled";

import React, { ComponentProps, useEffect, useState } from "react";
import { useRef } from "react";
import { Padding, PaddingSize } from "../atoms/Padding";
import { FlexBox } from "../atoms/FlexBox";
import { Txt } from "../atoms/Txt";
import { css } from "@emotion/react";

/**
 * @param menus menu 항목
 * @param padding 패딩
 * number : 상하좌우 패딩
 * [number,number] : 상하, 좌우
 * [number,number,number,number] : 상, 우, 하, 좌
 * * 아랫쪽 패딩은 0으로 고정입니다.
 * @param curActiveMenu 현재 메뉴
 * 첫번째 메뉴부터 0 1 2 .... 이런식으로 지정하면 됩니다.
 * @param setCurActiveMenu 메뉴 변경
 */

export interface MenuBarProps extends ComponentProps<"div"> {
  menus: Array<string>;
  curActiveMenu: number;
  setCurActiveMenu: (nextMenu: number) => void;
  padding?: PaddingSize;
}

export const MenuBar = ({
  menus,
  curActiveMenu,
  setCurActiveMenu,
  padding = [0, 0],
  ...rest
}: MenuBarProps) => {
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
    <MenuBarWrapper size={convertedPadding as PaddingSize} {...rest}>
      <div ref={wrapperRef}>
        <FlexBox justify="start" gap={20}>
          {menus.map((menu, index) => (
            <div ref={(el: HTMLDivElement) => addRef(el)} key={menu}>
              <Content size={[0, 4, 15, 4]} key={index}>
                <Txt
                  css={css`
                    display: block;
                    height: 22px;
                    white-space: nowrap;
                  `}
                  typo="heading.4"
                  color={curActiveMenu === index ? "red" : "grey4"}
                  onClick={(e: React.MouseEvent) =>
                    menuIndicatorHandler(index, e)
                  }
                >
                  {menu}
                </Txt>
              </Content>
            </div>
          ))}
        </FlexBox>
        <Indicator leftAndWidth={indicatorPositionAndWidth} />
      </div>
    </MenuBarWrapper>
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

const MenuBarWrapper = styled(Padding)`
  //width: 100%;
  //border-bottom: 4px solid ${({ theme }) => theme.palette.red};
  position: relative;
  height: 100%;
`;

const Content = styled(Padding)`
  & > span:hover {
    cursor: pointer;
  }
`;

interface IndicatorProps {
  leftAndWidth: [number, number];
}

const Indicator = styled.div<IndicatorProps>`
  position: absolute;
  height: 4px;
  background: ${({ theme }) => theme.palette.red};
  left: ${({ leftAndWidth }) => `${leftAndWidth[0]}px`};
  width: ${({ leftAndWidth }) => `${leftAndWidth[1]}px`};
  transition: all 300ms ease-in-out;
  transform: translateY(-3px);
`;
