import React, { useState } from "react";
import styled from "styled-components";
import {
  activePageIndex,
  Message,
  Page,
  updateMessage,
  updatePage,
} from "../../atoms/stories";
import { InteractionSwitch } from "./InteractionSwitch";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePage, activeStoryStats } from "../../selectors/stories";
import { EditorNamesList } from "./EditorNamesList";
import { NarrativeBoxes } from "./NarrativeBoxes";
import { MobileViewComponent } from "./MobileViewComponent";
import { visibleNumber } from "../../selectors/editor";
import { DialogBoxes } from "./DialogBoxes";
import { Theme } from "../../styles/Theme";
import { CommunicationCategory } from "../../atoms/template";
import {
  activeCommunicationCategory,
  communicationCategoriesList,
} from "../../selectors/template";
import { activePerson } from "../../selectors/Characters";
import { visibileBoxesState } from "../../atoms/editor";

export const EditorComponent: React.FC = () => {
  //Recoil selectors
  const currentPage = useRecoilValue(activePage);
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  const { numPages } = useRecoilValue(activeStoryStats);
  const numberOfPages = useRecoilValue(activeStoryStats).numPages!;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] = useState<Message>();
  const [newSelectedCategory, setNewSelectedCategory] =
    useState<CommunicationCategory>();
  const { currentCommunicationCategory } = useRecoilValue(
    activeCommunicationCategory
  );
  const categoriesList = useRecoilValue(communicationCategoriesList);
  const selectedPerson = useRecoilValue(activePerson);

  const [visibleBoxes, setVisibleBoxes] = useRecoilState(visibileBoxesState);
  const amountVisible = useRecoilValue(visibleNumber);

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

  function handleChangeCategoryModal(message: Message) {
    setSelectedMessage(message);
    setShowModal(!showModal);
  }

  function setNewCategory(c: CommunicationCategory) {
    const currentIndex = currentPage.messages.findIndex(
      (m) => m === selectedMessage
    );
    const newFormat: string[] = [
      c.interactionName.toString(),
      c.premadeFormats[c.activeFormatIndex].formatName,
    ];

    const updatedMsg: Message = {
      id: selectedMessage!.id,
      person: selectedMessage?.person,
      content: selectedMessage!.content,
      format: newFormat,
    };

    if (selectedMessage) {
      updateMessage(selectedMessage, updatedMsg);
    }
  }

  // Component end-return
  return (
    <>
      <EditorNamesList numSelections={1} width={50} />
      <MainContainer>
        <Wrapper style={{}}>
          <DialogBoxes />
          <NarrativeBoxes />
        </Wrapper>
        <MobileViewComponent
          handleGoLeft={handleGoLeft}
          currentPage={currentPage}
          messagesMapFunction={(card: Message) => (
            <MessageCard onClick={() => handleChangeCategoryModal(card)}>
              <InteractionSwitch
                key={card.id}
                id={card.id}
                person={card.person}
                content={card.content}
                format={card.format}
              />
            </MessageCard>
          )}
          handleGoRight={handleGoRight}
          pageNum={pageNum}
          numPages={numPages}
        />
        {showModal && (
          <ChangeCategoryModal>
            {categoriesList
              .filter(
                (c) =>
                  c.interactionName !== "SHOUT" &&
                  c.interactionName !== "NARRATIVE"
              )
              .map((c) => (
                <CategoryList
                  onClick={() => {
                    setNewCategory(c);
                    setShowModal(false);
                    setSelectedMessage(undefined);
                  }}
                >
                  {c.interactionName}
                </CategoryList>
              ))}
          </ChangeCategoryModal>
        )}
      </MainContainer>
    </>
  );
};

const MessageCard = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const CategoryList = styled.li`
  background: ${Theme.palette.mainGreen.dark};
  color: white;
  border-radius: 10px;
  padding: 1rem;
  list-style: none;
  margin: 1rem;
  position: relative;
  left: 60%;

  &:hover {
    cursor: pointer;
    background: ${Theme.palette.mainGreen.light};
  }
`;

const ChangeCategoryModal = styled.div``;

export const MainContainer = styled.div`
  padding-top: 2vh;
  margin-top: 20px;
  width: 100%;
  min-height: 75vh;
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
  /* <AddNewPersonInputField numSelections={1} /> */
}
