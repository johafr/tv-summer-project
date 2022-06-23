import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRecoilState } from "recoil";
import { inputNameState } from "../atoms/inputName";
import { addPerson, personsState } from "../atoms/persons";
import { Tooltip } from "@mui/material";
import * as S from "../styles/components/EditorNameInput";

// Component props
type Props = {};

let initcolorList = [
    "#407178", "#9CA9EA", "#D6BF5A", "#F49850",
    "#507168", "#7CA9EB", "#D7BF5A", "#F19850",
    "Red","Blue","Cyan","Green","Yellow","Lightgray"];

// Component wrapper function
export const EditorNameInput: React.FC<Props> = ({}) => {
  const [persons, setPersons] = useRecoilState(personsState);
  const [inputName, setInputName] = useRecoilState(inputNameState);
  const [colorList,setColorList] = useState<string[]>(initcolorList)


  const handleSelectPerson = (selectedID: number) => {
    const findPerson = persons.find((person) => person.id === selectedID);
    if (findPerson) {
      setInputName(findPerson.name);
    }
  };

  const handleAddName = (e: React.FormEvent) => {
    e.preventDefault();

    let personID : number;
    if (persons.length === 0) {personID = 1}
    else {personID = persons[persons.length - 1].id + 1}

    // Replace with a colorpicker or something..
    
    let random = Math.floor(Math.random() * persons.length);
        
  
    

    const newPerson = {
      id: personID,
      name: inputName,
      color: colorList[random],
    };
    setPersons((currentPersons) => addPerson(currentPersons, newPerson));

    // DERP RANDOM COLORLIST
    setColorList( [
        ...colorList.slice(0,random),
        ...colorList.slice(random + 1)
    ])
  };




  const listNames = persons.map((person) => {
    const selectedPerson = (name: string) => {
      if (name === inputName) return true;
    };

    return (
      <S.List
        key={person.id}
        style={{
          backgroundColor: person.color?.toString(),
          fontWeight: selectedPerson(person.name) ? "bold" : "normal",
        }}
        onClick={(e) => handleSelectPerson(person.id)}
      >
        {person.name}
      </S.List>
    );
  });

  // Component end-return
  return (
    <div>
      <S.NameList>
        <ul>{listNames}</ul>
      </S.NameList>

      <S.NameForm>
        <form onSubmit={(event) => handleAddName(event)}>
          <S.Input
            type="text"
            placeholder="Name"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
        </form>
      </S.NameForm>
    </div>
  );
};
