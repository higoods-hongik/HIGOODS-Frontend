import { useState } from "react";
import Filter from "~/components/Filter";
import { Txt } from "~/components/atoms/Txt";
import { ReactComponent as ResetIcon } from "~/assets/icon/x-icon.svg";
import { ReactComponent as CountPlus } from "~/assets/icon/count-plus.svg";
import { ReactComponent as CountMinus } from "~/assets/icon/count-minus.svg";
import styled from "@emotion/styled";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import { media } from "~/styles/theme";
import Button from "~/components/atoms/Button";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

type OptionType = Record<string, string[]>;

const SelectOption = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState<OptionType>({
    사이즈: [],
    수령: [],
  });
  const [count, setCount] = useState(1);
  const handleChange = (name: string, value: string[]) => {
    setOption({ ...option, [name]: value });
  };
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const getSelectedText = (option: OptionType) => {
    const selectedOptionText = Object.keys(option)
      .filter((v) => option[v].length !== 0)
      .map((v) => `${option[v]}`);

    return selectedOptionText.length > 0 ? selectedOptionText.join(", ") : null;
  };

  return (
    <>
      <Filter.Box
        title="사이즈"
        name="사이즈"
        folding
        value={option["사이즈"]}
        onChange={handleChange}
        type="radio"
      >
        <Filter.Option value="S">S</Filter.Option>
        <Filter.Option value="M">M</Filter.Option>
        <Filter.Option value="L">L</Filter.Option>
      </Filter.Box>
      <Media.Spacing pc={22} mobile={8} />
      <Filter.Box
        title="수령"
        name="수령"
        folding
        value={option["수령"]}
        onChange={handleChange}
        type="radio"
      >
        <Filter.Option value="배송">배송</Filter.Option>
        <Filter.Option value="현장 수령">현장 수령</Filter.Option>
      </Filter.Box>
      <Media.Spacing pc={24} mobile={4} />
      <SelectedOption justify={"space-between"}>
        <Txt typo="body.1" color={getSelectedText(option) ? "black" : "grey3"}>
          {getSelectedText(option) ?? "옵션을 선택해주세요"}
        </Txt>
        {getSelectedText(option) && (
          <FlexBox gap={isMobile ? 25 : 16}>
            <FlexBox justify={"space-between"} css={css({ width: 70 })}>
              <CountPlus onClick={() => setCount(Math.max(1, count - 1))} />
              <Txt typo="body.1">{String(count)}</Txt>
              <CountMinus onClick={() => setCount(count + 1)} />
            </FlexBox>
            <ResetIcon
              onClick={() =>
                setOption({
                  사이즈: [],
                  수령: [],
                })
              }
            />
          </FlexBox>
        )}
      </SelectedOption>
      <Media.Spacing pc={40} mobile={44} />
      <Price>
        <Media.Txt mobile="body.2" pc="body.1">
          총 금액
        </Media.Txt>
        <Media.Txt mobile="heading.3" pc="heading.1" color="red">
          00,000원
        </Media.Txt>
      </Price>
      <Media.Spacing pc={22} mobile={24} />
      <ButtonSet>
        <Button size={isMobile ? "md" : "lg"} color="red20">
          스크랩하기
        </Button>
        <Button
          size={isMobile ? "md" : "lg"}
          color="red"
          onClick={() => navigate("start")}
        >
          참여하기
        </Button>
      </ButtonSet>
    </>
  );
};

export default SelectOption;

const SelectedOption = styled(FlexBox)`
  box-sizing: border-box;
  ${media.pc} {
    height: 26px;
  }
  ${media.mobile} {
    height: 46px;
  }
`;
const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.pc} {
    gap: 8px;
    align-items: flex-end;
  }
  ${media.mobile} {
    gap: 12px;
    align-items: center;
  }
`;

const ButtonSet = styled.div`
  ${media.pc} {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  ${media.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 14px;
  }
`;
