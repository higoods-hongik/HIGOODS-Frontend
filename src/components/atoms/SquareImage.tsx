import styled from "@emotion/styled";

const SquareImage = ({ imageUrl = "" }: { imageUrl?: string }) => {
  return (
    <Wrapper>
      <img src={imageUrl} />
    </Wrapper>
  );
};
export default SquareImage;

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
