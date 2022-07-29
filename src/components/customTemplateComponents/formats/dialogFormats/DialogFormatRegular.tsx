import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const DialogFormatRegular: React.FC<Message> = ({ person, content }) => {
  return (
    <Wrapper>
      <CharacterName
        align={person !== undefined ? person.align : "left"}
        color={person !== undefined ? person.color : ""}
      >
        {person?.name}
      </CharacterName>
      <CharacterText align={person !== undefined ? person.align : "left"}>
        {content}
      </CharacterText>
      <Arrow align={person !== undefined ? person.align : "left"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  max-width: 60%;
  text-wrap: break-word;
  background: #fffef9;
  position: relative;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
`;

const CharacterName = styled.h3<{ align?: string; color?: string }>`
  margin-bottom: 5px;
  font-size: 0.5em;
  text-transform: uppercase;
  color: black;
  ${(props) =>
    props.align === "right" &&
    `
        position: relative;
        left: 90%;
      `}
  \`;
`;

const CharacterText = styled.p<{ align?: string }>`
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 0.7em;
  z-index: 1000;
  position: relative;

  ${(props) =>
    props.align === "right" &&
    `
        text-align: right;
      `}
  \`;
`;

const Arrow = styled.div<{ align?: string }>`
  background: #fffef9;
  width: 20px;
  height: 10px;
  position: absolute;
  left: -18px;
  bottom: 10px;
  border: 0px solid;
  display: block;
  background-color: transparent;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 90%;
  box-shadow: -11px 5px 0px 5px #fffef9;
  transform: scaleX(-1);

  ${(props) =>
    props.align === "right" &&
    `
        left: 100%;
        transform: scaleX(1);
      `}
  \`;
`;
