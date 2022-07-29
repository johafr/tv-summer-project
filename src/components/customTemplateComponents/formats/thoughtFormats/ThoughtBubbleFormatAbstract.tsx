import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const ThoughtBubbleFormatAbstract: React.FC<Message> = ({
  person,
  content,
}) => {
  //TODO: Make logic for alignment of small bubbles and character name

  // The div with green background is just to see the bubble
  return (
    <div
      style={{
        background: "#C9E4D4",
        padding: "10rem",
        display: "inline-block",
      }}
    >
      <Wrapper>
        <LargeBubble>
          <CharacterName align={person !== undefined ? person.align : "right"}>
            {person?.name}
          </CharacterName>
          <CharacterText align={person !== undefined ? person.align : "right"}>
            This was what he wanted to do, all along
          </CharacterText>
          <MediumBubble align={person !== undefined ? person.align : "right"} />
          <SmallBubble align={person !== undefined ? person.align : "right"} />
        </LargeBubble>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div``;

const LargeBubble = styled.div`
  margin: 0;
  position: relative;
  width: inherit;
  height: inherit;
  max-width: 20rem;
  word-wrap: break-word;
  padding: 0.2rem;
  background: white;
  border-radius: 50px;
  text-align: left;
  box-shadow: 0 0 8px 8px white;
`;

const MediumBubble = styled.div<{ align?: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 8px 8px white;
  position: absolute;
  right: -10px;
  bottom: -10px;

  ${(props) =>
    props.align === "left" &&
    `
        left: 0;
      `}
  \`;
`;

const SmallBubble = styled.div<{ align?: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 8px 8px white;
  position: absolute;
  right: -20px;
  bottom: -20px;
  text-align: right;

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
  left: 80%;
  font-size: 0.6em;

  ${(props) =>
    props.align === "left" &&
    `
        left: 0;
        padding-left: 1rem;
        text-align: left;
      `}
`;

const CharacterText = styled.p<{ align?: string }>`
  font-size: 0.7em;
  text-align: right;

  ${(props) =>
    props.align === "left" &&
    `
        text-align: left;  
        padding-left: 1rem;
      `}
  \`;
`;
