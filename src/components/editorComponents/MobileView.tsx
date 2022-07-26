import React from "react";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Fab } from "@mui/material";
import { Theme } from "../../styles/Theme";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePageIndex, Message } from "../../atoms/stories";
import { activePage, activeStoryStats } from "../../selectors/stories";
import { screenDimensions } from "../../atoms/screenDimensions";
import * as S from "../../styles/components/MobileView";
import { InteractionSwitch } from "./InteractionSwitch";

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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.Wrapper>
            <Fab
              onClick={handleGoLeft}
              sx={{
                position: "absolute",
                left: "-6rem",
                boxShadow: "none",
                top: "15rem",
                backgroundColor: Theme.palette.mainGreen.main,
                "&:hover": {
                  backgroundColor: Theme.palette.mainGreen.dark,
                },
              }}
              id={"fab"}
              size={"large"}
            >
              <ArrowLeftIcon sx={{ color: "white", fontSize: "3rem" }} />
            </Fab>
            <S.LoudSpeaker />
            <S.Screen>
              {currentPage?.messages.map((card: Message) => (
                <InteractionSwitch
                  key={card.id}
                  id={card.id}
                  person={card.person}
                  content={card.content}
                  format={card.format}
                />
              ))}
            </S.Screen>
            <Fab
              onClick={handleGoRight}
              sx={{
                position: "absolute",
                left: "23rem",
                boxShadow: "none",
                top: "15rem",
                backgroundColor: Theme.palette.mainGreen.main,
                "&:hover": {
                  backgroundColor: Theme.palette.mainGreen.dark,
                },
              }}
              id={"fab"}
              size={"large"}
            >
              <ArrowRightIcon sx={{ color: "white", fontSize: "3rem" }} />
            </Fab>
            <PageNumber>
              {pageNum + 1} / {numPages}
            </PageNumber>
          </S.Wrapper>
        </div>
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
                  format={card.format}
                />
              ))}
            </S.ContentDivMobile>
          </S.OutputScreenMobile>
          <S.GoRightTouchDiv onClick={handleGoRight} />
        </S.ScreenMobile>
      )}
    </>
  );
};

const PageNumber = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2rem;
  font-size: 1.5em;
`;
