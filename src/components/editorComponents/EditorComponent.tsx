import React, { useState } from "react";
import styled from "styled-components";
import { activePageIndex, addMessage, Message } from "../../atoms/stories";
import { InteractionSwitch } from "./InteractionSwitch";

import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import MessageIcon from "@mui/icons-material/Message";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  activeCommunicationCategory,
  getAllCommunicationCategories,
} from "../../selectors/template";
import { activePage, activeStoryStats } from "../../selectors/stories";
import { AddNewPersonInputField } from "./AddNewPersonInputField";
import { EditorNamesList } from "./EditorNamesList";
import {
  fourBoxSelectedPersonsState,
  Person,
  charactersState,
} from "../../atoms/persons";
import { PersonSelectModal } from "./PersonSelectModal";

// Component props
type Props = {};

// Component wrapper function
export const EditorComponent: React.FC<Props> = ({}) => {
  const [personList, setPersonList] = useRecoilState(charactersState);
  const allInteractions = useRecoilValue(getAllCommunicationCategories);
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  //Recoil selectors
  const currentPage = useRecoilValue(activePage);
  const { currentInteraction } = useRecoilValue(activeCommunicationCategory);

  const numberOfPages = useRecoilValue(activeStoryStats).numPages!;

  // Local States
  const [textInputs, setTextInputs] = useState([
    [{ inputField: "" }],
    [{ inputField: "" }],
    [{ inputField: "" }],
    [{ inputField: "" }],
  ]);

  const [selectedPerson, setSelectedPerson] = useState<Person | undefined>(
    undefined
  );
  const [viewPersonSelector, setViewPersonSelector] = useState<boolean[]>([
    false,
    false,
  ]);

  // const [selectPersons, setSelectedPersons] = useState<Person[][]>([
  //   [{ id: -1, name: "Person 1", color: "" }],
  //   [{ id: -2, name: "Person 2", color: "" }],
  // ]);

  const [selectPersons, setSelectedPersons] = useRecoilState(
    fourBoxSelectedPersonsState
  );

  const handleAddMessage = (
    index: number,
    e: React.FormEvent,
    type: string,
    selectedperson?: Person | undefined
  ) => {
    e.preventDefault();

    let messageType = "NONE";

    const correctInput: string = textInputs[0][0].inputField;
    const newMessage: Message = {
      id: currentPage.messages[currentPage.messages.length - 1].id + 1,
      person: selectedperson,
      content: correctInput,
      align: "center",
      format: [
        currentInteraction!.interactionName,
        currentInteraction!.premadeFormats[
          currentInteraction!.activeFormatIndex
        ].toString(),
      ],
    };
    addMessage(newMessage);
    console.log(newMessage);

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
      <MainContainer>
        <Wrapper>
          <Expandable style={{ width: "100%" }}>
            <div
              style={{
                marginTop: "6%",
                border: "1px solid lightgray",
                paddingTop: "1rem",
                borderRadius: "100px",
              }}
            >
              <ArticleIcon />
              <p>Narrative</p>
            </div>
          </Expandable>
          <Expandable style={{ width: "100%" }}>
            <div
              style={{
                marginTop: "9%",
                border: "1px solid lightgray",
                paddingTop: "1rem",
                borderRadius: "100px",
              }}
            >
              <ForumIcon />
              <p>Conversation</p>
            </div>
          </Expandable>
          <Expandable style={{ width: "100%" }}>
            <div
              style={{
                marginTop: "12%",
                border: "1px solid lightgray",
                paddingTop: "1rem",
                borderRadius: "100px",
              }}
            >
              <MessageIcon />
              <p>Text Message</p>
            </div>
          </Expandable>
          <Expandable style={{ width: "100%" }}>
            <div
              style={{
                marginTop: "9%",
                border: "1px solid lightgray",
                paddingTop: "1rem",
                borderRadius: "100px",
              }}
            >
              <BubbleChartIcon />
              <p>Thought</p>
            </div>
          </Expandable>
        </Wrapper>
        <Wrapper>
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
          </Expandable>
          <Expandable>
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
                    backgroundColor: selectPersons[0][0].color,
                  }}
                  onClick={() => handleViewModal(0)}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: selectPersons[0][0].color,
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
                    {selectPersons[0][0].name}
                  </div>
                  <PersonSelectModal viewModal={viewPersonSelector} side={0} />
                </ConvoName>
                <ConvoName
                  style={{
                    textAlign: "right",
                    backgroundColor: selectPersons[1][0].color,
                  }}
                  onClick={() => handleViewModal(1)}
                >
                  <div
                    style={{ position: "relative", right: "30px", top: "9px" }}
                  >
                    {selectPersons[1][0].name}
                  </div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: selectPersons[1][0].color,
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
          </Expandable>
        </Wrapper>

        <Output>
          <h2 style={{ textAlign: "center", color: "gray" }}>OUTPUT</h2>
          <div>
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
          </div>
        </Output>
      </MainContainer>
    </>
  );
};

export const MainContainer = styled.div`
  padding-top: 5vh;
  display: flex;
  width: 100%;
  align-self: stretch;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const TextInput = styled.input`
  width: 19.6rem;
  height: 4rem;
  border: none;
`;

export const ConvoName = styled.h5`
  width: 50%;
  height: 2rem;
  border-bottom: 1px solid lightgray;
  padding: 4px;
  &:hover {
    background-color: lightgray;
  }
`;

export const Output = styled.div`
  width: 390px;
  min-height: 844px;
  background-color: rgba(201, 228, 212);
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
`;

export const Expandable = styled.div`
  padding-top: 0.5rem;
  margin-top: 0.33rem;
  margin-left: 0.2rem;
  margin-bottom: 3rem;
  text-align: center;
`;
