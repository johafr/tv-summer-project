import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeComponent } from "../../../selectors/components";
import { Component } from "../componentTypes/DialogComponent";

const ToolbarHeight: number = 45.5;

export const ComponentScreen = () => {
  const { currentComponent } = useRecoilValue(activeComponent);

  const DisplayComponent = () => {
    switch (currentComponent !== null) {
      case true:
        return <Component />;
      case false:
        return <>Object not selected</>;
      default:
        return <p>Object not in list</p>;
    }
  };

  return (
    <Screen>
      <ComponentDisplay>
        <DisplayComponent />
      </ComponentDisplay>
    </Screen>
  );
};

const Screen = styled.div`
  background-color: aliceblue;
  width: 60%;
`;

const ComponentDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - ${ToolbarHeight}px);
`;
