import styled from "styled-components";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeInteractionIndex,
  InteractionProps,
  interactionListState,
} from "../../atoms/components";
import { activeInteraction } from "../../selectors/components";

export const DrawerInteractionList = () => {
  const [componentTypes] = useRecoilState(interactionListState);
  const [, setActiveIndex] = useRecoilState(activeInteractionIndex);
  const { currentInteraction } = useRecoilValue(activeInteraction);

  const checkActiveComponent = (componentType: InteractionProps) => {
    const active =
      currentInteraction === null
        ? false
        : currentInteraction === componentType
        ? true
        : false;
    return active;
  };

  const handleSetActiveComponent = (componentType: InteractionProps) => {
    const newIndex =
      componentType === currentInteraction
        ? -1
        : componentTypes.findIndex(
            (componentInList) =>
              componentType.InteractionName === componentInList.InteractionName
          );
    setActiveIndex(newIndex);
  };

  const GetIcon = (componentType: InteractionProps) => {
    switch (componentType.InteractionName) {
      case "Dialog":
        return <ChatBubbleOutlineOutlinedIcon />;
      case "Thought":
        return <PsychologyOutlinedIcon />;
      case "Shout":
        return <CampaignOutlinedIcon />;
      default:
        return <EditOutlinedIcon />;
    }
  };

  return (
    <>
      {componentTypes.map((componentType: InteractionProps) => (
        <ComponentBody
          key={componentType.InteractionName}
          active={checkActiveComponent(componentType)}
          onClick={() => handleSetActiveComponent(componentType)}
        >
          {GetIcon(componentType)}
          <ComponentName>{componentType.InteractionName}</ComponentName>
        </ComponentBody>
      ))}
    </>
  );
};

const ComponentBody = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#a0a0a0" : "aliceblue")};
  &:hover {
    background-color: #a0a0a0;
  }
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
`;

const ComponentName = styled.p``;
