import React from "react";
import styled from "styled-components";
import { Message } from "../../../atoms/stories";

// Component wrapper function
export const ThoughtBubbleChat: React.FC<Message> = (props) => {
  // Component end-return
  return (
    <div style={{ width: "100%", backgroundColor: "transparent" }}>
      <Wrapper align={props.align !== undefined ? props.align : "left"}>
        <Name align={props.align !== undefined ? props.align : "left"}>
          {props.person?.name}
        </Name>
        <Content>{props.content}</Content>
        {props.align === undefined || props.align === "left" ? (
          <LeftDot></LeftDot>
        ) : (
          <RightDot></RightDot>
        )}
      </Wrapper>
    </div>
  );
};

export const Wrapper = styled.div<{ align?: string }>`
  margin: 5% 10.5% 10px 10.5%;
  padding: 1.5%;
  background-color: white;
  border-radius: 100px;
  border: 1px dotted white;
  min-width: 30%;
  max-width: 70%;
  position: relative;
  float: ${(props) => props.align};
`;

export const LeftDot = styled.div`
  background-color: white;
  width: 0.002rem;
  height: 0.002rem;
  padding: 0.3rem;
  border-radius: 100%;
  position: absolute;
  top: 80%;
  left: -5%;
  box-shadow: -12px 10px 0px -2px rgba(255, 255, 255, 255);
`;

export const RightDot = styled.div`
  background-color: white;
  width: 1px;
  height: 1px;
  padding: 0.3rem;
  border-radius: 100px;
  position: absolute;
  top: 80%;
  right: -5%;
  box-shadow: 20px 10px 0px -5px rgba(255, 255, 255, 255);
`;
export const Name = styled.div<{ align?: string }>`
  font-size: 0.5rem;
  margin-left: 10px;
  text-align: ${(props) => props.align};
`;

export const Content = styled.div`
  font-size: 0.6rem;
  text-align: left;
  padding: 0.2rem;
`;
