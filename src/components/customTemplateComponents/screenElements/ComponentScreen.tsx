import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { DialogComponent } from "../componentTypes/DialogComponent";

const ToolbarHeight: number = 45.5;

export const ComponentScreen = () => {
  const DisplayRightComponent = (currentComponent: any) => {
    switch (currentComponent) {
      case "dialog":
        return <DialogComponent />;
      default:
        return <p>none selected</p>;
    }
  };

  return (
    <Screen>
      <ComponentDisplay>
        <DisplayRightComponent />
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
