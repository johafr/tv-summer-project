import React from "react";
import { SketchPicker } from "react-color";

export const TestComponent: React.FC = (props) => {
  return (
    <>
      <div>Bing bong!</div>

      <div className="editor__v2">
        <h1>Editor v2</h1>
        <div className="editor__main-container">
          <div className="editor__left-container">
            <h2>Venstre</h2>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
          </div>
          <div className="editor__right-container">
            <h2>Høyre</h2>
            <input placeholder="høyre person skriver..."/>
            <input placeholder="høyre person skriver..."/>
            <input placeholder="høyre person skriver..."/>
            <input placeholder="høyre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
            <input placeholder="venstre person skriver..."/>
          </div>
        </div>
        <div className="editor__bottom-container">
            <h2>Nederst</h2>
            <input placeholder="bottom person skriver..."/>
            <input placeholder="bottom person skriver..."/>
            <input placeholder="bottom person skriver..."/>
            <input placeholder="bottom person skriver..."/>
        </div>
      </div>
    </>
  );
};
