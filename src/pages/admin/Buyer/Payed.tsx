import SearchInput from "~/components/atoms/SearchInput";
import { Txt } from "~/components/atoms/Txt";
import { Spacing } from "~/components/layout/Spacing";
import { CustomTable } from "~/components/table";

export const Payed = () => {
  return (
    <>
      <Txt typo="heading.1">입금 확인 목록</Txt>
      <Spacing size={8} />
      <Txt typo="body.1">이미 승인이 완료된 분들이에요.</Txt>
      <Spacing size={24} />
      <SearchInput placeholder="이름을 입력하세요." />
      <CustomTable />
    </>
  );
};
