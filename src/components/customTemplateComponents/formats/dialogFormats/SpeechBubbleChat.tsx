import React from "react";
import styled from "styled-components";
import { Message } from "../../../../atoms/stories";

export const SpeechBubbleChat: React.FC<Message> = (props) => {
  return (
    <div>
      <Wrapper align={props.align !== undefined ? props.align : "left"}>
        <Name align={props.align !== undefined ? props.align : "left"}>
          {props.person?.name}
        </Name>
        <Text>{props.content}</Text>
        {props.align === undefined || props.align === "left" ? (
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
}>`
  margin-top: 5%;
  margin-left: 6.5%;
  margin-right: 6.5%;
  padding: 1.5%;
  background-color: white;
  position: relative;
  border-radius: 5rem;
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
