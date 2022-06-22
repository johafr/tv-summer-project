import React from "react";

import { DisplayScreen } from "../components/DisplayScreen";
import { EditorReadingTime } from "../components/EditorReadingTime";
import { EditorNameInput } from "../components/EditorNameInput";
import { EditorTextInput } from "../components/EditorTextInput";
import * as S from "../styles/screens/EditorStyles";

// Expand with values at a later stage if needed, ie color or animation values...
type Word = {
  id: number;
  content: string;
};
// Expand with values at a later stage if needed, ie color or animation values...

export const Editor: React.FC = () => {
  // Editor final return
  return (
    <S.ParentDiv>
      <S.Editor>
        <EditorNameInput />
        <EditorReadingTime />
        <S.TextForm>
          <EditorTextInput />
        </S.TextForm>
      </S.Editor>
      <S.DisplayScreenContainer>
        <DisplayScreen />
      </S.DisplayScreenContainer>
    </S.ParentDiv>
  );
};
