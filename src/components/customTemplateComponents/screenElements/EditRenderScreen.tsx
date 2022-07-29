import styled from "styled-components";
import { ToolbarHeight } from "./RenderScreen";
import { EditRenderScreenToolbar } from "./renderScreenComponents/EditRenderScreenToolbar";

export const EditRenderScreen = () => {
  return (
    <Screen>
      <EditRenderScreenToolbar />
      <ComponentDisplay></ComponentDisplay>
    </Screen>
  );
};

const Screen = styled.div`
  width: 60%;
`;

const ComponentDisplay = styled.div`
  background-color: #d4dfe3;
  height: calc(100% - ${ToolbarHeight}px);
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  user-select: none;
  cursor: pointer;
`;
