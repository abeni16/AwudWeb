import React, { useEffect, useState } from "react";
import DetailDiscription from "../Components/DetailDiscription";
import DetailLists from "../Components/DetailLists";
import styled from "styled-components";
import "../Styles/MainMenu.css";
import TopBar from "../Components/TopBar";
import axios from "axios";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  margin-top: 50px;
`;
const DetailPage = () => {
  const [Podcasts, setPodcsts] = useState([]);
  useEffect(() => {
    const getPodcast = async () => {
      try {
        const res = await axios.get("http://192.168.43.128:5000/podcast");

        setPodcsts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPodcast();
  }, []);
  return (
    <>
      <Div>
        <TopBar />
        <DetailDiscription />
        <DetailLists />
      </Div>
    </>
  );
};

export default DetailPage;
