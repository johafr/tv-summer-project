import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const NarrativeFormatRegular: React.FC<Message> = ({
  person,
  content,
}) => {
  return (
    <Container>
      <NarrativeText align={person !== undefined ? person.align : "left"}>
        {content}
      </NarrativeText>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 60%;
  position: relative;
  background: RGBA(255, 255, 255, 0.09);
  padding: 10px;
  border-radius: 10px;
`;

const NarrativeText = styled.p<{ align?: string }>`
  font-size: 0.7em;
  text-align: left;
  max-width: 60%
  word-wrap: break-word;

  ${(props) =>
    props.align === "right"
      ? `
        text-align: right;
      `
      : `
        text-align: left;
      `}
  \`;
`;
