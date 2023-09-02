import { Modal } from "..";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import Button from "~/components/atoms/Button";
import { Spacing } from "~/components/layout/Spacing";
import { css } from "@emotion/react";
import Media from "~/components/layout/Media";

export const NeedEmail = ({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) => {
  return (
    <Modal position="center" open={open} onClose={onClose} height={156}>
      <Media.Padding mobile={[16, 0]} pc={0}>
        <Txt typo="heading.3" as="div" css={css({ textAlign: "center" })}>
          이메일 인증이 필요합니다.
        </Txt>
        <Txt typo="heading.3" as="div" css={css({ textAlign: "center" })}>
          인증을 진행해주세요!
        </Txt>
        <Spacing size={24} />
        <FlexBox gap={12}>
          <Button color="red20" size="sm">
            돌아가기
          </Button>
          <Button color="red" size="sm">
            인증하러 가기
          </Button>
        </FlexBox>
      </Media.Padding>
    </Modal>
  );
};
