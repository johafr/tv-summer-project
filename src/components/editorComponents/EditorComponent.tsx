import React, { useState } from "react";
import styled from "styled-components";
import {
  activePageIndex,
  addMessage,
  Message,
  Page,
} from "../../atoms/stories";
import { InteractionSwitch } from "./InteractionSwitch";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeCommunicationCategory,
  communicationCategoriesList,
} from "../../selectors/template";
import { activePage, activeStoryStats } from "../../selectors/stories";
import { AddNewPersonInputField } from "./AddNewPersonInputField";
import { EditorNamesList } from "./EditorNamesList";
import { Person, setSelectedPerson } from "../../atoms/Characters";
import { PersonSelectModal } from "./PersonSelectModal";
import { activePerson } from "../../selectors/Characters";
import { ComInputBox } from "./ComInputBox";
import { CommunicationCategory } from "../../atoms/template";
import { visibileBoxesState } from "../../atoms/editor";
import { MobileViewComponent } from "./MobileViewComponent";

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
  const categoriesList = useRecoilValue(communicationCategoriesList);
  const selectedPerson = useRecoilValue(activePerson);
  const [visibleBoxes, setVisibleBoxes] = useRecoilState(visibileBoxesState);

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

  const listInputs = categoriesList.map(
    (category: CommunicationCategory, index: number) => {
      let height: string;
      if (category.interactionName === "NARRATIVE") {
        height = "50";
      } else {
        height = "25";
      }
      return <ComInputBox category={category} boxheight={height} />;
    }
  );

  // Component end-return
  return (
    <>
      <EditorNamesList numSelections={1} width={50} />
      {/* <AddNewPersonInputField numSelections={1} /> */}

      {/* Wrapper for Editor Boxes + Output Screen */}
      <MainContainer>
        {/* Wrapper for only the editor boxes */}
        <Wrapper style={{}}>{listInputs}</Wrapper>
        <MobileViewComponent
          handleGoLeft={handleGoLeft}
          currentPage={currentPage}
          callbackFunction={(card: Message) => (
            <InteractionSwitch
              key={card.id}
              id={card.id}
              person={card.person}
              content={card.content}
              format={card.format}
            />
          )}
          handleGoRight={handleGoRight}
          pageNum={pageNum}
          numPages={numPages}
        />
      </MainContainer>
    </>
  );
};

export const MainContainer = styled.div`
  padding-top: 5vh;
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
