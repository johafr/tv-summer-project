import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { activePerson, Person, persons } from "../atoms/persons";
import * as S from "../styles/components/EditorNameInput";
import DeleteIcon from "@mui/icons-material/Delete";
import ChromePicker from "react-color/lib/components/chrome/Chrome";

// Component wrapper function
export const EditorNamesList: React.FC = () => {
  const [personList, setPersonList] = useRecoilState(persons);
  const [selectedPerson, setSelectedPerson] = useRecoilState(activePerson);

  const [viewColorPicker, setViewColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState<any>(
    selectedPerson?.color
  );

  // State-handlers
  // Toggle for the visibility of the color-picker state
  const handleClickColorPicker = () => {
    setViewColorPicker(true);
  };

  // Handler for animating mouse dragging in the color picker.
  const handleChangeColor = (color: any) => {
    setSelectedColor(color);
  };

  const handleToggleSelectPerson = (person: Person) => {
    selectedPerson === person
      ? setSelectedPerson(undefined)
      : setSelectedPerson(person);
  };
  // Deletes a person when <user> clicks the delete trashcan icon.
  const handleDeletePerson = (person: Person) => {
    const selectedPersonIndex = personList.findIndex(
      (currentperson) => currentperson.id === person.id
    );
    const updatedPersons = [
      ...personList.slice(0, selectedPersonIndex),
      ...personList.slice(selectedPersonIndex + 1),
    ];
    setPersonList(updatedPersons);
    setSelectedPerson(undefined);
  }; // End delete person

  const handleUpdateColor = (person: Person | undefined) => {
    if (selectedPerson !== null) {
      const newColor = selectedColor.hex;

      // Prevents settings the color to null
      if (newColor !== undefined) {
        const selectedPersonIndex = personList.findIndex(
          (currentperson) => currentperson === person
        );
        const selectedPerson = personList[selectedPersonIndex];

        // Makes an updated personList (and updated person-object for instant color change across app).
        const updatedPersons = [
          ...personList.slice(0, selectedPersonIndex),
          { ...selectedPerson, color: newColor },
          ...personList.slice(selectedPersonIndex + 1),
        ];
        const updatedPerson = {
          id: selectedPerson.id,
          name: selectedPerson.name,
          color: selectedColor.hex,
        };
        setPersonList(updatedPersons);
        setSelectedPerson(updatedPerson);
      }
    }
    setViewColorPicker(false);
  }; // End update person color

  const listNames = personList.map((person, index) => {
    return (
      <div key={index}>
        <S.List
          key={person.id}
          onClick={(e) => {
            handleToggleSelectPerson(person);
            setSelectedColor(person.color);
            document.getElementById("lastInput")?.focus();
          }}
          style={{
            border: person === selectedPerson ? "1px solid blue" : "none",
          }}
        >
          <div
            onClick={handleClickColorPicker}
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
    <S.NameList>
      <S.ListParent>{listNames}</S.ListParent>
      {viewColorPicker ? (
        <div style={{ position: "absolute", zIndex: "2" }}>
          <div
            style={{
              position: "fixed",
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }}
            onClick={() => handleUpdateColor(selectedPerson)}
          />
          <ChromePicker
            onChange={handleChangeColor}
            color={selectedColor}
            className="s_listParent__chromepicker"
          />
        </div>
      ) : null}
    </S.NameList>
  );
};
