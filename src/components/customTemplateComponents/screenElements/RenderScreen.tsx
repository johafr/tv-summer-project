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
    <Screen interactionIsActive={currentInteraction !== null}>
      <ComponentDisplay>
        <DisplayComponent />
      </ComponentDisplay>
    </Screen>
  );
};

const Screen = styled.div<{ interactionIsActive: boolean }>`
  width: ${(props) => (props.interactionIsActive ? 60 : 80)}%;
`;

const ComponentDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - ${ToolbarHeight}px);
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
