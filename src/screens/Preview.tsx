import React from "react";
import { ChangeScreenSizeMenu } from "../components/ChangeScreenSizeMenu";
import { StoryPage } from "../components/StoryPage";
import * as S from "../styles/screens/PreviewStyles";

export const Preview: React.FC = () => {
  return (
    <S.ScreenDiv>
      <StoryPage />
      <ChangeScreenSizeMenu />
    </S.ScreenDiv>
  );
};
