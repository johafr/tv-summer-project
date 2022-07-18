import React from "react";
import styled from "styled-components";

type LeftCardProps = {
  name: string;
  text: string;
};
export const Test: React.FC = () => {
  return (
    <>
      <div>test</div>
    </>
  );
};

export const TestComponent: React.FC<LeftCardProps> = ({ name, text }) => {
  return (
    <>
      <h1>Bing bong!</h1>
    </>
  );
};
