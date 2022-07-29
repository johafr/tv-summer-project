import { Message, Page } from "../../atoms/stories";
import * as S from "../../styles/components/MobileView";
import { Fab } from "@mui/material";
import { Theme } from "../../styles/Theme";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { pageOverflowState } from "../../atoms/pageOverflow";

export function MobileViewComponent(props: {
  handleGoLeft: () => void;
  currentPage: Page;
  messagesMapFunction: (card: Message) => JSX.Element;
  handleGoRight: () => void;
  pageNum: number;
  numPages: number;
}) {
  const [, setPageOverflow] = useRecoilState<boolean>(pageOverflowState);
  // Refs
  const screenRef = useRef<HTMLHeadingElement>(null);

  if (screenRef.current !== null) {
    if (screenRef.current.scrollHeight > 571) {
      setPageOverflow(true);
    }
  }

  return (
    <S.Wrapper style={{}}>
      <Fab
        onClick={props.handleGoLeft}
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
      <S.Screen ref={screenRef}>
        {props.currentPage?.messages.map(props.messagesMapFunction)}
      </S.Screen>
      <Fab
        onClick={props.handleGoRight}
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
      <S.PageNumber>
        {props.pageNum + 1} / {props.numPages}
      </S.PageNumber>
    </S.Wrapper>
  );
}
