import React, { useState } from "react";
import styled from "styled-components";
import { activePageIndex, addMessage, Message } from "../../atoms/stories";
import { InteractionSwitch } from "./InteractionSwitch";

import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import MessageIcon from "@mui/icons-material/Message";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeCommunicationCategory } from "../../selectors/template";
import { activePage, activeStoryStats } from "../../selectors/stories";
import { AddNewPersonInputField } from "./AddNewPersonInputField";
import { EditorNamesList } from "./EditorNamesList";
import { Person, setSelectedPerson } from "../../atoms/Characters";
import { PersonSelectModal } from "./PersonSelectModal";
import { activePerson } from "../../selectors/Characters";
import * as S from "../../styles/components/MobileView";
import { Fab } from "@mui/material";
import { Theme } from "../../styles/Theme";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Component wrapper function
export const EditorComponent: React.FC = () => {
  //Recoil selectors
  const currentPage = useRecoilValue(activePage);
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  const { numPages } = useRecoilValue(activeStoryStats);
  const numberOfPages = useRecoilValue(activeStoryStats).numPages!;
  const { currentCommunicationCategory } = useRecoilValue(
    activeCommunicationCategory
  );

  // Local States
  const [textInputs, setTextInputs] = useState([
    [{ inputField: "" }],
    [{ inputField: "" }],
    [{ inputField: "" }],
    [{ inputField: "" }],
  ]);

  const selectedPerson = useRecoilValue(activePerson);
  const [viewPersonSelector, setViewPersonSelector] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

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

  const handleAddMessage = (
    index: number,
    e: React.FormEvent,
    type: string,
    selectedperson?: Person | undefined
  ) => {
    e.preventDefault();

    const correctInput: string = textInputs[0][0].inputField;
    const newMessage: Message = {
      id: currentPage.messages[currentPage.messages.length - 1].id + 1,
      person: selectedperson,
      content: correctInput,
      format: [
        currentCommunicationCategory!.interactionName,
        currentCommunicationCategory!.premadeFormats[
          currentCommunicationCategory!.activeFormatIndex
        ].toString(),
      ],
    };
    addMessage(newMessage);

    // Set inputfield to empty
    const values = [...textInputs];
    values[index][0] = { inputField: "" };
    setTextInputs(values);
  };

  const handleChangeTextInput = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...textInputs];
    values[index][0] = { inputField: e.target.value };
    setTextInputs(values);
  };

  const handleSelectPerson = (person: Person) => {
    selectedPerson === person
      ? setSelectedPerson(undefined)
      : setSelectedPerson(person);
    console.log(person);
    console.log(selectedPerson);
  };

  const handleViewModal = (side: number) => {
    const values = [...viewPersonSelector];
    if (values[side] === true) {
      values[side] = false;
    } else values[side] = true;

    if (side === 0) {
      values[1] = false;
    }
    if (side === 1) {
      values[0] = false;
    }
    setViewPersonSelector(values);
    console.log(viewPersonSelector);
  };

  // Component end-return
  return (
    <>
      <EditorNamesList numSelections={1} width={50} />
      <AddNewPersonInputField numSelections={1} />

      {/* Wrapper for Editor Boxes + Output Screen */}
      <MainContainer>
        {/* Wrapper for only the editor boxes */}
        <Wrapper style={{}}>
          {/* Wrappers for individual components */}

          <Expandable style={{}}>
            <IconContainer style={{}}>
              <div>
                <ArticleIcon />
                <p>Narrative</p>
              </div>
            </IconContainer>

            <InputContainer style={{}}>
              <ConvoName style={{ border: "none", textAlign: "center" }}>
                NARRATIVE
              </ConvoName>
              <form
                onSubmit={(event) => handleAddMessage(0, event, "NARRATIVE")}
              >
                <TextInput
                  value={textInputs[0][0].inputField}
                  placeholder="Write a narrative..."
                  onChange={(event) => handleChangeTextInput(0, event)}
                />
              </form>
            </InputContainer>
          </Expandable>

          <Expandable style={{}}>
            <IconContainer style={{}}>
              <div>
                <ForumIcon />
                <p>Conversation</p>
              </div>
            </IconContainer>

            <InputContainer>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ConvoName
                  onClick={() => handleViewModal(0)}
                  style={{
                    width: "85%",
                    backgroundColor: selectedPerson?.color,
                  }}
                >
                  {selectedPerson?.name.toString()}
                  <PersonSelectModal viewModal={viewPersonSelector} side={0} />
                </ConvoName>
                <ConvoName
                  style={{ width: "15%", backgroundColor: "lightgray" }}
                ></ConvoName>
              </div>
              <form onSubmit={(event) => handleAddMessage(1, event, "DIALOG")}>
                <TextInput
                  value={textInputs[1][0].inputField}
                  placeholder="Write a dialogue..."
                  onChange={(event) => handleChangeTextInput(1, event)}
                />
              </form>
            </InputContainer>
          </Expandable>

          <Expandable style={{}}>
            <IconContainer style={{}}>
              <div>
                <MessageIcon />
                <p>Text Message</p>
              </div>
            </IconContainer>

            <InputContainer>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ConvoName
                  onClick={() => handleViewModal(1)}
                  style={{
                    width: "85%",
                    backgroundColor: selectedPerson?.color,
                  }}
                >
                  {selectedPerson?.name.toString()}
                  <PersonSelectModal viewModal={viewPersonSelector} side={1} />
                </ConvoName>
                <ConvoName
                  style={{ width: "15%", backgroundColor: "lightgray" }}
                ></ConvoName>
              </div>

              <form onSubmit={(event) => handleAddMessage(2, event, "TEXT")}>
                <TextInput
                  value={textInputs[2][0].inputField}
                  placeholder="Write a text message..."
                  onChange={(event) => handleChangeTextInput(2, event)}
                />
              </form>
            </InputContainer>
          </Expandable>
          <Expandable style={{}}>
            <IconContainer style={{}}>
              <div>
                <BubbleChartIcon />
                <p>Thought</p>
              </div>
            </IconContainer>

            <InputContainer>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ConvoName
                  onClick={() => handleViewModal(2)}
                  style={{
                    width: "85%",
                    backgroundColor: selectedPerson?.color,
                  }}
                >
                  Replace with name
                  <PersonSelectModal viewModal={viewPersonSelector} side={2} />
                </ConvoName>
                <ConvoName
                  style={{ width: "15%", backgroundColor: "lightgray" }}
                ></ConvoName>
              </div>
              <form onSubmit={(event) => handleAddMessage(3, event, "THOUGHT")}>
                <TextInput
                  value={textInputs[3][0].inputField}
                  placeholder="Write a thought...."
                  onChange={(event) => handleChangeTextInput(3, event)}
                />
              </form>
            </InputContainer>
          </Expandable>
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
  width: 75%;
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
    margin: 2%;
  }
`;

export const IconContainer = styled.div`
  width: 20%;
  border-radius: 20px;

  & div {
    margin-top: 25%;
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
