import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IphoneScreen } from "../components/IphoneScreen";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const Preview: React.FC = () => {
  return (
    <ScreenDiv>
      <IphoneScreen />
      <Button
        sx={{
          position: "absolute",
          top: "44%",
          left: "35%",
          "&:hover": {
            backgroundColor: "#232333",
          },
        }}
        disableRipple
      >
        <ArrowCircleLeftIcon />
      </Button>
      <Button
        sx={{
          position: "absolute",
          top: "44%",
          left: "58%",
          marginLeft: 1,
          "&:hover": {
            backgroundColor: "#232333",
          },
        }}
        disableRipple
      >
        <ArrowCircleRightIcon />
      </Button>
    </ScreenDiv>
  );
};

const ScreenDiv = styled.div`
  background-color: #232333;
  min-height: 100vh;
  color: white;
`;
