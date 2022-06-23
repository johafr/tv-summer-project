import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { addPerson, persons as ps } from "../atoms/persons";
import * as S from "../styles/components/EditorNameInput";

// Component props
type Props = {};

// Component wrapper function
export const EditorNameInput: React.FC<Props> = ({}) => {
  const [persons, setPersons] = useRecoilState(ps);
  const [inputName, setInputName] = useState("");

  const colorList: string[] = ["#407178", "#9CA9EA", "#D6BF5A", "#F49850"];

  const handleSelectPerson = (selectedID: number) => {
    const findPerson = persons.find((person) => person.id === selectedID);
    if (findPerson) {
      setInputName(findPerson.name);
    }
  };

  const handleAddName = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with a colorpicker or something..
    const randomColor = () => {
      let random = Math.floor(Math.random() * persons.length);
      if (persons.find((person) => person.color === colorList[random])) {
        randomColor();
      } else return colorList[random];
    };

    const newPerson = {
      id: persons[persons.length - 1].id + 1,
      name: inputName,
      color: randomColor(),
      isSelected: false,
    };
    setPersons((currentPersons) => addPerson(currentPersons, newPerson));
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
