import React from "react";
import { EditorNamesInput } from "./EditorNamesInput";
import { EditorNamesList } from "./EditorNamesList";

// Component wrapper function
export const EditorNames: React.FC = () => {
  // Component end-return
  return (
    <div>
      <EditorNamesList />
      <EditorNamesInput />
    </div>
  );
};
