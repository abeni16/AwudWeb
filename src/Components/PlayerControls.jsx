import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Pause } from "@mui/icons-material";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;
const TimeContainer = styled.div`
  display: flex;
  width: 150%;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 4px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;
const Button = styled.button`
  border: none;
  display: flex;
  margin: 0 3px;
  padding: 3px;
  border-radius: 50%;
  background-color: orange;
  box-shadow: inset 6px 6px 12px rgb(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.03);
    :active {
      background-color: #fff;
      color: #111;
    }
  }
`;
const MainButton = styled.button`
  border: none;
  display: flex;
  margin: 0 3px;
  padding: 4px;
  border-radius: 50%;
  background-color: #ffcc33;
  box-shadow: inset 6px 6px 12px rgb(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 6px;
  :hover {
    transform: scale(1.03);
  }
  :active {
    background-color: #fff;
    color: #111;
  }
`;
const Text = styled.p`
  color: #fff;
  font-size: 10px;
  text-align: center;
  font-weight: 400;
`;

const PlayerControls = (props) => {
  const secondsToHMS = (seconds) => {
    if (!seconds) return "00m 00s";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min == 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  };
  
  return (
    <MainContainer>
      <Container>
        <Button onClick={() => props.SkipSong(false)}>
          <SkipPreviousIcon />
        </Button>
        <MainButton onClick={() => props.setIsPlaying(!props.isPlaying)}>
          {props.isPlaying ? <Pause /> : <PlayArrowIcon />}
        </MainButton>
        <Button onClick={() => props.SkipSong()}>
          <SkipNextIcon />
        </Button>
      </Container>
      <TimeContainer>
        <Text>{secondsToHMS(props.currentTime)}</Text>
        <Text>{secondsToHMS(props.duration)}</Text>
      </TimeContainer>
    </MainContainer>
  );
};

export default PlayerControls;