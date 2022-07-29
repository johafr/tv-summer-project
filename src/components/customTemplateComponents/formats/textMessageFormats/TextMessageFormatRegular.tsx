import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";
import LoopIcon from '@mui/icons-material/Loop';

export const TextMessageFormatRegular: React.FC<Message> = ({
  person,
  content,
}) => {
  return (
    <>
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CharacterName align={person !== undefined ? person.align : "left"}>
          {person?.name}
        </CharacterName>
        <TextMessageIndicator
          align={person !== undefined ? person.align : "left"}
        >
          text message
        </TextMessageIndicator>
      </div>
      <CharacterText align={person !== undefined ? person.align : "left"}>
        {content}
      </CharacterText>
    </Container>

    </>
  );
};

const Container = styled.div<{ align?: string }>`
  position: relative;
  width: 60%;
  max-width: 60%;
  word-wrap: break-word;
  background: #fcf9f6;
  border-radius: 10px;
  font-size: 0.6em;
  text-align: left;
  margin: 1rem;
  padding: 1rem;

  &:hover {
    div {
      opacity: 1;
    }
  }
`;

const CharacterName = styled.h3<{ align?: string }>`
  color: #9ca9ea;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 2px;
  font-size: 0.8em;

  ${(props) =>
    props.align === "right" &&
    `
        position: relative;
        left: 92%;
      `}
  \`;
`;

const TextMessageIndicator = styled.p<{ align?: string }>`
  font-style: italic;
  margin: 2px;
  color: rgba(52, 52, 52, 0.5);
  padding: 2px;
  font-size: 0.8em;

  ${(props) =>
    props.align === "right" &&
    `
        position: relative;
        right: 75%;
      `}
  \`;
`;

const CharacterText = styled.p<{ align?: string }>`
  margin: 0;

  ${(props) =>
    props.align === "right" &&
    `
        text-align: right;
      `}
  \`;
`;


