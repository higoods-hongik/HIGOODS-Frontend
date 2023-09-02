import styled from "@emotion/styled";
import Media from "~/components/layout/Media";
import { Padding } from "~/components/layout/Padding";

export const Notices = () => {
  return (
    <>
      <Media.Txt pc="heading.3" mobile="heading.4">
        공지
      </Media.Txt>
      <Media.Spacing pc={24} mobile={12} />
      <Contents size={[24, 0]}>정보정보..</Contents>
    </>
  );
};
const Contents = styled(Padding)`
  border-top: 1px solid ${({ theme }) => theme.palette.grey6};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey6};
`;
