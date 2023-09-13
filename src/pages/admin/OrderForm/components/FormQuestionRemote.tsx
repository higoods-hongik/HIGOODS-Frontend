import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { Spacing } from "~/components/layout/Spacing";

export const FormQuestionRemote = ({
  onAddMultipleChoice,
  onAddSubjective,
}: {
  onAddMultipleChoice: () => void;
  onAddSubjective: () => void;
}) => {
  return (
    <>
      <Txt typo="heading.4" as="div">
        항목 직접 추가하기
      </Txt>
      <Spacing size={12} />
      <Txt typo="body.2" color="grey4" as="div">
        제공되는 질문 외 물어볼 정보가 있다면,
        <br />
        자유롭게 질문 항목을 추가해보세요.
      </Txt>
      <Spacing size={32} />
      <Button size="md" color="red20" fullWidth onClick={onAddMultipleChoice}>
        객관식 항목
      </Button>
      <Spacing size={16} />
      <Button size="md" color="red20" fullWidth onClick={onAddSubjective}>
        주관식 항목
      </Button>
    </>
  );
};
