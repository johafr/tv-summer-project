import { Fab } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { DisplayMeasurments, screenMeasurments } from "../atoms/measurments";

export const DisplayScreen: React.FC = () => {
  const [measurments] = useRecoilState(screenMeasurments);
  return (
    <>
      <ButtonDiv measurments={measurments}>
        <Fab className="direction-left-button" size="small" />
        <Fab className="direction-right-button" size="small" />
      </ButtonDiv>
      <Screen measurments={measurments}>
        <Bump />
      </Screen>
    </>
  );
};

const Screen = styled.span<{ measurments: DisplayMeasurments }>`
  position: absolute;
  width: ${(props) => props.measurments.width}px;
  height: ${(props) => props.measurments.height}px;
  background-color: white;
  top: 13%;
  left: 50%;
  margin-left: ${(props) => -props.measurments.width / 2}px;
  border-radius: 10px;
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

const ButtonDiv = styled.div<{ measurments: DisplayMeasurments }>`
  position: absolute;
  width: ${(props) => props.measurments.width + 100}px;
  left: 50%;
  margin-left: ${(props) => -props.measurments.width / 2 - 50}px;
  top: 50%;
  display: flex;
  justify-content: space-between;
`;
