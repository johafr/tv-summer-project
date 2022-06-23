import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { activePerson, addPerson, Person, persons } from "../atoms/persons";
import * as S from "../styles/components/EditorNameInput";

// Component wrapper function
export const EditorNameInput: React.FC = () => {
  const [personList, setPersonList] = useRecoilState(persons);
  const [selectedPerson, setSelectedPerson] = useRecoilState(activePerson);
  const [nameNewPerson, setNameNewPerson] = useState("");

  const colorList: string[] = ["#407178", "#9CA9EA", "#D6BF5A", "#F49850"];

  const handleSelectPerson = (selectedPerson: Person) => {
    const findPerson = personList.find((person) => person === selectedPerson);
    findPerson ? setSelectedPerson(findPerson) : setSelectedPerson(null);
  };

  const handleAddName = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with a colorpicker or something..
    const randomColor = () => {
      let random = Math.floor(Math.random() * personList.length);
      if (personList.find((person) => person.color === colorList[random])) {
        randomColor();
      } else return colorList[random];
    };

    const newPerson = {
      id: personList[personList.length - 1].id + 1,
      name: nameNewPerson,
      color: randomColor(),
    };
    setPersonList((currentPersons) => addPerson(currentPersons, newPerson));
    setNameNewPerson("");
  };

  const listNames = personList.map((person) => {
    return (
      <S.List
        key={person.id}
        style={{
          backgroundColor: person.color?.toString(),
          fontWeight: person === selectedPerson ? "bold" : "normal",
        }}
        onClick={(e) => handleSelectPerson(person)}
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
            value={nameNewPerson}
            onChange={(event) => setNameNewPerson(event.target.value)}
          />
        </form>
      </S.NameForm>
    </div>
  );
};
