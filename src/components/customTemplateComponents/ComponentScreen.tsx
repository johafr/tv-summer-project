import styled from "styled-components";
import { DialogComponent } from "./componentTypes/DialogComponent";

const ToolbarHeight: number = 46.5;

export const ComponentScreen = () => {
  return (
    <Screen>
      <Toolbar>
        <ButtonSpan>Preview</ButtonSpan>
        <ButtonSpan>Save</ButtonSpan>
      </Toolbar>
      <ComponentDisplay>
        <DialogComponent />
      </ComponentDisplay>
    </Screen>
  );
};

const Screen = styled.div`
  background-color: aliceblue;
  width: 60%;
`;

const Toolbar = styled.div`
  background-color: lightgreen;
  height: ${ToolbarHeight - 1}px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

const ButtonSpan = styled.span`
  margin-left: 1rem;
`;

const ComponentDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - ${ToolbarHeight}px);
`;
