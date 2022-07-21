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
} from "../../atoms/interactionComponents";
import { activeInteraction } from "../../selectors/interactionComponents";

export const DrawerInteractionList = () => {
  const [interactionList] = useRecoilState(interactionListState);
  const [, setActiveIndex] = useRecoilState(activeInteractionIndex);
  const { currentInteraction } = useRecoilValue(activeInteraction);

  const checkActiveComponent = (interaction: InteractionProps) => {
    const active =
      currentInteraction === null
        ? false
        : currentInteraction === interaction
        ? true
        : false;
    return active;
  };

  const handleSetActiveInteraction = (interaction: InteractionProps) => {
    const newIndex =
      interaction === currentInteraction
        ? -1
        : interactionList.findIndex(
            (interactionInList) =>
              interaction.interactionName === interactionInList.interactionName
          );
    setActiveIndex(newIndex);
  };

  const GetIcon = (interaction: InteractionProps) => {
    switch (interaction.interactionName) {
      case "DIALOG":
        return <ChatBubbleOutlineOutlinedIcon />;
      case "THOUGHT":
        return <PsychologyOutlinedIcon />;
      case "SHOUT":
        return <CampaignOutlinedIcon />;
      default:
        return <EditOutlinedIcon />;
    }
  };

  return (
    <>
      {interactionList.map((interaction: InteractionProps) => (
        <InteractionBody
          key={interaction.interactionName}
          active={checkActiveComponent(interaction)}
          onClick={() => handleSetActiveInteraction(interaction)}
        >
          {GetIcon(interaction)}
          <InteractionName>{interaction.interactionName}</InteractionName>
        </InteractionBody>
      ))}
    </>
  );
};

const InteractionBody = styled.div<{ active: boolean }>`
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

const InteractionName = styled.p``;
