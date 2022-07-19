import styled from "styled-components";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useRecoilState } from "recoil";
import { activeComponent as aC } from "../../atoms/components";

export const DrawerComponents = () => {
  const [, setActiveComponent] = useRecoilState(aC);
  const handleSetActiveComponent = (clickedComponent: string) => {
    setActiveComponent(clickedComponent);
  };
  return (
    <>
      <ComponentBody onClick={() => handleSetActiveComponent("dialog")}>
        <ChatBubbleOutlineOutlinedIcon />
        <ComponentName>Dialog</ComponentName>
      </ComponentBody>
      <ComponentBody onClick={() => handleSetActiveComponent("thought")}>
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
