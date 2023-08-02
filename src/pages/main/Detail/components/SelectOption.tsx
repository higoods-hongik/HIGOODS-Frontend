import { useState } from "react";
import Filter from "~/components/Filter";
import { Txt } from "~/components/atoms/Txt";
import { ReactComponent as ResetIcon } from "~/assets/icon/x-icon.svg";
import styled from "@emotion/styled";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import { media } from "~/styles/theme";
import Button from "~/components/atoms/Button";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

type OptionType = Record<string, string[]>;

const SelectOption = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState<OptionType>({
    사이즈: [],
    수령: [],
  });
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
      <Media.Spacing pc={30} mobile={24} />
      <SelectedOption justify={"space-between"}>
        <Txt typo="body.1" color={getSelectedText(option) ? "black" : "grey4"}>
          {getSelectedText(option) || "옵션을 선택해주세요"}
        </Txt>
        {getSelectedText(option) && (
          <ResetIcon
            onClick={() =>
              setOption({
                사이즈: [],
                수령: [],
              })
            }
          />
        )}
      </SelectedOption>
      <Media.Spacing pc={22} mobile={28} />
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
  padding: 0 13px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.palette.black};
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
