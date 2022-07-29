import React from "react";
import styled from "styled-components";
import {
  activePageIndex,
  Message,
} from "../../atoms/stories";
import { InteractionSwitch } from "./InteractionSwitch";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePage, activeStoryStats } from "../../selectors/stories";
import { EditorNamesList } from "./EditorNamesList";
import { NarrativeBoxes } from "./NarrativeBoxes";
import { MobileViewComponent } from "./MobileViewComponent";
import { DialogBoxes } from "./DialogBoxes";

export const EditorComponent: React.FC = () => {
  //Recoil selectors
  const currentPage = useRecoilValue(activePage);
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  const { numPages } = useRecoilValue(activeStoryStats);
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

  // Component end-return
  return (
    <>
      <EditorNamesList numSelections={1} width={50} />
      <MainContainer>
        <Wrapper style={{}}>
          <NarrativeBoxes/>
          <DialogBoxes/>
        </Wrapper>
        <MobileViewComponent
          handleGoLeft={handleGoLeft}
          currentPage={currentPage}
          messagesMapFunction={(card: Message) => (
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



      {/* <AddNewPersonInputField numSelections={1} /> */}