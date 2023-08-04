import { Txt } from "~/components/atoms/Txt";
import Media from "~/components/layout/Media";
import MobileContainer from "~/components/layout/MobileContainer";
import PcContainer from "~/components/layout/PcContainer";

import { Divider } from "~/components/atoms/Divider";
import { ReactNode } from "react";

const FormPageLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <PcContainer>
        <MobileContainer>
          <Media.Spacing mobile={26} pc={48} />
          <Media.Txt mobile="body.2" pc="heading.4" color="grey4">
            {title}
          </Media.Txt>
          <Media.Spacing mobile={8} pc={12} />
          <Media.Txt mobile="heading.2" pc="heading.1">
            주문 폼 작성하기
          </Media.Txt>
          <Media.Spacing mobile={8} pc={19} />
          <Txt typo="label.2" color={"red"}>
            *모든 항목을 입력해주세요.
          </Txt>
          <Media.Padding mobile={0} pc={[0, 336, 0, 0]}>
            <Media.PC>
              <Divider color="black" padding={[47, 0, 0, 0]} />
            </Media.PC>
            {children}
          </Media.Padding>
        </MobileContainer>
      </PcContainer>
    </>
  );
};

export default FormPageLayout;
