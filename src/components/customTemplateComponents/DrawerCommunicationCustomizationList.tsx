import styled from "styled-components";

import FormatAlignCenterOutlinedIcon from "@mui/icons-material/FormatAlignCenterOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeCommunicationCategoryIndex,
  CommunicationCategory,
  componentsState,
} from "../../atoms/template";
import { activeCommunicationCategory } from "../../selectors/template";

export const DrawerCommunicationCustomizationList = () => {
  const [interactionList] = useRecoilState(componentsState);
  const [, setActiveIndex] = useRecoilState(activeCommunicationCategoryIndex);
  const { currentCommunicationCategory } = useRecoilValue(
    activeCommunicationCategory
  );

  const checkActiveComponent = (interaction: CommunicationCategory) => {
    const active =
      currentCommunicationCategory === null
        ? false
        : currentCommunicationCategory === interaction
        ? true
        : false;
    return active;
  };

  const handleSetActiveInteraction = (interaction: CommunicationCategory) => {
    const newIndex =
      interaction === currentCommunicationCategory
        ? -1
        : interactionList.communicationCategories.findIndex(
            (interactionInList) =>
              interaction.interactionName === interactionInList.interactionName
          );
    setActiveIndex(newIndex);
  };

  const GetIcon = (interaction: CommunicationCategory) => {
    switch (interaction.interactionName) {
      case "NARRATIVE":
        return <FormatAlignCenterOutlinedIcon></FormatAlignCenterOutlinedIcon>;
      case "TEXTMESSAGE":
        return <MessageOutlinedIcon></MessageOutlinedIcon>;
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
        (interaction: CommunicationCategory) => (
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
