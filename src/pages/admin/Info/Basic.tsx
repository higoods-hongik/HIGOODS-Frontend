import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Txt } from "~/components/atoms/Txt";
import Input from "~/components/form/Input";
import { FlexBox } from "~/components/layout/FlexBox";
import { Padding } from "~/components/layout/Padding";
import { Spacing } from "~/components/layout/Spacing";

export const Basic = () => {
  return (
    <>
      <Spacing size={36} />
      <FlexBox gap={12} justify={"flex-start"}>
        <Txt typo="heading.1">프로젝트 정보 이력</Txt>
        <Txt typo="heading.4" color="red">
          (1/3 단계)
        </Txt>
      </FlexBox>
      <Spacing size={24} />
      <Padding size={[0, 336, 0, 0]}>
        <Txt typo="heading.4" required as="div">
          공구 프로젝트의 제목을 입력해주세요.
        </Txt>
        <FormInput fullWidth placeholder="내용을 입력하세요." />

        <Spacing size={52} />
        <Txt typo="heading.4" required as="div">
          공구 프로젝트에 대한 한 줄 소개를 작성해주세요.
        </Txt>
        <FormInput fullWidth placeholder="내용을 입력하세요." />

        <Spacing size={52} />
        <Txt typo="heading.4" required as="div">
          배송 / 현장 배부 여부를 선택해주세요.
        </Txt>
        <div
          css={css({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" })}
        ></div>
      </Padding>
    </>
  );
};

const FormInput = styled(Input)`
  margin-top: 12px;
`;
