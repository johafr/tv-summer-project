import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const NarrativeFormatRegular: React.FC<Message> = ({
  person,
  content,
}) => {
  return (
    <>
      <Container>
        <NarrativeText align={person !== undefined ? person.align : "right"}>
          {content}
        </NarrativeText>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: inherit;
  height: inherit;
  max-width: 20rem;
  word-wrap: break-word;
  background: white;
  padding: 0.5rem;
  border-radius: 10px;
`;

const NarrativeText = styled.p<{ align?: string }>`
  font-size: 0.7em;
  text-align: center;

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
