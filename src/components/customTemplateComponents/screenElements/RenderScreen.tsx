import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeCommunicationCategory } from "../../../selectors/template";
import { InteractionSwitch } from "../../editorComponents/InteractionSwitch";

const ToolbarHeight: number = 45.5;

export const RenderScreen = () => {
  const { currentInteraction } = useRecoilValue(activeCommunicationCategory);

  return (
    <Screen interactionIsActive={currentInteraction !== null}>
      <Toolbar interactionIsActive={currentInteraction !== null}>
        <ButtonSpan>Preview</ButtonSpan>
        <ButtonSpan>Save</ButtonSpan>
      </Toolbar>{" "}
      <ComponentDisplay>
        {currentInteraction && (
          <InteractionSwitch
            id={0}
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            align="left"
            format={[
              currentInteraction!.interactionName,
              currentInteraction!.premadeFormats[
                currentInteraction!.activeFormatIndex
              ].toString(),
            ]}
          />
        )}
      </ComponentDisplay>
    </Screen>
  );
};

const Screen = styled.div<{ interactionIsActive: boolean }>`
  width: ${(props) => (props.interactionIsActive ? 60 : 80)}%;
`;

const ComponentDisplay = styled.div`
  background-color: #d4dfe3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - ${ToolbarHeight}px);
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Toolbar = styled.div<{ interactionIsActive: boolean }>`
  height: 3rem;
  display: flex;
  align-items: center;
  box-shadow: var(--middle-shadow-elevation-low);
`;

const ButtonSpan = styled.span`
  margin-left: 1rem;
`;
