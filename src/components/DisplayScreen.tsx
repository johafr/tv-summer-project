import { Fab, Theme as ThemeInterface } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeIndex } from "../atoms/displayScreens";
import { DisplayMeasurments, screenMeasurments } from "../atoms/measurments";
import { Theme } from "../styles/Theme";

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
  const [measurments] = useRecoilState(screenMeasurments);
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
      <Screen measurments={measurments}>
        <Fab
          size="small"
          onClick={handleGoLeft}
          sx={{ backgroundColor: Theme.palette.primary.main }}
        >
          <ArrowLeftIcon sx={{ color: "white" }} />
        </Fab>
        <OutputScreen measurments={measurments}>
          <Bump theme={Theme} />
          <ContentDiv measurments={measurments}>
            {activeScreen.map((card: sentenceCardProps) => (
              <SentenceCard name={card.name} text={card.text} />
            ))}
          </ContentDiv>
        </OutputScreen>
        <Fab
          size="small"
          onClick={handleGoRight}
          sx={{ backgroundColor: Theme.palette.primary.main }}
        >
          <ArrowRightIcon sx={{ color: "white" }} />
        </Fab>
      </Screen>
    </>
  );
};

const OutputScreen = styled.div<{ measurments: DisplayMeasurments }>`
  width: ${(props) => props.measurments.width}px;
  height: ${(props) => props.measurments.height}px;
  border-radius: 10px;
  background-color: white;
  margin-top: 0%;
  border: 1px solid black;
`;

const Bump = styled.span<{ theme: ThemeInterface }>`
  position: absolute;
  left: 50%;
  width: 100px;
  height: 15px;
  margin-left: -50px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  //background-color: #333333;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const Screen = styled.div<{ measurments: DisplayMeasurments }>`
  position: relative;
  width: ${(props) => props.measurments.width + 100}px;
  left: 50%;
  margin-left: ${(props) => -props.measurments.width / 2 - 50}px;
  height: 90vh;
  justify-content: space-between;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const ContentDiv = styled.div<{ measurments: DisplayMeasurments }>`
  width: ${(props) => props.measurments.width - 20}px;
  height: ${(props) => props.measurments.height - 30}px;
  margin-top: 20px;
  margin-left: 10px;
  background-color: #d3d3d3;
  color: black;
`;
