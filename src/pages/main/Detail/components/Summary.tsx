import styled from "@emotion/styled";
import { Divider } from "~/components/atoms/Divider";
import SquareImage from "~/components/atoms/SquareImage";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import { media } from "~/styles/theme";

const Summary = () => {
  return (
    <GridWrapper>
      <SquareImage imageUrl="" />
      <Contents direction={"column"} align={"start"} justify={"space-between"}>
        <Heading>
          <Txt typo="label.2" color="grey6">
            잡화
          </Txt>
          <Media.Spacing mobile={8} pc={6} />
          <Media.Txt mobile="heading.3" pc="heading.2" color="black">
            공구 제목 공구 제목 공구 제목 공구 제목 공구 제목 공구 제목 공구
            제목 공구 제목
          </Media.Txt>
          <Media.Spacing mobile={8} pc={12} />
          <Txt typo="body.2" color="grey4">
            한줄소개 한줄소개 한줄 소개
          </Txt>
        </Heading>
        <Media.Mobile>
          <Divider color="grey2" padding={[24, 0]} />
        </Media.Mobile>
        <SubInfoContainer>
          <SubInfo justify={"space-between"} fullWidth>
            <Txt typo="label.2" color="grey4">
              최소 인원
            </Txt>
            <Txt typo="label.2">00/000명</Txt>
          </SubInfo>
          <SubInfo justify={"space-between"} fullWidth>
            <Txt typo="label.2" color="grey4">
              주문 마감일
            </Txt>
            <Txt typo="label.2">2023.04.23</Txt>
          </SubInfo>
          <Price typo="heading.1">00,000원~00,000원</Price>
        </SubInfoContainer>
      </Contents>
    </GridWrapper>
  );
};

export default Summary;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  ${media.pc} {
    grid-template-columns: 1fr 1fr;
  }
  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Contents = styled(FlexBox)``;
const Heading = styled.div``;

const SubInfoContainer = styled(FlexBox)`
  flex-direction: column;
  gap: 8px;
  width: 100%;
  ${media.pc} {
    transform: translateY(8px);
  }
`;
const SubInfo = styled(FlexBox)``;
const Price = styled(Txt)`
  margin-left: auto;
  margin-top: 16px;
`;
