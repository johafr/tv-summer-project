import React from "react";
import styled from "styled-components";
import { FormatProps } from "../../../atoms/components";

// Component props
type Props = {
  name?: string;
  text: string;
  variant?: string;
  inputVariables: FormatProps;
};

// Component wrapper function
export const SpeechBubbleChat: React.FC<Props> = (props) => {
  // Component end-return
  return (
    <div style={{ minWidth: props.inputVariables.styles[0].width }}>
      <Wrapper
        align={props.variant !== undefined ? props.variant : "left"}
        inputVariables={props.inputVariables}
      >
        <Name align={props.variant !== undefined ? props.variant : "left"}>
          {props.name}
        </Name>
        <Text>{props.text}</Text>
        {props.variant === undefined || props.variant === "left" ? (
          <LeftPoint></LeftPoint>
        ) : (
          <RightPoint></RightPoint>
        )}
      </Wrapper>
    </div>
  );
};

export const Wrapper = styled.div<{
  align?: string;
  inputVariables: FormatProps;
}>`
  margin-top: 2.5rem;
  margin-left: 3.125rem;
  margin-right: 3.125rem;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.inputVariables.styles[0].backgroundColor};
  position: relative;
  border-radius: ${(props) => props.inputVariables.styles[0].borderRadius}rem;
  min-width: 40%;
  max-width: 70%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  z-index: 0;
  float: ${(props) => props.align};
  // border:1px solid black;
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
  z-index: -1;
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
  font-size: 0.7rem;
  margin-left: 10px;
  margin-right: 10px;
  text-align: ${(props) => props.align};
`;

export const Text = styled.div`
  flex-direction: column;
  font-size: 0.8rem;
  padding: 0.2rem;
`;
