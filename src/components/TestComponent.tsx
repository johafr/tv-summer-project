import React from "react";
import styled from "styled-components";

type LeftCardProps = {
  name: string;
  text: string;
};

export const TestComponent: React.FC<LeftCardProps> = ({ name, text }) => {
  return (
    <>
      <h1>Bing bong!</h1>
    </>
  );
};
