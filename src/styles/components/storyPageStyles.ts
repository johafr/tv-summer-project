import styled from "styled-components";
import { Theme as MuiTheme } from "@mui/material";

export const GoLeftTouchDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 50vw;
  height: 100vh;
  background-color: transparent;
`;

export const GoRightTouchDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 50vw;
  height: 100vh;
  background-color: transparent;
`;

export const OutputScreenMobile = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const OutputScreen = styled.div`
  width: 50px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  margin-top: 0%;
  border: 1px solid black;
`;

export const Bump = styled.span<{ Theme: MuiTheme }>`
  position: absolute;
  left: 50%;
  width: 100px;
  height: 16px;
  margin-left: -50px;
  margin-top: -1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) => props.Theme.palette.black.main};
`;

export const ScreenMobile = styled.div`
  overflow: hidden;
`;

export const Screen = styled.div`
  position: relative;
  width: 100px;
  left: 50%;
  margin-left: 50px;
  height: 100px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ContentDivMobile = styled.div`
  background-color: #d3d3d3;
  color: black;
`;

export const ContentDiv = styled.div`
  width: 100px;
  height: 200px;
  margin-top: 20px;
  margin-left: 10px;
  background-color: #d3d3d3;
  color: black;
`;
