import React from "react";

import { DisplayScreen } from "../components/DisplayScreen";
import { EditorReadingTime } from "../components/EditorReadingTime";
import { EditorNameInput } from "../components/EditorNameInput";

import { EditorTextInput } from "../components/EditorTextInput";
// Expand with values at a later stage if needed, ie color or animation valeus...
type Word = {
  id: number;
  content: string;
};
// Expand with values at a later stage if needed, ie color or animation values...



export const Editor: React.FC = () => {


  // Editor final return
  return (
    <div className="editor__parent--div">
      <div className="editor">
        <EditorNameInput/>
        <EditorReadingTime/>
        <div className="editor__textForm">
          <EditorTextInput/>
        </div>
      </div>
      <DisplayScreen />
    </div>
  );
};
