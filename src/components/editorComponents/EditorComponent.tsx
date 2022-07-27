import React, { useState } from "react";
import styled from "styled-components";
import { activePageIndex, addMessage, Message } from "../../atoms/stories";
import { InteractionSwitch } from "./InteractionSwitch";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeCommunicationCategory, communicationCategoriesList } from "../../selectors/template";
import { activePage, activeStoryStats } from "../../selectors/stories";
import { AddNewPersonInputField } from "./AddNewPersonInputField";
import { EditorNamesList } from "./EditorNamesList";
import { Person, setSelectedPerson } from "../../atoms/Characters";
import { PersonSelectModal } from "./PersonSelectModal";
import { activePerson } from "../../selectors/Characters";
import { ComInputBox } from "./ComInputBox";
import { Fab } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Theme } from "../../styles/Theme";
import * as S from "../../styles/components/MobileView";
import { CommunicationCategory } from "../../atoms/template";
import { Visibility } from "@mui/icons-material";
import { visibileBoxesState } from "../../atoms/editor";

export type VisibilityBoxes = {
  narrative : boolean;
  dialog : boolean;
  textmessage : boolean
  thought : boolean
  shout : boolean
}

// Component wrapper function
export const EditorComponent: React.FC = () => {

  //Recoil selectors
  const currentPage = useRecoilValue(activePage);
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  const { numPages } = useRecoilValue(activeStoryStats);
  const numberOfPages = useRecoilValue(activeStoryStats).numPages!;
  const { currentCommunicationCategory } = useRecoilValue(activeCommunicationCategory);
  const categoriesList = useRecoilValue(communicationCategoriesList)
  const selectedPerson = useRecoilValue(activePerson);

  const [visibleBoxes,setVisibileBoxes] = useRecoilState(visibileBoxesState)

  // Local States
  


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

  const toggleBoxesHandler = (category : string, value : boolean) => {

  }

  const listInputs = categoriesList.map((category: CommunicationCategory,index: number) => {
    switch(category.interactionName) {
      case "NARRATIVE":
        if (visibleBoxes.narrative === true) {
          return (
            <ComInputBox category={category}/>
          )} else break;
      case "DIALOG":
        if (visibleBoxes.dialog === true) {
        return (
          <ComInputBox category={category}/>
        )} else break;
      case "TEXTMESSAGE":
        if (visibleBoxes.textmessage === true) {
        return (
          <ComInputBox category={category}/>
        )} else break;
      case "THOUGHT":
        if (visibleBoxes.thought === true) {
        return (
          <ComInputBox category={category}/>
        )} else break;
      case "SHOUT":
        if (visibleBoxes.shout === true) {
        return (
          <ComInputBox category={category}/>
        )} else break;

      default:
        return (
          <ComInputBox category={category}/>
        )
    }

  })

  // Component end-return
  return (
    <>
      <EditorNamesList numSelections={1} width={50} />
      <AddNewPersonInputField numSelections={1} />

      {/* Wrapper for Editor Boxes + Output Screen */}
      <MainContainer>
        {/* Wrapper for only the editor boxes */}
        <Wrapper style={{ }} >
          {listInputs}
        </Wrapper>
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
          <S.Screen >
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
          <S.PageNumber>
            {pageNum + 1} / {numPages}
          </S.PageNumber>
        </S.Wrapper>
      </MainContainer>
    </>
  );
};

export const MainContainer = styled.div`
  padding-top: 5vh;
  margin-top: 20px;
  width: 100rem;
  align-self: stretch;
  display: flex;
`;

export const Wrapper = styled.div`
  width: 50%;
  margin-right: 10rem;
`;

export const Expandable = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  flex-grow: 1;

  & div {
  }
`;

export const IconContainer = styled.div`
  width: 20%;
  border-radius: 20px;

  & div {
  }
  & div:hover {
    color: blue;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: 80%;
`;

export const TextInput = styled.input`
  width: 98%;
  height: 4rem;
  border: none;
  margin-bottom: 0.1rem;
`;

export const ConvoName = styled.h5`
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid gray;
  text-align: left;
`;

export const Output = styled.div`
  width: 50%;
  min-height: 100vh;
  background-color: rgba(201, 228, 212);
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  margin-left: 1%;
`;

{
  /* Temp gravyard */
}

{
  /*  <Wrapper>
          <Expandable>
            <div
              style={{
                width: "30rem",
                height: "8rem",
                border: "2px solid lightgray",
                borderRadius: "0px",
              }}
            >
              <h4 style={{ color: "gray" }}>NARRATIVE</h4>
              <form
                onSubmit={(event) => handleAddMessage(0, event, "NARRATIVE")}
              >
                <TextInput
                  value={textInputs[0][0].inputField}
                  placeholder="...."
                  onChange={(event) => handleChangeTextInput(0, event)}
                />
              </form>
            </div>
          </Expandable> */
}
{
  /* <Expandable>
            <div
              style={{
                width: "30rem",
                height: "8rem",
                border: "1px solid lightgray",
                borderRadius: "0px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  width: "100%",
                  position: "relative",
                  top: "-24px",
                }}
              >
                <ConvoName
                  style={{
                    textAlign: "left",
                    backgroundColor: selectedPerson
                      ? selectedPerson.color
                      : "white",
                  }}
                  onClick={() => handleViewModal(0)}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "grey",
                      float: "left",
                      position: "relative",
                      top: "7px",
                      marginRight: "5px",
                      borderRadius: "100px",
                    }}
                  />
                  <div
                    style={{ position: "relative", left: "4px", top: "9px" }}
                  >
                    {selectedPerson?.name}
                  </div>
                  <PersonSelectModal viewModal={viewPersonSelector} side={0} />
                </ConvoName>
                <ConvoName
                  style={{
                    textAlign: "right",
                    backgroundColor: "grey",
                  }}
                  onClick={() => handleViewModal(1)}
                >
                  <div
                    style={{ position: "relative", right: "30px", top: "9px" }}
                  >
                    {selectedPerson?.name}
                  </div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "grey",
                      float: "right",
                      position: "relative",
                      top: "-10px",
                      marginLeft: "5px",
                      borderRadius: "100px",
                    }}
                  />
                  <PersonSelectModal viewModal={viewPersonSelector} side={1} />
                </ConvoName>
              </div>
              <TextInput
                placeholder="...."
                style={{ position: "relative", top: "-24px" }}
              />
            </div>
          </Expandable>
          <Expandable>
            <div
              style={{
                width: "30rem",
                height: "8rem",
                border: "2px solid lightgray",
                borderRadius: "0px",
              }}
            >
              <h4 style={{ color: "gray" }}>TEXT MESSAGE</h4>
              <input
                placeholder="Write something..."
                style={{ width: "19.6rem", height: "4rem", border: "none" }}
              />
            </div>
          </Expandable>
          <Expandable>
            <div
              style={{
                width: "30rem",
                height: "8rem",
                border: "2px solid lightgray",
                borderRadius: "0px",
              }}
            >
              <h4 style={{ color: "gray" }}>THOUGHT</h4>
              <TextInput placeholder="...." />
            </div>
          </Expandable> */
}
{
  /* </Wrapper>  */
}




