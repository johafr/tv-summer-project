import React from "react";

import { StoryPage } from "../components/StoryPage";
import { EditorReadingTime } from "../components/EditorReadingTime";
import { EditorNameInput } from "../components/EditorNameInput";
import * as S from "../styles/screens/EditorStyles";
import { EditorInputField } from "../components/EditorInputField";
import { ChangeScreenSizeMenu } from "../components/ChangeScreenSizeMenu";
import { UpdatePageDisplay } from "../components/UpdatePageDisplay";
import { CurrentPageDisplay } from "../components/CurrentPageDisplay";

export const Editor: React.FC = () => {
  // Editor final return
  return (
    <S.ParentDiv>
      <S.Editor>
        <EditorNameInput />
        <EditorReadingTime />
        <S.TextForm>
          <EditorInputField />
        </S.TextForm>
        <UpdatePageDisplay />
      </S.Editor>
      <S.DisplayScreenContainer>
        <StoryPage />
        <CurrentPageDisplay />
      </S.DisplayScreenContainer>
      <ChangeScreenSizeMenu />
    </S.ParentDiv>
  );
};
