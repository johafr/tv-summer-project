import { Fab } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeIndex } from "../atoms/displayScreens";
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
          sx={{ backgroundColor: "green", boxShadow: "none" }}
        >
          <ArrowLeftIcon sx={{ color: "white" }} />
        </Fab>
        <S.OutputScreen measurements={measurements}>
          <S.Bump />
          <S.ContentDiv measurements={measurements}>
            {sentences.map((sentence) => (
              <SentenceCard person={sentence.person} content={sentence.content} />
            ))}
          </S.ContentDiv>
        </S.OutputScreen>
        <Fab
          id="fab"
          size="small"
          onClick={handleGoRight}
          sx={{ backgroundColor: "green", boxShadow: "none" }}
        >
          <ArrowRightIcon sx={{ color: "white" }} />
        </Fab>
      </S.Screen>
    </div>
  );
};
