import styled from "@emotion/styled";
import { Col, Row } from "antd/es/grid";
import PcContainer from "~/components/atoms/layout/PcContainer";
import HomeHeading from "./components/HomeHeading";
import BestPreviewItem from "./components/BestPreviewItem";
import { FlexBox } from "~/components/atoms/layout/FlexBox";
import MediaSpacing from "~/components/atoms/layout/MediaSpacing";
import { GongGuItemMobile } from "~/components/GongGuItem/GongGuItemMobile";
import MobileContainer from "~/components/atoms/layout/MobileContainer";
import MediaQuery from "~/components/atoms/layout/MediaQuery";
import { GongGuItemRow } from "~/components/GongGuItem/GongGuItemRow";
import { css } from "@emotion/react";

const HomePage = () => {
  return (
    <>
      <BannerImage />
      <MediaSpacing mobile={35} pc={42} />
      <PcContainer>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={16}>
            <HomeHeading
              pcLabel="BEST 공구 상품들 "
              mobileLabel="BEST 공구"
              link="/explore"
            />
            <MediaSpacing mobile={16} pc={27} />
            <MobileContainer>
              <FlexBox gap={24}>
                <BestPreviewItem
                  title="공구제목공구제목"
                  description="공구설명공구설명"
                />
                <BestPreviewItem title="asdf" description="asdsadf" />
              </FlexBox>
            </MobileContainer>
            <MediaSpacing mobile={35} pc={57} />
            <HomeHeading
              pcLabel="최근 올라온 공구 목록들 "
              mobileLabel="NEW 업데이트"
              link="/explore"
            />
            <MediaSpacing mobile={0} pc={27} />
            <MediaQuery.PC>
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  grid-column-gap: 24px;
                  grid-row-gap: 30px;
                `}
              >
                <GongGuItemRow
                  category="의류"
                  title="공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목"
                  description="한줄 설명 한줄설명"
                  process="진행 현황"
                />
                <GongGuItemRow
                  category="의류"
                  title="공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목"
                  description="한줄 설명 한줄설명"
                  process="진행 현황"
                />
                <GongGuItemRow
                  category="의류"
                  title="공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목"
                  description="한줄 설명 한줄설명"
                  process="진행 현황"
                />
                <GongGuItemRow
                  category="의류"
                  title="공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목"
                  description="한줄 설명 한줄설명"
                  process="진행 현황"
                />
              </div>
            </MediaQuery.PC>
            <MediaQuery.Mobile>
              <MobileContainer>
                <GongGuItemMobile
                  category="의류"
                  title="공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목"
                  description="한줄 설명 한줄설명"
                  process="진행 현황"
                />
                <GongGuItemMobile
                  category="의류"
                  title="공구제목 공구제목"
                  description="한줄 설명 한줄설명"
                  process="진행 현황"
                />
                <GongGuItemMobile
                  category="의류"
                  title="공구제목 공구제목"
                  description="한줄 설명 한줄설명"
                  process="진행 현황"
                />
                <GongGuItemMobile
                  category="의류"
                  title="공구제목 공구제목"
                  description="한줄 설명 한줄설명"
                  process="진행 현황"
                />
              </MobileContainer>
            </MediaQuery.Mobile>
          </Col>
          <Col xs={24} sm={24} md={8}></Col>
        </Row>
      </PcContainer>
    </>
  );
};

export default HomePage;

const BannerImage = styled.div`
  width: 100%;
  height: 433px;
  background-color: lightgray;
`;
