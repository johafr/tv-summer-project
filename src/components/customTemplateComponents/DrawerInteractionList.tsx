import styled from "styled-components";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeInteractionIndex,
  CommunicationCateogry,
  activeTemplateState,
} from "../../atoms/template";
import { activeCommunicationCategory } from "../../selectors/template";

export const DrawerInteractionList = () => {
  const [interactionList] = useRecoilState(activeTemplateState);
  const [, setActiveIndex] = useRecoilState(activeInteractionIndex);
  const { currentInteraction } = useRecoilValue(activeCommunicationCategory);

  const checkActiveComponent = (interaction: CommunicationCateogry) => {
    const active =
      currentInteraction === null
        ? false
        : currentInteraction === interaction
        ? true
        : false;
    return active;
  };

  const handleSetActiveInteraction = (interaction: CommunicationCateogry) => {
    const newIndex =
      interaction === currentInteraction
        ? -1
        : interactionList.communicationCategories.findIndex(
            (interactionInList) =>
              interaction.interactionName === interactionInList.interactionName
          );
    setActiveIndex(newIndex);
  };

  const GetIcon = (interaction: CommunicationCateogry) => {
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
      {interactionList.communicationCategories.map(
        (interaction: CommunicationCateogry) => (
          <InteractionBody
            key={interaction.interactionName}
            active={checkActiveComponent(interaction)}
            onClick={() => handleSetActiveInteraction(interaction)}
          >
            {GetIcon(interaction)}
            <InteractionName>{interaction.interactionName}</InteractionName>
          </InteractionBody>
        )
      )}
    </>
  );
};

const InteractionBody = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "aliceblue" : "white")};
  &:hover {
    background-color: #d3d3d3;
  }
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  margin: 0 auto;
`;

const InteractionName = styled.p``;
