import { Modal } from "..";
import { Txt } from "~/components/atoms/Txt";
import Button from "~/components/atoms/Button";
import { Spacing } from "~/components/layout/Spacing";
import { css } from "@emotion/react";
import Media from "~/components/layout/Media";

export const CompleteEmail = ({
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
          이메일 인증이 완료되었습니다.
        </Txt>
        <Txt typo="heading.3" as="div" css={css({ textAlign: "center" })}>
          공구를 시작해보세요!
        </Txt>
        <Spacing size={24} />
        <Button color="red20" size="sm">
          홈으로 가기
        </Button>
      </Media.Padding>
    </Modal>
  );
};
