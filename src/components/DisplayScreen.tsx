import { Fab } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeIndex } from "../atoms/displayScreens";
import { DisplayMeasurements, screenMeasurements } from "../atoms/measurements";

import {
  activePage,
  getDisplayScreenLength,
} from "../selectors/displayScreens";
import "../styles/DisplayScreenStyling.css";
import { SentenceCard, sentenceCardProps } from "./SentenceCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export const DisplayScreen: React.FC = () => {
  //Recoil values
  const [measurements] = useRecoilState(screenMeasurements);
  const [pageNum, setPageNum] = useRecoilState(activeIndex);
  //Recoil selectors
  const activeScreen = useRecoilValue(activePage);
  const numPages = useRecoilValue(getDisplayScreenLength);

  const handleGoLeft = () => {
    if (pageNum !== 0) {
      setPageNum(pageNum - 1);
    }
  };

  const handleGoRight = () => {
    if (pageNum < numPages - 1) {
      setPageNum(pageNum + 1);
    }
  };

  return (
    <>
      <Screen measurements={measurements}>
        <Fab
          size="small"
          onClick={handleGoLeft}
          sx={{ backgroundColor: "green", boxShadow: "none" }}
        >
          <ArrowLeftIcon sx={{ color: "white" }} />
        </Fab>
        <OutputScreen measurements={measurements}>
          <Bump />
          <ContentDiv measurements={measurements}>
            {activeScreen.map((card: sentenceCardProps) => (
              <SentenceCard name={card.name} text={card.text} />
            ))}
          </ContentDiv>
        </OutputScreen>
        <Fab
          size="small"
          onClick={handleGoRight}
          sx={{ backgroundColor: "green", boxShadow: "none" }}
        >
          <ArrowRightIcon sx={{ color: "white" }} />
        </Fab>
      </Screen>
    </>
  );
};

const OutputScreen = styled.div<{ measurements: DisplayMeasurements }>`
  width: ${(props) => props.measurements.width}px;
  height: ${(props) => props.measurements.height}px;
  border-radius: 10px;
  background-color: white;
  margin-top: 0%;
  border: 1px solid black;
`;

const Bump = styled.span`
  position: absolute;
  left: 50%;
  width: 100px;
  height: 15px;
  margin-left: -50px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #333333;
`;

const Screen = styled.div<{ measurements: DisplayMeasurements }>`
  position: relative;
  width: ${(props) => props.measurements.width + 100}px;
  left: 50%;
  margin-left: ${(props) => -props.measurements.width / 2 - 50}px;
  height: 90vh;
  justify-content: space-between;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const ContentDiv = styled.div<{ measurements: DisplayMeasurements }>`
  width: ${(props) => props.measurements.width - 20}px;
  height: ${(props) => props.measurements.height - 30}px;
  margin-top: 20px;
  margin-left: 10px;
  background-color: #d3d3d3;
  color: black;
`;
