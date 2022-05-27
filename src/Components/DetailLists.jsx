import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import imageurl from "../Image/photo_2022-05-21_21-47-02.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShuffleIcon from "@mui/icons-material/Shuffle";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
   background-color:#121217 ;
`;
const RowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  transition: all 0.3s ease;
  :hover {
    background-color: #ddd;
  }
`;
const RowList = styled.div`
  overflow-y: scroll;
`;
const TitleRowText = styled.div`
  justify-content: center;
  align-items: center;
  flex: 1;
  color: gray;
  overflow-y: hidden;
`;
const RowContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const ImageContainer = styled.div`
  margin: 6px;
`;
const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  background: none;
  border: 1px solid;
  margin-right: 12px;
  width: 30px;
  height: 30px;
  color: grey;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background-color: white;
    color: black;
  }
`;
const RowText = styled.h3``;
const DetailLists = () => {
  return (
    <Container>
      <RowTitle>
        <TitleRowText>Track</TitleRowText>
        <TitleRowText>Artists</TitleRowText>
        <TitleRowText>
          <AccessTimeIcon />
        </TitleRowText>
        <Button>
          <ShuffleIcon />
        </Button>
        <TitleRowText>Play Shuffle</TitleRowText>
      </RowTitle>
      <hr />
      <RowList>
        <Row>
          <RowContainer>
            <ImageContainer>
              <Image src={imageurl}></Image>
            </ImageContainer>
            <RowText>Tikur Sew</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>teddy afro</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>3:23</RowText>
          </RowContainer>
          <RowContainer>
            <Button>
              <PlayArrowIcon />
            </Button>
          </RowContainer>
        </Row>
        <Row>
          <RowContainer>
            <ImageContainer>
              <Image src={imageurl}></Image>
            </ImageContainer>
            <RowText>Tikur Sew</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>teddy afro</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>3:23</RowText>
          </RowContainer>
          <RowContainer>
            <Button>
              <PlayArrowIcon />
            </Button>
          </RowContainer>
        </Row>
        <Row>
          <RowContainer>
            <ImageContainer>
              <Image src={imageurl}></Image>
            </ImageContainer>
            <RowText>Tikur Sew</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>teddy afro</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>3:23</RowText>
          </RowContainer>
          <RowContainer>
            <Button>
              <PlayArrowIcon />
            </Button>
          </RowContainer>
        </Row>
        <Row>
          <RowContainer>
            <ImageContainer>
              <Image src={imageurl}></Image>
            </ImageContainer>
            <RowText>Tikur Sew</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>teddy afro</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>3:23</RowText>
          </RowContainer>
          <RowContainer>
            <Button>
              <PlayArrowIcon />
            </Button>
          </RowContainer>
        </Row>
        <Row>
          <RowContainer>
            <ImageContainer>
              <Image src={imageurl}></Image>
            </ImageContainer>
            <RowText>Tikur Sew</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>teddy afro</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>3:23</RowText>
          </RowContainer>
          <RowContainer>
            <Button>
              <PlayArrowIcon />
            </Button>
          </RowContainer>
        </Row>
        <Row>
          <RowContainer>
            <ImageContainer>
              <Image src={imageurl}></Image>
            </ImageContainer>
            <RowText>Tikur Sew</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>teddy afro</RowText>
          </RowContainer>
          <RowContainer>
            <RowText>3:23</RowText>
          </RowContainer>
          <RowContainer>
            <Button>
              <PlayArrowIcon />
            </Button>
          </RowContainer>
        </Row>
      </RowList>
    </Container>
  );
};

export default DetailLists;