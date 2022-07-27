import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const ThoughtBubbleFormatRegular: React.FC<Message> = ({
  person,
  content,
}) => {
  //TODO: Make logic for alignment of small bubbles and character name

  // The div with green background is just to see the bubble
  return (
    <div>
      <Wrapper>
        <LargeBubble>
          <CharacterName align={person !== undefined ? person.align : "right"}>
            {person?.name}
          </CharacterName>
          <CharacterText>{content}</CharacterText>
          <MediumBubble align={person !== undefined ? person.align : "right"} />
          <SmallBubble align={person !== undefined ? person.align : "right"} />
        </LargeBubble>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div``;

const LargeBubble = styled.div`
  position: relative;
  width: inherit;
  max-width: 20rem;
  word-wrap: break-word;
  height: inherit;
  padding: 2px;
  background: white;
  display: inline-block;
  border-radius: 40px;
  box-shadow: 0 0 10px 10px white;
`;

const MediumBubble = styled.div<{ align?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 8px 8px white;
  position: absolute;
  right: -10px;
  bottom: -40px;

  ${(props) =>
    props.align === "left" &&
    `
        left: 0;
      `}
  \`;
`;

const SmallBubble = styled.div<{ align?: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 5px 5px white;
  position: absolute;
  right: -20px;
  bottom: -60px;

  ${(props) =>
    props.align === "left" &&
    `
        left: -10px;
      `}
  \`;
`;

// The condition in this styled component sets the character name to the left
// if the alignment is left. It is right by default
const CharacterName = styled.h3<{ align?: string }>`
  position: relative;
  left: 75%;

  ${(props) =>
    props.align === "left" &&
    `
        left: 0;
      `}
`;

const CharacterText = styled.p``;
