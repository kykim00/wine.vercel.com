import styled from "@emotion/styled";
import { Beer } from "../types/Beer";
interface BeerProps {
  beerData: Beer;
}
export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, price, image, rating } = beerData;

  return (
    <Container>
      <Average>{rating.average ? rating.average.toFixed(1) : ""}</Average>
      <img src={image} alt="" />
      <Title>{name}</Title>
      <TextContainer>
        <p>{price}</p>
        <p>{`${rating ? rating.reviews : ""} ratings`}</p>
      </TextContainer>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  padding: 1em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1em;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
    transform: translateY(-5px);
    transition: all 0.5s ease;
  }
`;
const TextContainer = styled.div`
  flex: 2;
  text-align: center;
`;
const Average = styled.span`
  position: absolute;
  left: 0;
  top: 10px;
  padding: 0.3em;
  color: white;
  margin-left: 0.5em;
  background: #2ac1bc;
  border-radius: 3px;
  font-size: 1em;
`;

const Title = styled.h2`
  text-align: center;
  flex: 3;
`;
