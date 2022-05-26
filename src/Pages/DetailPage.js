import React from "react";
import DetailDiscription from '../Components/DetailDiscription'
import DetailLists from "../Components/DetailLists";
import styled from "styled-components";
import "../Styles/MainMenu.css"
import TopBar from "../Components/TopBar";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DetailPage = () => {
  return (
    <Div >
    <TopBar/> 
        <DetailDiscription />
        <DetailLists />
  </Div>
    
   
  );
};

export default DetailPage;