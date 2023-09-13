import { css } from "@emotion/react";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import { GridBox } from "~/components/layout/GridBox";
import { Spacing } from "~/components/layout/Spacing";
import { palette } from "~/styles/palette";
import { BasicForm } from "./components/BasicForm";
import { FormQuestionRemote } from "./components/FormQuestionRemote";

const OrderForm = () => {
  return (
    <>
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <GridBox.Left>
          <Txt typo="heading.2" as="div" css={subTitleStyle}>
            기본항목은 수정이 불가합니다
          </Txt>
          <BasicForm shipmentType="both" />

          <Spacing size={48} />
          <Txt typo="heading.2" as="div" css={subTitleStyle}>
            추가 항목을 입력하세요
          </Txt>
        </GridBox.Left>

        <GridBox.Right css={stickyLikeStyle}>
          {/* @TODO api 나오면 그때 작업하기 */}
          <FormQuestionRemote
            onAddMultipleChoice={() => console.log("")}
            onAddSubjective={() => console.log("")}
          />
        </GridBox.Right>
      </GridBox>
      <Spacing size={60} />
      <FlexBox gap={24}>
        <Button color="red20" size="lg" width={312}>
          저장하기
        </Button>
        <Button color="red" size="lg" width={312}>
          업로드하기
        </Button>
      </FlexBox>
      <Spacing size={100} />
    </>
  );
};

export default OrderForm;

const subTitleStyle = css({
  paddingBottom: 8,
  width: "100%",
  borderBottom: `1px solid ${palette.black}`,
});

const stickyLikeStyle = css({
  paddingTop: 32,
  position: "fixed",
  marginLeft: 732,
  width: 252,
});
