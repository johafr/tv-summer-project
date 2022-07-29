import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { RenderTemplate } from "./renderScreenComponents/RenderTemplate";
import { RenderCommunication } from "./renderScreenComponents/RenderCommunication";
import { RenderScreenToolbar } from "./renderScreenComponents/RenderScreenToolbar";

import { activeCommunicationCategory } from "../../../selectors/template";

export const ToolbarHeight: number = 45.5;

export const RenderScreen = () => {
  const { currentCommunicationCategory } = useRecoilValue(
    activeCommunicationCategory
  );

  //might be possible to shorten this

  return (
    <Screen>
      <RenderScreenToolbar />
      <ComponentDisplay>
        {currentCommunicationCategory ? (
          <RenderCommunication />
        ) : (
          <RenderTemplate />
        )}
      </ComponentDisplay>
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
