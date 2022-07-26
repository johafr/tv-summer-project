import React from "react";
import { AddNewPersonInputField } from "./AddNewPersonInputField";
import { EditorNamesList } from "./EditorNamesList";

// Component wrapper function
export const PersonSelector: React.FC = () => {
  // Component end-return
  return (
    <div>
      <EditorNamesList numSelections={1} />
      <AddNewPersonInputField numSelections={1} />
    </div>
  );
};
