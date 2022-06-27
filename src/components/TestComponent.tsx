import React from "react";
import { SketchPicker } from "react-color";

export const TestComponent: React.FC = (props) => {
  return (
    <>
      <div>Bing bong!</div>
      <SketchPicker onChangeComplete={(color) => console.log(color.hex)} />
    </>
  );
};
