import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
  background-color: #fefbe7;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 90%;
  height: 30vh;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Info = styled.div`
  position: absolute;
  padding-top: 10px;
  padding-left: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:red ; */
`;
const Title = styled.h1`
  color: #131313;
  font-size: 15px;
`;
const LovedArtistItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.artistName}</Title>
      </Info>
    </Container>
  );
};

export default LovedArtistItem;
