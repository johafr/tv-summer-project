import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  addNewPerson,
  allCharactersState,
  Person,
  setSelectedPerson,
} from "../../atoms/Characters";
import { activePerson } from "../../selectors/Characters";
import * as S from "../../styles/components/EditorNameInput";

// Component props
type Props = {
  numSelections?: number;
};

// Component wrapper function
export const AddNewPersonInputField: React.FC<Props> = ({ numSelections }) => {
  const personList = useRecoilValue(allCharactersState);
  const selectedPerson = useRecoilValue(activePerson);
  const [nameNewPerson, setNameNewPerson] = useState("");

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

  const handleAddName = (e: React.FormEvent) => {
    e.preventDefault();

    const nameExists = personList.findIndex(
      (person: Person) =>
        person.name.toUpperCase() === nameNewPerson.toUpperCase()
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
        name: nameNewPerson,
        color: randomColor(),
        align: "",
      };
      addNewPerson(newPerson);
      setSelectedPerson(newPerson);
      setNameNewPerson("");
    } else {
      setSelectedPerson(personList[nameExists]);
      setNameNewPerson("");
    }
  }; // End add person

  const handleNameClick = () => {
    if (numSelections === 1) {
      setSelectedPerson(undefined);
    }
  };

  // Component end-return
  return (
    <S.NameForm>
      <Tooltip title="Add name/remove name.">
        <form onSubmit={(event) => handleAddName(event)}>
          <S.Input
            style={{cursor: selectedPerson ? "pointer" : "text"}}
            type="text"
            onClick={handleNameClick}
            placeholder="Write a name..."
            value={nameNewPerson}
            onChange={(event) => setNameNewPerson(event.target.value)}
          />
        </form>
      </Tooltip>
    </S.NameForm>
  );
};
