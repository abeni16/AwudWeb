import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import imageurl from "../Image/photo_2022-05-21_21-47-02.jpg";
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Desc = styled.div`
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 36px;
  margin: 24px 0;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 15px;
  object-fit: cover;
  border-radius: 16px;
`;
const SubTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
`;
const DetailText = styled.p`
  margin-bottom: 6px;
  font-size: 12px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;
const Button = styled.button`
  border-radius: 24px;
  border: 1px solid;
  background-color: #ffb36c;
  width: 150px;
  height: 50px;
  transition: all 0.3s ease;
  :hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
  }
`;
const SubButton = styled.div`
  margin-left: 24px;
`;

const DeatailDiscription = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imageurl} />
      </ImageContainer>
      <Desc>
        <Title>Teddy Afro</Title>
        <SubTitle>
          Featuring Dengue Fever, Mahmoud Ahmed, GiGi, Kassmasse
        </SubTitle>
        <DetailText>
          Discover music similar to the artists you've been listening to lately.
        </DetailText>
        <ButtonContainer>
          <Button>
            <PlayArrowIcon />
          </Button>
          <SubButton>
            <FavoriteIcon />
          </SubButton>
        </ButtonContainer>
      </Desc>
    </Container>
  );
};

export default DeatailDiscription;