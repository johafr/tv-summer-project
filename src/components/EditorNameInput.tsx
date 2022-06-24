import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { useRecoilState } from "recoil";
import { activePerson, addPerson, Person, persons } from "../atoms/persons";
import * as S from "../styles/components/EditorNameInput";

// Component wrapper function
export const EditorNameInput: React.FC = () => {
  const [personList, setPersonList] = useRecoilState(persons);
  const [selectedPerson, setSelectedPerson] = useRecoilState(activePerson);
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
    const randomColor = () => {
      let random = Math.floor(Math.random() * colorList.length);
      return colorList[random];
    };

    const newPerson = {
      id:
        personList.length !== 0 ? personList[personList.length - 1].id + 1 : 0,
      name: nameNewPerson,
      color: randomColor(),
    };
    setPersonList((currentPersons) => addPerson(currentPersons, newPerson));
    setSelectedPerson(newPerson);
    setNameNewPerson("");
  };

  const handleDeletePerson = (person: Person) => {
    const selectedPersonIndex = personList.findIndex(
      (currentperson) => currentperson.id === person.id
    );

    const updatedPersons = [
      ...personList.slice(0, selectedPersonIndex),
      ...personList.slice(selectedPersonIndex + 1),
    ];
    setPersonList(updatedPersons);
    setSelectedPerson(null);
  };

  const handleToggleSelectPerson = (person: Person) => {
    selectedPerson === person
      ? setSelectedPerson(null)
      : setSelectedPerson(person);
  };

  const listNames = personList.map((person, index) => {
    return (
      <div key={index}>
        <S.List
          key={person.id}
          onClick={(e) => {
            handleToggleSelectPerson(person);
            document.getElementById("lastInput")?.focus();
          }}
          style={{
            border: person === selectedPerson ? "1px solid blue" : "none",
          }}
        >
          <div
            onClick={() => console.log("Fargesirkel")}
            style={{
              backgroundColor: person.color?.toString(),
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: ".5rem",
            }}
          />
          {person.name}
          <DeleteIcon
            sx={{ fontSize: 22 }}
            className="editor__deletePerson"
            onClick={() => handleDeletePerson(person)}
          />
        </S.List>
      </div>
    );
  });

  // Component end-return
  return (
    <div>
      <S.NameList>
        <S.ListParent>{listNames}</S.ListParent>
      </S.NameList>
      <S.NameForm>
        <Tooltip title="Add name/remove name.">
          <form onSubmit={(event) => handleAddName(event)}>
            <S.Input
              style={{
                cursor: selectedPerson ? "pointer" : "text",
                backgroundColor:
                  personList.length > 0 ? selectedPerson?.color : "white",
              }}
              type="text"
              onClick={(event) => setSelectedPerson(null)}
              placeholder="Write a name..."
              value={
                selectedPerson && personList.length > 0
                  ? selectedPerson?.name
                  : nameNewPerson
              }
              onChange={(event) => setNameNewPerson(event.target.value)}
            />
          </form>
        </Tooltip>
      </S.NameForm>
    </div>
  );
};
