import { FormProvider, useForm } from "react-hook-form";
import InputRow from "../../../components/InputRow/InputRow";
import FormGroup from "./components/FormGroup";
import FormPageLayout from "./components/FormPageLayout";
import FormSwitch from "./components/FormSwitch";

const Form = () => {
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
          <FormGroup title="입금자명">
            <InputRow label="입금자명" name="purchaseName" />
            <InputRow label="환불 계좌" name="refundAccound" />
          </FormGroup>
        </form>
      </FormProvider>
    </FormPageLayout>
  );
};
export default Form;
