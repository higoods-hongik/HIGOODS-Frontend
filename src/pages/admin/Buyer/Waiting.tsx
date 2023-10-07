import SearchInput from "~/components/atoms/SearchInput";
import { Txt } from "~/components/atoms/Txt";
import { Spacing } from "~/components/layout/Spacing";

export const Waiting = () => {
  return (
    <>
      <Txt typo="heading.1">승인 대기 목록</Txt>
      <Spacing size={8} />
      <Txt typo="body.1">입금 확인을 기다리는 분들이에요.</Txt>
      <Spacing size={24} />
      <SearchInput placeholder="이름을 입력하세요." />
    </>
  );
};
