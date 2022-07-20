import styled from "styled-components";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeStoryComponentIndex,
  Premade,
  storyComponentsState,
} from "../../atoms/components";
import { activeComponent } from "../../selectors/components";

export const DrawerComponents = () => {
  const [componentTypes] = useRecoilState(storyComponentsState);
  const [, setActiveIndex] = useRecoilState(activeStoryComponentIndex);
  const { currentComponent } = useRecoilValue(activeComponent);

  const checkActiveComponent = (componentType: Premade) => {
    const active =
      currentComponent === null
        ? false
        : currentComponent === componentType
        ? true
        : false;
    return active;
  };

  const handleSetActiveComponent = (componentType: Premade) => {
    const newIndex =
      componentType === currentComponent
        ? -1
        : componentTypes.findIndex(
            (componentInList) =>
              componentType.componentName === componentInList.componentName
          );
    setActiveIndex(newIndex);
  };

  const GetIcon = (componentType: Premade) => {
    switch (componentType.componentName) {
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
      {componentTypes.map((componentType: Premade) => (
        <ComponentBody
          active={checkActiveComponent(componentType)}
          onClick={() => handleSetActiveComponent(componentType)}
        >
          {GetIcon(componentType)}
          <ComponentName>{componentType.componentName}</ComponentName>
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
