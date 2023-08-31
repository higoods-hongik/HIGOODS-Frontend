import styled from "@emotion/styled";
import { ReactComponent as DeleteIcon } from "~/assets/icon/delete.svg";
import { ReactComponent as UploadIcon } from "~/assets/icon/upload.svg";
import { FlexBox } from "~/components/layout/FlexBox";
import { media } from "~/styles/theme";

export const InfoProfileImage = () => {
  return (
    <>
      <ProfileCircle>
        <DimmedMask />
        <button>
          <UploadIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </ProfileCircle>
    </>
  );
};

const ProfileCircle = styled(FlexBox)`
  position: relative;
  width: 144px;
  height: 144px;
  background-color: ${({ theme }) => theme.palette.grey2};
  border-radius: 50%;
  margin: 0 auto;

  ${media.pc} {
    gap: 12px;
  }
  ${media.mobile} {
    gap: 24px;
  }

  button {
    cursor: pointer;
    z-index: 1;
    &:hover {
      transform: scale(1.1);
    }
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const DimmedMask = styled.div`
  position: absolute;
  width: 144px;
  height: 144px;
  border-radius: 50%;

  background-color: rgba(0, 0, 0, 50%);
`;
