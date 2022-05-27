import React from "react";
import { LoveArtist } from "../Data";
import styled from "styled-components";
import LovedArtistItem from "./LovedArtistItem";
const Container = styled.div`
  display: flex;
  padding: 20px 20px 0px 20px;
  justify-content: space-between;
  overflow-x: scroll;
`;
const Tetxt = styled.h3`
  color: black;
  padding: 20px 20px 0px 20px;
`;
const LovedArtist = () => {
  return (
    <>
      {console.log("sssssssssssss")}
      <Tetxt>Artist you'll love</Tetxt>
      <Container>
        {LoveArtist.map((item) => (
          <LovedArtistItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default LovedArtist;
