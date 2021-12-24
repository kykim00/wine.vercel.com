import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Wine } from "../types/Wine";
import { NO_IMAGE_WINE } from "../constants";
interface WineProps {
  wineData: Wine;
}
export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, image, location, rating } = wineData;
  const [imageSrc, setImageSrc] = useState(image);
  const imgErrorHandler = () => {
    setImageSrc(NO_IMAGE_WINE);
  };
  useEffect(() => {
    setImageSrc(image);
  }, []);
  return (
    <Container>
      <Average>{rating.average}</Average>
      <ImageContainer>
        <Image src={imageSrc} onError={imgErrorHandler} alt="" />
      </ImageContainer>
      <TextContainer>
        <Title>{wine}</Title>
        <p>
          {winery} - {location}
        </p>
        <p>{rating.reviews}</p>
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
const ImageContainer = styled.div`
  height: 200px;
`;
const Image = styled.img`
  height: 100%;
  object-fit: fill;
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
`;
