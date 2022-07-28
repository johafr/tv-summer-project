import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const DialogFormatOutlined: React.FC<Message> = ({
  person,
  content,
}) => {
  return (
    <Wrapper>
      <CharacterName align={person !== undefined ? person.align : "right"}>
        {person?.name}
      </CharacterName>
      <CharacterText align={person !== undefined ? person.align : "right"}>
        {content}
      </CharacterText>
      <Arrow align={person !== undefined ? person.align : "right"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: inherit;
  height: inherit;
  max-width: 20rem;
  text-wrap: break-word;
  border: #fffef9;
  position: relative;
  border-radius: 20px;
`;

const CharacterName = styled.h3<{ align?: string }>`
  position: relative;
  left: 38%;
  font-size: 0.6em;
  top: 15px;
  text-transform: uppercase;
  color: #d6bf5a;

  ${(props) =>
    props.align === "left" &&
    `
        left: -38%;
      `}
  \`;
`;

const CharacterText = styled.p<{ align?: string }>`
  position: relative;
  margin-left: 5px;
  padding: 5px;
  font-size: 0.7em;
  z-index: 1000;
  text-align: right;

  ${(props) =>
    props.align === "left" &&
    `
        text-align: left;
      `}
  \`;
`;

const Arrow = styled.div<{ align?: string }>`
  background: #fffef9;
  width: 20px;
  height: 10px;
  position: absolute;
  right: -18px;
  bottom: 10px;
  border: 0px solid;
  display: block;
  background-color: transparent;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 90%;
  box-shadow: -11px 5px 0px 5px #fffef9;
  transform: scaleX(1);

  ${(props) =>
    props.align === "left" &&
    `
        right: 100%;
        transform: scaleX(-1);
      `}
  \`;
`;
