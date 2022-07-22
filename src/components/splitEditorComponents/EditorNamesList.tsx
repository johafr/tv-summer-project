import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  activePerson,
  Person,
  persons,
  selectedPersonsState,
} from "../../atoms/persons";
import * as S from "../../styles/components/EditorNameInput";
import DeleteIcon from "@mui/icons-material/Delete";
import ChromePicker from "react-color/lib/components/chrome/Chrome";

type Props = {
  numSelections: number;
  width? : number;
};

// Component wrapper function
export const EditorNamesList: React.FC<Props> = ({ numSelections, width }) => {
  const [personList, setPersonList] = useRecoilState(persons);
  const [selectedPerson, setSelectedPerson] = useRecoilState(activePerson);
  const [selectedPersons, setSelectedPersons] =
    useRecoilState<Person[]>(selectedPersonsState);

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

  const handleToggleSelectPerson = (person: Person, index?: number) => {
    // Uses selectionPerson state when only 1 nameInput exists
    if (numSelections === 1) {
      selectedPerson === person
        ? setSelectedPerson(undefined)
        : setSelectedPerson(person);
    }

    // Uses selectedPersons[] state when more than 1 nameInput exists
    else {
      // If the list has space it simply adds the name.
      if (selectedPersons.length === 0) {
        const updatedList = [person];
        setSelectedPersons(updatedList);
      }
      // If the list is "full" it removes index furthest down the right and adds the new person
      else {
        if (selectedPersons.length !== 0) {
          const updatedList = [...selectedPersons, person];
          setSelectedPersons(updatedList);
        }
      }
    }
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
    if (numSelections === 1) {
      setSelectedPerson(undefined);
    }
  }; // End delete person

  const handleUpdateColor = (person: Person | undefined) => {
    if (selectedPerson !== undefined) {
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
        if (numSelections === 1) {
          setSelectedPerson(undefined);
        }
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
    <S.NameList width={width}>
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
