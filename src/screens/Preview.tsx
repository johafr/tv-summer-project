import React from "react";
import styled from "styled-components";
import { ChangeScreenSizeMenu } from "../components/ChangeScreenSizeMenu";
import { DisplayScreen } from "../components/DisplayScreen";

export const Preview: React.FC = () => {
  return (
    <ScreenDiv>
      <DisplayScreen />
      <ChangeScreenSizeMenu />
    </ScreenDiv>
  );
};

const ScreenDiv = styled.div`
  background-color: #232333;
  min-height: 100vh;
  color: white;
  position: relative;
`;
