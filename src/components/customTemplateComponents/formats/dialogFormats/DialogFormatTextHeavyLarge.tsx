import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const DialogFormatTextHeavyLarge: React.FC<Message> = ({
  person,
  content,
}) => {
  return (
    <Container>
      <NameContainer align={person !== undefined ? person.align : "right"}>
        <CharacterName>{person?.name}</CharacterName>
      </NameContainer>
      <Wrapper align={person !== undefined ? person.align : "right"}>
        <CharacterText align={person !== undefined ? person.align : "right"}>
          {content}
        </CharacterText>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const NameContainer = styled.div<{ align?: string }>`
  display: flex;
  justify-content: flex-end;

  ${(props) =>
    props.align === "left" &&
    `
        justify-content: flex-start;
      `}
  \`;
`;

const Wrapper = styled.div<{ align?: string }>`
  background: white;
  padding: 2rem;
  border-radius: 0 20px 20px 0;
  height: 10rem;
  display: inline-flex;
  align-items: center;
  transform: scale(-1);

  ${(props) =>
    props.align === "left" &&
    `
        transform: scale(1);
      `}
  \`;
`;

const CharacterText = styled.p<{ align?: string }>`
  font-size: 0.7em;
  transform: scale(-1);

  ${(props) =>
    props.align === "left" &&
    `
        transform: scale(1);
      `}
  \`;
`;

const CharacterName = styled.h3`
  font-size: 0.6em;
  margin-left: 1rem;
  margin-right: 1rem;
`;
