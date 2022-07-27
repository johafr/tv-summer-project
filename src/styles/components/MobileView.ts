import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3rem;
  width: 20rem;
  height: 36.7rem;
  border: 2px solid black;
  border-radius: 20px;
  position: relative;
`;

export const Screen = styled.div`
  position: relative;
  width: 24rem;
  height: 35.7rem;
  top: 5px;
  left: 5px;
`;

export const LoudSpeaker = styled.div`
  position: absolute;
  top: -1px;
  width: 10rem;
  background: black;
  height: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  margin: 0;
  border-radius: 0 0 10px 10px;
`;

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

export const ScreenMobile = styled.div`
  overflow: hidden;
`;

export const ContentDivMobile = styled.div`
  background-color: #d3d3d3;
  color: black;
`;

export const PageNumber = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2rem;
  font-size: 1.5em;
`;
