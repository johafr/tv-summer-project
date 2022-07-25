import React, { useEffect } from "react";
import { ChangeScreenSizeMenu } from "../components/editorComponents/ChangeScreenSizeMenu";
import { StoryPage } from "../components/editorComponents/StoryPage";
import * as S from "../styles/screens/PreviewStyles";
import { useRecoilState } from "recoil";
import { usernameState } from "../atoms/username";
import { useParams } from "react-router-dom";
import { activeStoryIndex } from "../atoms/stories";

export const Preview: React.FC = () => {
  const { id } = useParams();
  const [, setStoryIndex] = useRecoilState(activeStoryIndex);

  useEffect(() => {
    let tempId: string | undefined = "";
    tempId = id?.substring(1, id.length);
    tempId ? setStoryIndex(parseInt(tempId)) : setStoryIndex(-1);
  }, []);
  return (
    <div>
      <S.ScreenDiv className="screen-div">
        <StoryPage />
      </S.ScreenDiv>
    </div>
  );
};
