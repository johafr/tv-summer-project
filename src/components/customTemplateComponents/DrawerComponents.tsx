import styled from "styled-components";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const DrawerComponents = () => {
  return (
    <>
      <ComponentBody>
        <ChatBubbleOutlineOutlinedIcon />
        <ComponentName>Dialog</ComponentName>
      </ComponentBody>
      <ComponentBody>
        <PsychologyOutlinedIcon />
        <ComponentName>Thought</ComponentName>
      </ComponentBody>
      <ComponentBody>
        <CampaignOutlinedIcon />
        <ComponentName>Shout</ComponentName>
      </ComponentBody>
      <ComponentBody>
        <EditOutlinedIcon />
        <ComponentName>Custom</ComponentName>
      </ComponentBody>
    </>
  );
};

const ComponentBody = styled.div`
  background-color: aliceblue;
  &:hover {
    background-color: blue;
  }
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
`;

const ComponentName = styled.p``;
