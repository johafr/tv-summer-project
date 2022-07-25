import { Fab } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePageIndex, MessageProps } from "../../atoms/stories";

import { Theme } from "../../styles/Theme";
import { screenMeasurements } from "../../atoms/measurements";
import * as S from "../../styles/components/storyPageStyles";

import { activePage, activeStoryStats } from "../../selectors/stories";
import { MessageCard } from "./MessageCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import "../../styles/components/PreviewMobileFormat.css";

export const StoryPage: React.FC = () => {
  //Recoil values
  const [measurements] = useRecoilState(screenMeasurements);
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  //Recoil selectors
  const currentPage = useRecoilValue(activePage);
  const numberOfPages = useRecoilValue(activeStoryStats).numPages!;

  const handleGoLeft = () => {
    if (pageNum !== 0) {
      setPageNum(pageNum! - 1);
    }
  };

  const handleGoRight = () => {
    if (pageNum! < numberOfPages - 1) {
      setPageNum(pageNum! + 1);
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
        <S.OutputScreen className="output-screen" measurements={measurements}>
          <S.Bump className="bump" Theme={Theme} />
          <S.ContentDiv className="content-div" measurements={measurements}>
            {currentPage?.messages.map((card: MessageProps) => (
              <MessageCard
                key={card.id}
                id={card.id}
                person={card.person}
                content={card.content}
                align={card.align}
                interactionType={card.interactionType}
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
