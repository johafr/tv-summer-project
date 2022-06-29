import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { persons } from "../atoms/persons";
import { messageProps } from "../atoms/story";
import { story as sp, updatePage } from "../atoms/story";
import { activePage } from "../selectors/story";
import { SentenceCard } from "./SentenceCard";

// Component wrapper function
export const EditorSplitscreen: React.FC = () => {
  const [personList] = useRecoilState(persons);
  const [story, setStory] = useRecoilState(sp);

  const [inputLeft, setInputLeft] = useState<string>("");
  const [inputRight, setInputRight] = useState<string>("");
  const [inputBottom, setInputBottom] = useState<string>("");

  const activeScreen = useRecoilValue(activePage);
  const pageNum: number = 0;

  const handleAddMessage = (e: React.FormEvent, direction: string) => {
    e.preventDefault();

    const checkInput = () => {
      let inputText: string | boolean;
      switch (direction) {
        case "LEFT":
          return (inputText = inputLeft);
        case "RIGHT":
          return (inputText = inputRight);
        case "BOTTOM":
          return (inputText = inputBottom);
        default:
          return (inputText = false);
      }
    };
    let text: string | boolean = checkInput();
    if (text !== false) {
      const newMessage: messageProps = {
        id: 1,
        person: undefined,
        content: text,
        align: "left",
      };
      const newMessageList = [...activeScreen, newMessage];
      setStory(updatePage(story, newMessageList, pageNum));
    }
    setInputLeft("");
    setInputRight("");
    setInputBottom("");
  };

  const listsentences = activeScreen.map((card: messageProps) => {
    return (
      <SentenceCard
        key={card.id}
        person={card.person}
        content={card.content}
        align={card.align}
      />
    );
  });

  const listpersons = personList.map((person, index) => {
    return (
      <div key={index}>
        <li key={person.id}>{person.name}</li>
      </div>
    );
  });

  // Component end-return
  return (
    <div>
      <div className="editor__namelist">
        <ul>{listpersons}</ul>
      </div>
      <div className="editor__v2">
        <div className="editor__output">{listsentences}</div>
        <div className="editor__main-container">
          <div className="editor__left-container">
            {/* <EditorNameInput/> */}
            <form onSubmit={(e) => handleAddMessage(e, "LEFT")}>
              <input
                value={inputLeft}
                onChange={(event) => setInputLeft(event.target.value)}
                placeholder="venstre person skriver..."
              />
            </form>
          </div>
          <div className="editor__right-container">
            <h2>NAVN</h2>
            <form onSubmit={(e) => handleAddMessage(e, "RIGHT")}>
              <input
                value={inputRight}
                onChange={(event) => setInputRight(event.target.value)}
                placeholder="høyre person skriver..."
              />
            </form>
          </div>
        </div>
        <div className="editor__bottom-container">
          <h2>BRØDTEKST</h2>
          <form onSubmit={(e) => handleAddMessage(e, "BOTTOM")}>
            <input
              value={inputBottom}
              onChange={(event) => setInputBottom(event.target.value)}
              placeholder="bottom person skriver..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export const ColorCircle = styled.div`
  position: relative;
  top: 12.5px;
  width: 10px;
  height: 10px;
  border-radius: 0%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;
