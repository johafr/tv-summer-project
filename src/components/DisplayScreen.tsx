import { Fab } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { DisplayMeasurments, screenMeasurments } from "../atoms/measurments";
import "../styles/DisplayScreenStyling.css";

export const DisplayScreen: React.FC = () => {
  const [measurments] = useRecoilState(screenMeasurments);
  return (
    <>
      <Screen measurments={measurments}>
        <Fab className="direction-left-button" size="small" />
        <OutputScreen measurments={measurments}>
          <Bump />
        </OutputScreen>
        <Fab className="direction-right-button" size="small" />
      </Screen>
    </>
  );
};

const OutputScreen = styled.div<{ measurments: DisplayMeasurments }>`
  width: ${(props) => props.measurments.width}px;
  height: ${(props) => props.measurments.height}px;
  border-radius: 10px;
  background-color: white;
  margin-top: 13%;
`;

const Bump = styled.span`
  position: absolute;
  left: 50%;
  width: 100px;
  height: 30px;
  margin-left: -50px;
  margin-top: -15px;
  border-radius: 5px;
  background: linear-gradient(to top, #333333 50%, #232333 50%);
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
`;
