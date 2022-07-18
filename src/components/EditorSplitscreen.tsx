import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { activePerson, addPerson, persons } from "../atoms/persons";
import { addMessage, MessageProps } from "../atoms/stories";
import { EditorNamesList } from "./EditorNamesList";
import { SentenceCard } from "./SentenceCard";
import * as S from "../styles/components/EditorNameInput";
import * as S2 from "../styles/components/EditorTextInputStyles";
import { activePage } from "../selectors/stories";

// Component wrapper function
export const EditorSplitscreen: React.FC = () => {
  const [personList, setPersonList] = useRecoilState(persons);
  const [selectedPerson, setSelectedPerson] = useRecoilState(activePerson);

  const [inputNameLeft, setInputNameLeft] = useState("");
  const [inputNameRight, setInputNameRight] = useState("");

  const [inputLeft, setInputLeft] = useState<string>("");
  const [inputRight, setInputRight] = useState<string>("");
  const [inputBottom, setInputBottom] = useState<string>("");

  const currentPage = useRecoilValue(activePage)!;

  let colorList = [
    "#407178",
    "#9CA9EA",
    "#D6BF5A",
    "#F49850",
    "#507168",
    "#7CA9EB",
    "#D7BF5A",
    "#F19850",
    "#427178",
    "#9CA8EA",
    "#D3BF5A",
    "#F59850",
    "#527168",
    "#9CA9EB",
    "#D8BF5A",
    "#F89850",
    "Red",
    "Blue",
    "Cyan",
    "Green",
    "Yellow",
    "Lightgray",
  ];

  const handleAddName = (e: React.FormEvent, direction: string) => {
    e.preventDefault();

    const correctState = () => {
      if (direction === "LEFT") return inputNameLeft;
      else return inputNameRight;
    };
    console.log(direction);
    const nameExists = personList.findIndex(
      (person) => person.name.toUpperCase() === correctState().toUpperCase()
    );
    if (nameExists === -1) {
      const randomColor = () => {
        let random = Math.floor(Math.random() * colorList.length);
        return colorList[random];
      };
      const newPerson = {
        id:
          personList.length !== 0
            ? personList[personList.length - 1].id + 1
            : 0,
        name: correctState(),
        color: randomColor(),
      };
      setPersonList((currentPersons) => addPerson(currentPersons, newPerson));
      setSelectedPerson(newPerson);
      if (correctState() === "LEFT") {
        setInputNameLeft("");
      } else setInputNameRight("");
    } else {
      setSelectedPerson(personList[nameExists]);
      if (correctState() === "LEFT") {
        setInputNameLeft("");
      } else setInputNameRight("");
    }
  }; // End add person

  const handleAddMessage = (e: React.FormEvent, direction: string) => {
    e.preventDefault();

    let inputText: string | boolean;
    let correctAlign: string;
    if (direction === "LEFT") {
      inputText = inputLeft;
      correctAlign = "left";
    } else if (direction === "RIGHT") {
      inputText = inputRight;
      correctAlign = "right";
    } else {
      inputText = inputBottom;
      correctAlign = "center";
    }

    const text = inputText;
    const newMessage: MessageProps = {
      id: 1,
      person: undefined,
      content: text,
      align: correctAlign,
    };
    addMessage(newMessage);
    setInputLeft("");
    setInputRight("");
    setInputBottom("");
  };

  const listsentences = currentPage.messages.map((card: MessageProps) => {
    return (
      <SentenceCard
        key={card.id}
        person={card.person}
        content={card.content}
        align={card.align}
      />
    );
  });

  // Component end-return
  return (
    <div>
      <div className="editor__v2">
        <div>
          <div className="editor__name-section">
            <div className="editor__namelist">
              <EditorNamesList numSelections={1} />
            </div>
          </div>
          <div className="editor__output">
            <div className="editor__output-content">{listsentences}</div>
          </div>
          <div className="editor__main-container">
            <div className="editor__left-container">
              <div className="editor__left-name">
                <S.NameForm>
                  <Tooltip title="Add name/remove name.">
                    <form onSubmit={(event) => handleAddName(event, "LEFT")}>
                      <S.Input
                        style={{
                          cursor: selectedPerson ? "pointer" : "text",
                          backgroundColor:
                            personList.length > 0
                              ? selectedPerson?.color
                              : "white",
                        }}
                        type="text"
                        onClick={(event) => setSelectedPerson(undefined)}
                        placeholder="Write a name..."
                        value={
                          selectedPerson && personList.length > 0
                            ? selectedPerson?.name
                            : inputNameLeft
                        }
                        onChange={(event) =>
                          setInputNameLeft(event.target.value)
                        }
                      />
                    </form>
                  </Tooltip>
                </S.NameForm>
              </div>
              <form onSubmit={(e) => handleAddMessage(e, "LEFT")}>
                <S2.FormInput
                  value={inputLeft}
                  onChange={(event) => setInputLeft(event.target.value)}
                  placeholder="Write a sentence..."
                />
              </form>
            </div>
            <div className="editor__right-container">
              <div className="editor__right-name">
                <S.NameForm>
                  <Tooltip title="Add name/remove name.">
                    <form onSubmit={(event) => handleAddName(event, "RIGHT")}>
                      <S.Input
                        style={{
                          cursor: selectedPerson ? "pointer" : "text",
                          backgroundColor:
                            personList.length > 0
                              ? selectedPerson?.color
                              : "white",
                        }}
                        type="text"
                        onClick={(event) => setSelectedPerson(undefined)}
                        placeholder="Write a name..."
                        value={
                          selectedPerson && personList.length > 0
                            ? selectedPerson?.name
                            : inputNameRight
                        }
                        onChange={(event) =>
                          setInputNameRight(event.target.value)
                        }
                      />
                    </form>
                  </Tooltip>
                </S.NameForm>
              </div>
              <form onSubmit={(e) => handleAddMessage(e, "RIGHT")}>
                <S2.FormInput
                  value={inputRight}
                  onChange={(event) => setInputRight(event.target.value)}
                  placeholder="Write a sentence..."
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
