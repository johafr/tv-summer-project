import { Fab } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeIndex, messageProps } from "../atoms/StoryPages";

import { Theme } from "../styles/Theme";
import { screenMeasurements } from "../atoms/measurements";
import * as S from "../styles/components/storyPageStyles";

import { activePage, getDisplayScreenLength } from "../selectors/StoryPages";
import { SentenceCard } from "./SentenceCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

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
      <S.Screen measurements={measurements}>
        <Fab
          id="fab"
          size="small"
          onClick={handleGoLeft}
          sx={{
            backgroundColor: Theme.palette.primary.main,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: Theme.palette.primary.dark,
            },
          }}
        >
          <ArrowLeftIcon sx={{ color: "white" }} />
        </Fab>
        <S.OutputScreen measurements={measurements}>
          <S.Bump Theme={Theme} />
          <S.ContentDiv measurements={measurements}>
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
            backgroundColor: Theme.palette.primary.main,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: Theme.palette.primary.dark,
            },
          }}
        >
          <ArrowRightIcon sx={{ color: "white" }} />
        </Fab>
      </S.Screen>
    </>
  );
};
