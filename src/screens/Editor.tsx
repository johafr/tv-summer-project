import React from "react";

import { StoryPage } from "../components/StoryPage";
import { EditorReadingTime } from "../components/EditorReadingTime";
import { EditorNames } from "../components/EditorNames";
import * as S from "../styles/screens/EditorStyles";
import { EditorInputField } from "../components/EditorInputField";
import { ChangeScreenSizeMenu } from "../components/ChangeScreenSizeMenu";
import { UpdatePageDisplay } from "../components/UpdatePageDisplay";
import { CurrentPageDisplay } from "../components/CurrentPageDisplay";
import { useRecoilState } from "recoil";
import { usernameState } from "../atoms/username";

export const Editor: React.FC = () => {
  const [username] = useRecoilState(usernameState);
  // Editor final return
  return (
    <div>
      {username ? (
        <S.ParentDiv>
          <S.Editor>
            <EditorNames />
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
      ) : (
        <div>Please log in to use the tool</div>
      )}
    </div>
  );
};
