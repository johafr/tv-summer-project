import { Fab } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeIndex, messageProps } from "../atoms/story";

import { Theme } from "../styles/Theme";
import { screenMeasurements } from "../atoms/measurements";
import * as S from "../styles/components/storyPageStyles";

import { activePage, getDisplayScreenLength } from "../selectors/story";
import { SentenceCard } from "./SentenceCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import "../styles/components/PreviewMobileFormat.css";

export const StoryPage: React.FC = () => {
  //Recoil values
  const [measurements] = useRecoilState(screenMeasurements);
  const [pageNum, setPageNum] = useRecoilState(activeIndex);
  //Recoil selectors
  const activeScreen = useRecoilValue(activePage);
  const numPages = useRecoilValue(getDisplayScreenLength);

  const handleGoLeft = () => {
    if (pageNum !== 0) {
      setPageNum(pageNum - 1);
    }
  };

  const handleGoRight = () => {
    if (pageNum < numPages - 1) {
      setPageNum(pageNum + 1);
    }
  };

  return (
    <>
      <S.Screen className="screen" measurements={measurements}>
        <Fab
          id="fab"
          size="small"
          onClick={handleGoLeft}
          sx={{
            backgroundColor: Theme.palette.mainGreen.main,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: Theme.palette.mainGreen.dark,
            },
          }}
        >
          <ArrowLeftIcon sx={{ color: "white" }} />
        </Fab>
        <S.OutputScreen measurements={measurements}>
          <S.Bump className="bump" Theme={Theme} />
          <S.ContentDiv className="content-div" measurements={measurements}>
            {activeScreen.map((card: messageProps) => (
              <SentenceCard
                key={card.id}
                person={card.person}
                content={card.content}
                align={card.align}
              />
            ))}
          </S.ContentDiv>
        </S.OutputScreen>
        <Fab
          id="fab"
          size="small"
          onClick={handleGoRight}
          sx={{
            backgroundColor: Theme.palette.mainGreen.main,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: Theme.palette.mainGreen.dark,
            },
          }}
        >
          <ArrowRightIcon sx={{ color: "white" }} />
        </Fab>
      </S.Screen>
    </>
  );
};
