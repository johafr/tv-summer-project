import React from "react";
import styled from "styled-components";
import { ChangeScreenSizeMenu } from "../components/ChangeScreenSizeMenu";
import { DisplayScreen } from "../components/DisplayScreen";
import * as S from "../styles/screens/PreviewStyles";

export const Preview: React.FC = () => {
  return (
    <S.ScreenDiv>
      <DisplayScreen />
      <ChangeScreenSizeMenu />
    </S.ScreenDiv>
  );
};
