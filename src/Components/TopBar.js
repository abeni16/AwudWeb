import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import "../Styles/Navbar.css";
import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";
const Navbar = styled.div`
  overflow: hidden;

  position: fixed;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */

  /* width: 100%; */
  height: 50px;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 0.1px solid white;
  background-color: #121217;
  z-index: 2;
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 25px;
  flex: 50%;
`;
const InputText = styled.input`
  width: 700px;
  height: 30px;
  border: none;
  font-size: 20px;
  padding-left: 15px;
  color: black;
  border: none;
`;
const Button = styled.button`
  height: 32px;
  width: 70px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightSide = styled.div`
  flex: 5%;
  display: flex;
  justify-content: left;
  padding-left: 5px;
  align-items: center;
`;
const Icon = styled.div`
  z-index: 2;
  width: 30px;
  height: 30px;
  color: white;
  border-radius: 50%;
  background-color: #121217;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
    background-color: #72727d;
  }
`;

const TopBar = () => {
  return (
    <Navbar>
      <LeftSide>
        <InputText placeholder="Search..." />
        <Button>
          <SearchOutlined />
        </Button>
      </LeftSide>
      <RightSide>
        <Icon>
          <IoIosNotificationsOutline />
        </Icon>
        <Icon style={{ backgroundColor: "gray" }}>
          <HiOutlineUser />
        </Icon>
      </RightSide>
    </Navbar>
  );
};

export default TopBar;
