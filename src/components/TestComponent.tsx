import React from "react";
import { auth } from "../Firebase";

export const TestComponent: React.FC = (props) => {
  console.log(auth.currentUser?.uid);

  return (
    <>
      <div>Bing bong!</div>
    </>
  );
};
