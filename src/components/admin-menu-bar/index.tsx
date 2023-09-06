import { css } from "@emotion/react";
import { FlexBox } from "../layout/FlexBox";
import PcContainer from "../layout/PcContainer";
import { Spacing } from "../layout/Spacing";
import { AdminMenuItem } from "./AdminMenuItem";
import styled from "@emotion/styled";
import { palette } from "~/styles/palette";

export const AdminMenu = () => {
  return (
    <div
      css={css({
        position: "fixed",
        width: "100%",
        backgroundColor: palette.white,
      })}
    >
      <Spacing size={48} />
      <AdminMenuContainer>
        <PcContainer>
          <FlexBox justify={"flex-start"} gap={24}>
            <AdminMenuItem
              label="공구 정보"
              to="info"
              subMenu={[
                { label: "프로젝트 정보 입력", to: "basic" },
                { label: "상품 정보 입력", to: "product" },
                { label: "상세 정보 입력", to: "detail" },
              ]}
            />
            <AdminMenuItem label="주문폼" to="form" />
            <AdminMenuItem
              label="공지하기"
              to="notice"
              subMenu={[
                { label: "공지 작성", to: "post" },
                { label: "현황 업데이트", to: "timeline" },
              ]}
            />
            <AdminMenuItem
              label="명단관리"
              to="buyer"
              subMenu={[
                { label: "승인 대기 목록", to: "waiting" },
                { label: "입금 확인 목록", to: "payed" },
              ]}
            />
            <AdminMenuItem
              label="배송/배부 관리"
              to="delivery"
              subMenu={[
                { label: "배송/송장 관리", to: "parcel" },
                { label: "QR/현장 배부", to: "handout" },
              ]}
            />
            <AdminMenuItem label="통계" to="dashboard" />
          </FlexBox>
        </PcContainer>
      </AdminMenuContainer>
    </div>
  );
};

const AdminMenuContainer = styled(FlexBox)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey2};
`;
