import { FormProvider, useForm } from "react-hook-form";
import InputRow from "../../../components/InputRow/InputRow";
import FormGroup from "./components/FormGroup";
import FormPageLayout from "./components/FormPageLayout";
import FormSwitch from "./components/FormSwitch";
import { useState } from "react";
import Button from "~/components/atoms/Button";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import { useMediaQuery } from "react-responsive";
import MobileContainer from "~/components/layout/MobileContainer";
import { Spacing } from "~/components/layout/Spacing";
import CustomRow from "~/components/InputRow/CustomRow";
import Input from "~/components/InputRow/Input";

const Form = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [payCheck, setPayCheck] = useState(false);
  const method = useForm({
    defaultValues: {
      name: "",
      schoolId: "",
      phone: "",
      purchaseName: "",
      refundAccount: "",
      delivery: "",
    },
  });

  //const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <FormPageLayout title={"공구제목"}>
        <FormProvider {...method}>
          <form>
            <FormGroup title="주문자 정보">
              <InputRow label="이름" name="name" />
              <InputRow label="학번" name="schoolId" />
              <InputRow label="전화번호" name="phone" />
            </FormGroup>
            <FormGroup title="상품 수령 방법을 선택해주세요.">
              <FormSwitch
                value="delivery"
                label="배송으로 받을게요"
                {...method.register("delivery")}
              />
              <FormSwitch
                value="distribution"
                label="현장 배부로 받을게요"
                {...method.register("delivery")}
              />
            </FormGroup>
            <FormGroup title="배송지 정보">
              <CustomRow
                label="우편번호"
                name="zipCode"
                focused={true}
                isInit={true}
              >
                <Input fullWidth placeholder="내용을 입력하세요" />
                <Button
                  type="button"
                  size="md"
                  color="red20"
                  onClick={() => console.log("//")}
                >
                  {isMobile ? "검색하기" : "우편번호 검색"}
                </Button>
              </CustomRow>
              <InputRow label="주소" name="address" />
              <InputRow label="배송 메모" name="deliveryMemo" />
            </FormGroup>
            <FormGroup title="입금자 정보">
              <InputRow label="입금자명" name="purchaseName" />
              <InputRow label="환불 계좌" name="refundAccound" />
            </FormGroup>
            <FormGroup title="입금 후 주문서를 제출해주셔야 합니다. 입금 완료하셨나요?">
              <FormSwitch
                value={"payCheck"}
                label="네, 입금 완료했습니다"
                name="payCheck"
                onClick={() => setPayCheck(!payCheck)}
                checked={payCheck}
                readOnly
              />
            </FormGroup>
          </form>
        </FormProvider>
      </FormPageLayout>
      <Media.Spacing pc={64} mobile={0} />
      <MobileContainer>
        <FlexBox>
          <Button
            size="lg"
            color="red"
            width={!isMobile ? 312 : undefined}
            fullWidth={isMobile}
          >
            제출하기
          </Button>
        </FlexBox>
      </MobileContainer>
      <Spacing size={100} />
    </>
  );
};
export default Form;
