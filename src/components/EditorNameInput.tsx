import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
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
    "Red",
    "Blue",
    "Cyan",
    "Green",
    "Yellow",
    "Lightgray",
  ];

  const handleSelectPerson = (selectedPerson: Person) => {

    const findPerson = personList.find((person) => person === selectedPerson);
    findPerson ? setSelectedPerson(findPerson) : setSelectedPerson(null);

  };

  const handleAddName = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with a colorpicker or something..
    const randomColor = () => {
      let random = Math.floor(Math.random() * personList.length);
      return colorList[random];
    };

    const newPerson = {
      id:
        personList.length !== 0 ? personList[personList.length - 1].id + 1 : 0,
      name: nameNewPerson,
      color: randomColor(),
    };
    setPersonList((currentPersons) => addPerson(currentPersons, newPerson));
    setNameNewPerson("");
  };

  const handleDeletePerson = (person: Person) => {

    const selectedPersonIndex = personList.findIndex((currentperson) => currentperson.id === person.id);

    const updatedPersons = [
      ...personList.slice(0,selectedPersonIndex),
      ...personList.slice(selectedPersonIndex + 1)
    ]
    setPersonList(updatedPersons);
  }

  const listNames = personList.map((person) => {
    return (
      <div>
        <S.List
          key={person.id}
          onClick={(e) => handleSelectPerson(person)}
          style={{border: person === selectedPerson ? "1px solid blue": "none"}}
        >
          <div style={{ backgroundColor: person.color?.toString(), width: "30px", height: "30px", borderRadius: "50%", marginRight: ".5rem" }}/>
          {person.name}{" "}
          <DeleteIcon sx={{ fontSize: 22 }} className="editor__deletePerson"
          onClick={() => handleDeletePerson(person)} />
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
        <form onSubmit={(event) => handleAddName(event)}>
          <S.Input
            style={{ backgroundColor: "white" }}
            type="text"
            placeholder="Write a name..."
            value={nameNewPerson}
            onChange={(event) => setNameNewPerson(event.target.value)}
          />
        </form>
      </S.NameForm>
    </div>
  );
};
