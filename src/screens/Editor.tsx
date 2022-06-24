import React from "react";

import { StoryPage } from "../components/StoryPage";
import { EditorReadingTime } from "../components/EditorReadingTime";
import { EditorNameInput } from "../components/EditorNameInput";
import * as S from "../styles/screens/EditorStyles";
import { EditorInputField } from "../components/EditorInputField";
import { ChangeScreenSizeMenu } from "../components/ChangeScreenSizeMenu";
import { CreateNewPageButton } from "../components/CreateNewPageButton";

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
        <CreateNewPageButton />
      </S.Editor>
      <S.DisplayScreenContainer>
        <StoryPage />
      </S.DisplayScreenContainer>
      <ChangeScreenSizeMenu />
    </S.ParentDiv>
  );
};
