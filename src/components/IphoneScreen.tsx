import React from "react";
import styled from "styled-components";

export const IphoneScreen: React.FC = () => {
  return (
    <Screen>
      <Bump />
    </Screen>
  );
};

const Screen = styled.span`
  position: absolute;
  width: 195px;
  height: 422px;
  background-color: white;
  top: 13%;
  left: 50%;
  margin-left: -107px;
  border-radius: 10px;
`;

const Bump = styled.span`
  position: absolute;
  left: 50%;
  width: 100px;
  height: 30px;
  margin-left: -50px;
  margin-top: -15px;
  border-radius: 5px;
  background: linear-gradient(to top, #333333 50%, #232333 50%);
`;
