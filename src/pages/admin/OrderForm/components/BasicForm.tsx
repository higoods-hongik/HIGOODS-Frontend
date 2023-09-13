import { FormProvider, useForm } from "react-hook-form";
import Button from "~/components/atoms/Button";
import CustomRow from "~/components/form/CustomRow";
import FormInputRow from "~/components/form/FormInputRow";
import Input from "~/components/form/Input";
import FormGroup from "~/pages/main/Form/components/FormGroup";
import FormSwitch from "~/pages/main/Form/components/FormSwitch";

/**
 * @TODO 배송 배부별 분기 처리 확인 필요
 */
export const BasicForm = ({
  shipmentType,
}: {
  shipmentType: "delivery" | "distribute" | "both";
}) => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <FormGroup title="주문자 정보">
        <FormInputRow label="이름" name="name" disabled />
        <FormInputRow label="학번" name="schoolId" disabled />
        <FormInputRow label="전화번호" name="phone" disabled />
      </FormGroup>

      {shipmentType === "both" && (
        <FormGroup title="상품 수령 방법을 선택해주세요.">
          <FormSwitch
            value="delivery"
            label="배송으로 받을게요"
            name="delivery"
            mock
          />
          <FormSwitch
            value="distribution"
            label="현장 배부로 받을게요"
            name="distribution"
            mock
          />
        </FormGroup>
      )}

      <FormGroup
        title="배송지 정보"
        description={
          shipmentType === "both"
            ? "* 배송을 선택한 유저에게만 보여지는 항목이에요."
            : undefined
        }
      >
        <CustomRow label="우편번호" name="zipCode" focused={true} isInit={true}>
          <Input fullWidth placeholder="내용을 입력하세요" disabled />
          <Button type="button" size="md" color="red20">
            우편번호 검색
          </Button>
        </CustomRow>
        <FormInputRow label="주소" name="address" disabled />
        <FormInputRow label="배송 메모" name="deliveryMemo" disabled />
      </FormGroup>

      <FormGroup title="입금자 정보">
        <FormInputRow label="입금자명" name="purchaseName" disabled />
        <FormInputRow label="환불 계좌" name="refundAccound" disabled />
      </FormGroup>

      <FormGroup
        title="주문한 상품은 현쟁 배부로 받아가셔야 합니다. 확인하셨나요?"
        description={
          shipmentType === "both"
            ? "* 현장 배부를 선택한 유저에게만 보여지는 항목이에요."
            : undefined
        }
      >
        <FormSwitch
          value={"distributeCheck"}
          label="네, 확인했습니다"
          name="distributeCheck"
          readOnly
          mock
        />
      </FormGroup>

      <FormGroup title="입금 후 주문서를 제출해주셔야 합니다. 입금 완료하셨나요?">
        <FormSwitch
          value={"payCheck"}
          label="네, 입금 완료했습니다"
          name="payCheck"
          readOnly
          mock
        />
      </FormGroup>
    </FormProvider>
  );
};
