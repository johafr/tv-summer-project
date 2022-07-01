import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { activePerson, addPerson, Person, persons } from "../atoms/persons";
import { messageProps } from "../atoms/story";
import { story as sp, updatePage } from "../atoms/story";
import { activePage } from "../selectors/story";
import { EditorNamesInput } from "./EditorNamesInput";
import { EditorNamesList } from "./EditorNamesList";
import { SentenceCard } from "./SentenceCard";
import * as S from "../styles/components/EditorNameInput";
import * as S2 from "../styles/components/EditorTextInputStyles";
import { EditorReadingTime } from "./EditorReadingTime";

// Component wrapper function
// type InputName = {
//   personName : string;
// }

const initialInputs = [
  {personName : ''},
  {personName : ''}]


export const EditorSplitscreen: React.FC = () => {
  const [personList, setPersonList] = useRecoilState(persons);
  const [story, setStory] = useRecoilState(sp);
  const [selectedPerson, setSelectedPerson] = useRecoilState(activePerson);
  //const [selectedPersons, setSelectedPersons] = useRecoilState<Person[]>(selectedPersonsState);



  const [inputLeft, setInputLeft] = useState<string>("");
  const [inputRight, setInputRight] = useState<string>("");
  const [inputBottom, setInputBottom] = useState<string>("");

  const activeScreen = useRecoilValue(activePage);
  const pageNum: number = 0;

  const [inputNames,setInputNames] = useState([
    [{personName : ''}],
    [{personName : ''}]
  ])

  const [selectPersons,setSelectedPersons] = useState<Person[][]>([
    [{id : -1, name: '', color : ''}],
    [{id : -2, name: '', color : ''}],
  ])

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

  const handleResetNamefield = (index : number) => {
    const selectvalues = [...selectPersons];
    const resetid = index - (index+2);
    selectvalues[index][0] = {id : resetid, name: '', color : ''}
    setSelectedPersons(selectvalues)

  }

  const handleSubmitName = (index : number , direction : string, e : React.FormEvent) => {
    e.preventDefault();

    const correctState = () => {
      if (direction === "LEFT") return inputNames[0][0];
      else return inputNames[1][0];
    }
    // Choses correct name-value and check if it already exists in personList
    const correctName = correctState()
    const nameExists = personList.findIndex(person => person.name.toUpperCase() === correctName.personName.toUpperCase());

    // If the person is new, this logic executes.
    if (nameExists === -1) {
      const randomColor = () => { let random = Math.floor(Math.random() * colorList.length); return colorList[random]; };
      const newPerson : Person = {
        id:
          personList.length !== 0
          ? personList[personList.length - 1].id + 1
          : 0,
        name : correctName.personName,
        color : randomColor(),
      };
      // Setters
      setPersonList((currentPersons) => addPerson(currentPersons, newPerson));

      // Reset for inputNames
      const values = [...inputNames];
      values[index][0] = {personName : ''};
      setInputNames(values);

      // Setter for selectedperson to new person
      const selectvalues = [...selectPersons]
      selectvalues[index][0] = newPerson;
      setSelectedPersons(selectvalues)
    }
    // If the person already exists, this logic executes
    else {
      // Setter for selectedperson to the found person
      const selectvalues = [...selectPersons];
      selectvalues[index][0] = personList[nameExists];
      setSelectedPersons(selectvalues);
    }
  }

  const handleChangeInput = (index : number,e : React.ChangeEvent<HTMLInputElement>) => {
    const values = [...inputNames];
    values[index][0] = {personName : e.target.value}
    setInputNames(values);
    console.log(values);  }

  const handleAddMessage = (e: React.FormEvent, direction: string) => {
    e.preventDefault();

    let inputText: string | boolean;
    let correctAlign: string;
    let correctPerson : Person | undefined = undefined;
    if (direction === "LEFT") {
      inputText = inputLeft;
      correctAlign = "left";
      correctPerson = selectPersons[0][0];
    } else if (direction === "RIGHT") {
      inputText = inputRight;
      correctAlign = "right";
      correctPerson = selectPersons[1][0];
    } else {
      inputText = inputBottom;
      correctAlign = "center";
    }

    const text = inputText;
    const newMessage: messageProps = {
      id: activeScreen[activeScreen.length-1].id+1,
      person: correctPerson,
      content: text,
      align: correctAlign,
    };
    const newMessageList = [...activeScreen, newMessage];
    setStory(updatePage(story, newMessageList, pageNum));

    setInputLeft("");
    setInputRight("");
    setInputBottom("");
  };




  const handleSelectValue = (name : string) => {
    const userExists = personList.findIndex(p => p.name === name)
    if (userExists === -1) {
      
    }
  }






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

  const listPersons = personList.map((person, index) => {
    return (
      <div key={index}>
        <li key={person.id}>{person.name}</li>
      </div>
    );
  });

  // Component end-return
  return (
    <div>
      <div className="editor__v2">
        <div>
          <div className="editor__name-section">
            <div className="editor__namelist">
              <EditorNamesList numSelections={1}/>
            </div>
          </div>
          <div className="editor__output">
            <div className="editor__output-content">{listsentences}</div>
          </div>
          <div className="editor__main-container">



            <div className="editor__left-container">
              <div className="editor__left-name">
                <S.NameForm style={{paddingLeft:'0rem'}}>
                  <Tooltip title="Add name/remove name.">
                    <form onSubmit={(event) => handleSubmitName(0,"LEFT",event)}>
                      <S.Input
                        style={{
                          cursor: selectPersons[0][0].name !== '' ? "pointer" : "text",
                          backgroundColor:
                            personList.length > 0
                              ? selectPersons[0][0].color
                              : "white",
                        }}
                        name="personName"
                        type="text"
                        onClick={() => handleResetNamefield(0)}
                        placeholder="Write a name..."
                        value={
                          selectPersons[0][0].name !== '' && personList.length > 0
                            ? selectPersons[0][0].name
                            : inputNames[0][0].personName
                        }
                        onChange={(event) =>
                          handleChangeInput(0,event)
                        }
                      />
                    </form>
                  </Tooltip>
                </S.NameForm>
              </div>
              <form onSubmit={(e) => handleAddMessage(e, "LEFT")}>
                <SplitInput
                  className="messagetextinput"
                  value={inputLeft}
                  onChange={(event) => setInputLeft(event.target.value)}
                  placeholder="Write a sentence..."
                />
              </form>
            </div>



            <div className="editor__right-container">
              <div className="editor__right-name">
                <S.NameForm style={{paddingLeft:'4.5rem'}}>
                  <Tooltip title="Add name/remove name.">
                    <form onSubmit={(event) => handleSubmitName(1,"RIGHT",event)}>
                      <S.Input
                        style={{
                          cursor: selectPersons[1][0].name !== '' ? "pointer" : "text",
                          backgroundColor:
                            personList.length > 0
                              ? selectPersons[1][0].color
                              : "white",
                        }}
                        type="text"
                        onClick={() => handleResetNamefield(1)}
                        placeholder="Write a name..."
                        value={
                          selectPersons[1][0].name !== '' && personList.length > 0
                            ? selectPersons[1][0].name
                            : inputNames[1][0].personName
                        }
                        onChange={(event) =>
                          handleChangeInput(1,event)
                        }
                      />
                    </form>
                  </Tooltip>
                </S.NameForm>
              </div>
              <form onSubmit={(e) => handleAddMessage(e, "RIGHT")} style={{paddingLeft:'4.5rem'}} >
                <SplitInput
                  className="messagetextinput"
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
              <SplitInput
                value={inputBottom}
                onChange={(event) => setInputBottom(event.target.value)}
                placeholder="bottom person skriver..."
              />
            </form>
          </div>
        </div>
        <div style={{marginLeft:'13.2rem'}}>
          <EditorReadingTime/>
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

export const SplitInput = styled.input`
  min-width: 20rem;
  padding-top: 2px;
  padding-left: 2px;
  line-height: 1em;
  margin-left:14px;
  border-bottom:2px solid lightgray;
  &:focus {
    outline: none;
    border-bottom: 3px solid lightgray;
  } 
`;
