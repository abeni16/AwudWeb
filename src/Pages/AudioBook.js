import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "../Components/Podcast/Categories";
import Entertainment from "../Components/Podcast/Entertainment";
import Recent from "../Components/Podcast/Recent";
import Technology from "../Components/Podcast/Technology";
import TopBar from "../Components/TopBar";
import "../Styles/MainMenu.css";
const AudioBook = () => {
  const [Audiobook, setAudiobook] = useState([]);
  useEffect(() => {
    const getAudiobook = async () => {
      try {
        const res = await axios.get("http://192.168.43.128:5000/audiobook");

        setAudiobook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAudiobook();
  }, []);
  return (
    <div
      className="mainContainer"
      style={{ overflowY: "scroll", marginTop: "50px" }}
    >
      <TopBar />
      <Recent />
      <Entertainment />
      <Technology />
      <Categories />
    </div>
  );
};

export default AudioBook;
