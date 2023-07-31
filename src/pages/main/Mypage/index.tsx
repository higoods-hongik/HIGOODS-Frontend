import Media from "~/components/layout/Media";
import Profile from "./components/Profile";
import { TabBar } from "./components/TabBar";
import { useState } from "react";
import styled from "@emotion/styled";
import { media } from "~/styles/theme";
import MobileContainer from "~/components/layout/MobileContainer";
import GongGuItem from "~/components/GongGuItem";
import { Spacing } from "~/components/layout/Spacing";

const Mypage = () => {
  const [menuIndex, setMenuIndex] = useState<number>(0);
  return (
    <>
      <Media.Spacing mobile={36} pc={80} />
      <Profile name="한규진" schoolId="B811204" major="컴퓨터공학과" />
      <Media.Spacing mobile={40} pc={65} />
      <TabBar
        curActiveMenu={menuIndex}
        setCurActiveMenu={setMenuIndex}
        menus={["내가 구매한", "내가 진행한", "내 관심 공구"]}
      />
      <Media.Spacing mobile={24} pc={60} />
      <MobileContainer>
        <Contents>
          <GongGuItem
            varients="row"
            data={{
              id: 1,
              category: "의류",
              title:
                "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
              description: "한줄 설명 한줄설명",
              process: "진행 현황",
            }}
          />
          <GongGuItem
            varients="row"
            data={{
              id: 1,
              category: "의류",
              title:
                "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
              description: "한줄 설명 한줄설명",
              process: "진행 현황",
            }}
          />
          <GongGuItem
            varients="row"
            data={{
              id: 1,
              category: "의류",
              title:
                "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
              description: "한줄 설명 한줄설명",
              process: "진행 현황",
            }}
          />
        </Contents>
      </MobileContainer>
      <Spacing size={100} />
    </>
  );
};

export default Mypage;

const Contents = styled.div`
  ${media.pc} {
    margin: auto;
    width: 652px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 30px;
  }
`;
