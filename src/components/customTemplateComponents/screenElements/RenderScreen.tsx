import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeInteraction } from "../../../selectors/interactionComponents";
import { CustomComponent } from "../formats/CustomComponent";

const ToolbarHeight: number = 45.5;

export const RenderScreen = () => {
  const { currentInteraction } = useRecoilValue(activeInteraction);

  const DisplayComponent = () => {
    switch (currentInteraction !== null) {
      case true:
        return <CustomComponent />;
      case false:
        return <p>Object not selected</p>;
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
