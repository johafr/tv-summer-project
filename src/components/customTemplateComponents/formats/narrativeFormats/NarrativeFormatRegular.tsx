import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const NarrativeFormatRegular: React.FC<Message> = ({
  person,
  content,
}) => {
  return (
    <Container>
      <NarrativeText align={person !== undefined ? person.align : "right"}>
        {content}
      </NarrativeText>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  position: relative;
  max-width: 60%
  word-wrap: break-word;
  left: 40%;
  transform: translateX(-40%);
`;

const NarrativeText = styled.p<{ align?: string }>`
  font-size: 0.7em;

  ${(props) =>
    props.align === "left"
      ? `
        text-align: left;
      `
      : `
        text-align: right;
      `}
  \`;
`;
