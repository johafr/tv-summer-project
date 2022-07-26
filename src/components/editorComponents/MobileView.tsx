import { Fab } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePageIndex, Message } from "../../atoms/stories";

import { Theme } from "../../styles/Theme";
import * as S from "../../styles/components/storyPageStyles";

import { activePage, activeStoryStats } from "../../selectors/stories";
import { InteractionSwitch } from "./InteractionSwitch";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { screenDimensions } from "../../atoms/screenDimensions";
import styled from "styled-components";

export const MobileView: React.FC = () => {
  //Recoil values
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  const { numPages } = useRecoilValue(activeStoryStats);

  const screen = useRecoilValue(screenDimensions);
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
      {screen.winWidth > 650 ? (
        <S.Screen className="screen">
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

          <S.OutputScreen className="output-screen">
            <S.Bump className="bump" Theme={Theme} />
            <S.ContentDiv className="content-div">
              {currentPage?.messages.map((card: Message) => (
                <InteractionSwitch
                  key={card.id}
                  id={card.id}
                  person={card.person}
                  content={card.content}
                  align={card.align}
                  format={card.format}
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
      ) : (
        <S.ScreenMobile className="screen">
          <S.GoLeftTouchDiv onClick={handleGoLeft} />
          <S.OutputScreenMobile className="output-screen">
            <S.ContentDivMobile className="content-div">
              {currentPage?.messages.map((card: Message) => (
                <InteractionSwitch
                  key={card.id}
                  id={card.id}
                  person={card.person}
                  content={card.content}
                  align={card.align}
                  format={card.format}
                />
              ))}
            </S.ContentDivMobile>
          </S.OutputScreenMobile>
          <S.GoRightTouchDiv onClick={handleGoRight} />
        </S.ScreenMobile>
      )}
      <StyledDiv>
        Page {pageNum + 1} of {numPages}
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.span`
  position: absolute;
  top: 5px;
  width: 100%;
  justify-content: center;
  display: flex;
`;
