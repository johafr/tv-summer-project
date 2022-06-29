import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { useRecoilState } from "recoil";
import { activePerson, addPerson, Person, persons } from "../atoms/persons";
import * as S from "../styles/components/EditorNameInput";
import { ChromePicker } from "react-color";
import { updatePersonColor } from "../atoms/StoryPages";
import { StoryPages as sp } from "../atoms/StoryPages";
import { EditorNamesInput } from "./EditorNamesInput";
import { EditorNamesList } from "./EditorNamesList";

// Component wrapper function
export const EditorNames: React.FC = () => {
  const [storyPages,setStoryPages] = useRecoilState(sp);
  const [personList, setPersonList] = useRecoilState(persons);
  const [selectedPerson, setSelectedPerson] = useRecoilState(activePerson);
  const [viewColorPicker, setViewColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState<any>(
    selectedPerson?.color
  );

  // Component end-return
  return (
    <div>
      <EditorNamesList/>
      <EditorNamesInput/>
    </div>
  );
};
