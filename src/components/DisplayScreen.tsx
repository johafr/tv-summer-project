import { Fab, Theme as ThemeInterface } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeIndex } from "../atoms/displayScreens";

import { Theme } from "../styles/Theme";
import { DisplayMeasurements, screenMeasurements } from "../atoms/measurements";
import * as S from "../styles/components/DisplayScreenStyles";

import {
  activePage,
  getDisplayScreenLength,
} from "../selectors/displayScreens";
import "../styles/DisplayScreenStyling.css";
import { SentenceCard, sentenceCardProps } from "./SentenceCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { sentencesState } from "../atoms/sentences";

export const DisplayScreen: React.FC = () => {
  //Recoil values
  const [measurements] = useRecoilState(screenMeasurements);
  const [pageNum, setPageNum] = useRecoilState(activeIndex);
  //Recoil selectors
  const activeScreen = useRecoilValue(activePage);
  const numPages = useRecoilValue(getDisplayScreenLength);
  const [sentences,] = useRecoilState(sentencesState)

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
    <div className="mobile-style-container">
      <S.Screen measurements={measurements}>
        <Fab
          id="fab"
          size="small"
          onClick={handleGoLeft}

          sx={{ backgroundColor: Theme.palette.primary.main }}
        >
          <ArrowLeftIcon sx={{ color: "white" }} />
        </Fab>
            {activeScreen.map((card: sentenceCardProps) => (
              <SentenceCard name={card.name} text={card.text} />
        <S.OutputScreen measurements={measurements}>
          <S.Bump theme={Theme}/>
          <S.ContentDiv measurements={measurements}>
            ))}
          </S.ContentDiv>
        </S.OutputScreen>
        <Fab
          id="fab"
          size="small"
          onClick={handleGoRight}

          sx={{ backgroundColor: Theme.palette.primary.main }}

        >
          <ArrowRightIcon sx={{ color: "white" }} />
        </Fab>
      </S.Screen>
    </div>
  );
};
