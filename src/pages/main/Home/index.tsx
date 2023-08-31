import styled from "@emotion/styled";
import { Col, Row } from "antd/es/grid";
import PcContainer from "~/components/layout/PcContainer";
import HomeHeading from "./components/HomeHeading";
import BestPreviewItem from "./components/BestPreviewItem";
import MobileContainer from "~/components/layout/MobileContainer";
import { media } from "~/styles/theme";
import { Spacing } from "~/components/layout/Spacing";
import Media from "~/components/layout/Media";
import MyHistory from "./components/MyHistory";
import GongGuItem from "~/components/GongGuItem";

const HomePage = () => {
  return (
    <>
      <BannerVideoContainer>
        <BannerVideo muted loop autoPlay playsInline poster="/banner-image.png">
          <source src="/banner-pc.mp4" type="video/mp4" />
        </BannerVideo>
      </BannerVideoContainer>
      <Media.Spacing mobile={35} pc={42} />
      <PcContainer>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={16}>
            <HomeHeading
              pcLabel="BEST 공구 상품들 "
              mobileLabel="BEST 공구"
              link="/explore"
            />
            <Media.Spacing mobile={16} pc={27} />
            <MobileContainer>
              <BestPreviewItemContainer>
                <BestPreviewItem
                  title="공구제목공구제목공구제목공구제목공구제목공구제목공구제목공구제목"
                  description="공구설명공구설명"
                  id={1}
                />
                <BestPreviewItem title="asdf" description="asdsadf" id={1} />
              </BestPreviewItemContainer>
            </MobileContainer>
            <Media.Spacing mobile={35} pc={57} />
            <HomeHeading
              pcLabel="최근 올라온 공구 목록들 "
              mobileLabel="NEW 업데이트"
              link="/explore"
            />
            <Media.Spacing mobile={0} pc={27} />
            <MobileContainer>
              <GongGuItemRowContainer>
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
              </GongGuItemRowContainer>
            </MobileContainer>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Media.Padding mobile={0} pc={[0, 0, 0, 60]}>
              <Media.Mobile>
                <Spacing size={40} />
                <HomeHeading mobileLabel="내 공구 내역" />
              </Media.Mobile>
              <Media.PC>
                <PcMyHistoryHeading>내 공구 내역</PcMyHistoryHeading>
                <Spacing size={20} />
              </Media.PC>
              <MyHistory
                title="공구제목"
                description="공구 한줄소개"
                date="2023.05.23"
                process="진행 상황"
                updateNotice="업데이트 공지내용"
              />
              <MyHistory
                title="공구제목"
                description="공구 한줄소개"
                date="2023.05.23"
                process="진행 상황"
                updateNotice="업데이트 공지내용 업데이트 공지내용업데이트 공지내용업데이트 공지내용업데이트 공지내용업데이트 공지내용업데이트 공지내용업데이트 공지내용"
              />
            </Media.Padding>
          </Col>
        </Row>
      </PcContainer>
      <Spacing size={100} />
    </>
  );
};

export default HomePage;

const BannerVideoContainer = styled.div`
  ${media.pc} {
    position: relative;
    padding-bottom: 29.84375%;
    height: 0;
  }
`;

const BannerVideo = styled.video`
  ${media.pc} {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  width: 100%;
  object-fit: contain;
  ${media.mobile} {
    height: 375px;
    object-fit: cover;
  }
  background-color: lightgray;
`;
const BestPreviewItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 30px;
`;
const GongGuItemRowContainer = styled.div`
  ${media.pc} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 30px;
  }
`;

const PcMyHistoryHeading = styled.div`
  ${({ theme }) => theme.typo["heading.3"]}
  padding-top: 5px;
`;
