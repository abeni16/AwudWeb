import React from "react";
import "../Styles/LeftMenu.css";
import { FaEllipsisH, FoEllipsisH } from "react-icons/fa";

import pic from "../../src/Image/logo1.png";
import MenuList from "./MenuList";
import Menu from "./Menu";
import MenuPlayList from "./MenuPlayList";
import TrackList from "./TrackList";
import PlayerComponent from "./PlayerComponent";
const LeftMenu = () => {
  return (
    <div className="leftMenu">
      {console.log("From left menu")}
      <div className="logoContainer">
        <img src={pic} />
      </div>

      <Menu MenuObject={MenuList} />
      <PlayerComponent />
    </div>
  );
};

export default LeftMenu;
