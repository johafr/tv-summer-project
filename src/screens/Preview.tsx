import React from "react";
import { ChangeScreenSizeMenu } from "../components/ChangeScreenSizeMenu";
import { StoryPage } from "../components/StoryPage";
import * as S from "../styles/screens/PreviewStyles";
import { useRecoilState } from "recoil";
import { usernameState } from "../atoms/username";
import "../styles/components/PreviewMobileFormat.css";

export const Preview: React.FC = () => {
  const [username] = useRecoilState(usernameState);
  return (
    <div>
      {username ? (
        <S.ScreenDiv className="screen-div">
          <StoryPage />
          <ChangeScreenSizeMenu />
        </S.ScreenDiv>
      ) : (
        <div>Please log in to use the tool</div>
      )}
    </div>
  );
};
