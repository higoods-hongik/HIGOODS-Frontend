import styled from "@emotion/styled";
import { Col, Row } from "antd/es/grid";
import { useState } from "react";
import Filter from "~/components/Filter";
import CheckBox from "~/components/Filter/CheckBox";
import GongGuItem from "~/components/GongGuItem";
import { Divider } from "~/components/atoms/Divider";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import MobileContainer from "~/components/layout/MobileContainer";
import PcContainer from "~/components/layout/PcContainer";
import { Spacing } from "~/components/layout/Spacing";
import { media } from "~/styles/theme";

const Explore = () => {
  const [order, setOrder] = useState<"date" | "head">("date");

  return (
    <>
      <Media.Spacing mobile={32} pc={60} />
      <PcContainer>
        <MobileContainer>
          <Media.Txt mobile="heading.2" pc="heading.1">
            진행 중인 공구
          </Media.Txt>
          <Media.Spacing mobile={8} pc={8} />
          <Media.Txt mobile="body.2" pc="heading.4" color="grey4">
            현재 참여 가능한 공구 상품들을 둘러보세요.
          </Media.Txt>
          <Media.Spacing mobile={32} pc={46} />

          <Row gutter={24}>
            <Col xs={24} sm={24} md={6}>
              <Filter title="카테고리" defaultOpen={false}>
                <CheckBox value="의류">의류</CheckBox>
                <CheckBox value="잡화">잡화</CheckBox>
                <CheckBox value="잡화">문구</CheckBox>
                <CheckBox value="잡화">기타</CheckBox>
              </Filter>
              <Media.Spacing mobile={8} pc={20} />
              <Filter title="진행사항" defaultOpen={false}>
                <CheckBox value="진행중">진행중</CheckBox>
                <CheckBox value="마감 임박">마감 임박</CheckBox>
                <CheckBox value="마감 완료">마감 완료</CheckBox>
              </Filter>
            </Col>
            <Col xs={24} sm={24} md={18}>
              <Media.Spacing mobile={32} pc={0} />
              <ListSearchConfig justify={"space-between"}>
                <Media.Txt mobile="label.2" pc="heading.4" color="grey6">
                  총 00건
                </Media.Txt>
                <ToggleOrder order={order}>
                  <button onClick={() => setOrder("date")} id="order-date">
                    최신순
                  </button>
                  <>{" | "}</>
                  <button onClick={() => setOrder("head")} id="order-head">
                    참여순
                  </button>
                </ToggleOrder>
              </ListSearchConfig>
              <Media.Spacing pc={32} mobile={16} />
              <Media.Mobile>
                <Divider color="grey6" />
                <Spacing size={4} />
              </Media.Mobile>
              <ListContainer>
                <GongGuItem
                  varients="col"
                  data={{
                    category: "의류",
                    title:
                      "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
                    description: "한줄 설명 한줄설명",
                    process: "진행 현황",
                    price: 20000,
                  }}
                />
                <GongGuItem
                  varients="col"
                  data={{
                    category: "의류",
                    title:
                      "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
                    description: "한줄 설명 한줄설명",
                    process: "진행 현황",
                    price: 20000,
                  }}
                />
                <GongGuItem
                  varients="col"
                  data={{
                    category: "의류",
                    title:
                      "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
                    description: "한줄 설명 한줄설명",
                    process: "진행 현황",
                    price: 20000,
                  }}
                />
                <GongGuItem
                  varients="col"
                  data={{
                    category: "의류",
                    title:
                      "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
                    description: "한줄 설명 한줄설명",
                    process: "진행 현황",
                    price: 20000,
                  }}
                />
                <GongGuItem
                  varients="col"
                  data={{
                    category: "의류",
                    title:
                      "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
                    description: "한줄 설명 한줄설명",
                    process: "진행 현황",
                    price: 20000,
                  }}
                />
                <GongGuItem
                  varients="col"
                  data={{
                    category: "의류",
                    title:
                      "공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목 공구제목",
                    description: "한줄 설명 한줄설명",
                    process: "진행 현황",
                    price: 20000,
                  }}
                />
              </ListContainer>
            </Col>
          </Row>
        </MobileContainer>
      </PcContainer>
      <Spacing size={100} />
    </>
  );
};

export default Explore;

const ListSearchConfig = styled(FlexBox)``;
const ToggleOrder = styled.div<{ order: "date" | "head" }>`
  color: ${({ theme }) => theme.palette.grey4};
  #order-date {
    cursor: pointer;
    color: ${({ order, theme }) =>
      order === "date" ? theme.palette.black : theme.palette.grey4};
  }
  #order-head {
    cursor: pointer;
    color: ${({ order, theme }) =>
      order === "head" ? theme.palette.black : theme.palette.grey4};
  }

  ${media.pc} {
    ${({ theme }) => theme.typo["heading.4"]}
  }
  ${media.mobile} {
    ${({ theme }) => theme.typo["label.2"]}
  }
`;
const ListContainer = styled.div`
  ${media.pc} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;
