import styled from "@emotion/styled";
import { Txt } from "~/components/atoms/Txt";
import { Padding } from "~/components/layout/Padding";

const DetailInfo = () => {
  return (
    <>
      <Txt typo="heading.4">상세 정보</Txt>
      <Contents size={[100, 0]}>정보정보..</Contents>
    </>
  );
};

export default DetailInfo;

const Contents = styled(Padding)`
  margin-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.palette.grey6};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey6};
`;
