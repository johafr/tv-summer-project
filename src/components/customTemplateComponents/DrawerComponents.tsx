import styled from "styled-components";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { useRecoilState } from "recoil";
import {
  dialogComponentsState,
  ComponentsProps,
  updateActiveComponent,
} from "../../atoms/content";

export const DrawerComponents = () => {
  const [components] = useRecoilState(dialogComponentsState);

  const handleActiveComponent = (newIndex: number) => {
    updateActiveComponent(newIndex);
  };

  const GetIcon = (componentType: string) => {
    switch (componentType) {
      case "dialog":
        return <ChatBubbleOutlineOutlinedIcon />;
      case "thought":
        return <PsychologyOutlinedIcon />;
      case "shout":
        return <CampaignOutlinedIcon />;
      default:
        return <EditOutlinedIcon />;
    }
  };

  return (
    <>
      {components.map((component: ComponentsProps) => (
        <ComponentBody
          key={component.id}
          onClick={() => handleActiveComponent(component.id)}
        >
          {GetIcon(component.type)}
          <p>{component.type}</p>
        </ComponentBody>
      ))}
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
`;
