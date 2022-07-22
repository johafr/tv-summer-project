import React from "react";
import styled from "styled-components";
import { FormatProps } from "../../../atoms/interactionComponents";

// Component props
type Props = {
  name?: string;
  content: string;
  variant?: string;
  inputVariables: FormatProps;
};

export const SpeechBubbleChat: React.FC<Props> = (props) => {
  return (
    <div style={{ minWidth: props.inputVariables.styles[0].width }}>
      <Wrapper
        align={props.variant !== undefined ? props.variant : "left"}
        inputVariables={props.inputVariables}
      >
        <Name align={props.variant !== undefined ? props.variant : "left"}>
          {props.name}
        </Name>
        <Text>{props.content}</Text>
        {props.variant === undefined || props.variant === "left" ? (
          <LeftPoint />
        ) : (
          <RightPoint />
        )}
      </Wrapper>
    </div>
  );
};

export const Wrapper = styled.div<{
  align?: string;
  inputVariables: FormatProps;
}>`
  margin-top: 5%;
  margin-left: 6.5%;
  margin-right: 6.5%;
  padding: 1.5%;
  background-color: ${(props) =>
    props.inputVariables.styles[0].backgroundColor};
  position: relative;
  border-radius: ${(props) => props.inputVariables.styles[0].borderRadius}rem;
  min-width: 40%;
  max-width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  z-index: 0;
  float: ${(props) => props.align};

  &:hover {
    border: 1px solid black;
  }
`;

export const LeftPoint = styled.div`
  width: 0;
  height: 0;
  border-left: 0.938rem solid transparent;
  border-right: 0.938rem solid transparent;
  border-top: 2.813rem solid white;
  position: absolute;
  left: -1rem;
  bottom: -1.2rem;
  transform: rotate(60deg);
  z-index: -2;
`;

export const RightPoint = styled.div`
  width: 0;
  height: 0;
  border-left: 0.938rem solid transparent;
  border-right: 0.938rem solid transparent;
  border-top: 2.813rem solid white;
  position: absolute;
  right: -1rem;
  bottom: -1.2rem;
  transform: rotate(300deg);
  z-index: -1;
`;
export const Name = styled.h3<{ align?: string }>`
  font-size: 0.5rem;
  margin-left: 10px;
  margin-right: 10px;
  text-align: ${(props) => props.align};
`;

export const Text = styled.div`
  flex-direction: column;
  font-size: 0.6rem;
  padding: auto;
`;
