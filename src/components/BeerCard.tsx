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
      <p>{price}</p>
      <p>{`${rating ? rating.reviews : ""} ratings`}</p>
    </Container>
  );
};
const Container = styled.div`
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
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
`;
