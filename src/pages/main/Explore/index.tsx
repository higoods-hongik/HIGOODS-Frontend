import Filter from "~/components/Filter";
import CheckBox from "~/components/Filter/CheckBox";
import Media from "~/components/layout/Media";
import MobileContainer from "~/components/layout/MobileContainer";
import PcContainer from "~/components/layout/PcContainer";

const Explore = () => {
  return (
    <>
      <Media.Spacing mobile={32} pc={60} />
      <PcContainer>
        <MobileContainer>
          <Media.Txt mobile="heading.2" pc="heading.1">
            진행 중인 공구
          </Media.Txt>
          <Media.Spacing mobile={8} pc={8} />
          <Media.Txt mobile="body.2" pc="heading.4" color="grey4">
            현재 참여 가능한 공구 상품들을 둘러보세요.
          </Media.Txt>
          <Media.Spacing mobile={32} pc={46} />
          <Filter title="카테고리" folding>
            <CheckBox label="의류" value="의류" />
            <CheckBox label="잡화" value="잡화" />
          </Filter>
        </MobileContainer>
      </PcContainer>
    </>
  );
};

export default Explore;
