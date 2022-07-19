import React, { useEffect } from "react";

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
import { useParams } from "react-router-dom";
import { activeStoryIndex } from "../atoms/stories";

export const Editor: React.FC = () => {
  const [username] = useRecoilState(usernameState);
  const { id } = useParams();
  const [, setStoryIndex] = useRecoilState(activeStoryIndex);

  useEffect(() => {
    let tempId: string | undefined = "";
    tempId = id?.substring(1, id.length);
    tempId ? setStoryIndex(parseInt(tempId)) : setStoryIndex(-1);
  }, []);
  // Editor final return
  return (
    <div>
      {username ? (
        <S.ParentDiv>
          {/* <TestComponent name={"Cornelius"} text={"hei på deg"} /> */}
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
