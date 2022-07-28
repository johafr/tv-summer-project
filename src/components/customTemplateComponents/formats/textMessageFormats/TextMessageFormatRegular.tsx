import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const TextMessageFormatRegular: React.FC<Message> = ({
  person,
  content,
}) => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CharacterName>{person?.name}</CharacterName>
        <TextMessageIndicator>text message</TextMessageIndicator>
      </div>
      <CharacterText>{content}</CharacterText>
    </Container>
  );
};

const Container = styled.div`
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
`;

const CharacterName = styled.h3`
  color: #9ca9ea;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 2px;
  font-size: 0.8em;
`;

const TextMessageIndicator = styled.p`
  font-style: italic;
  margin: 2px;
  color: rgba(52, 52, 52, 0.5);
  padding: 2px;
  font-size: 0.8em;
  position: relative;
  top: -5px;
`;

const CharacterText = styled.p`
  margin: 0;
`;
