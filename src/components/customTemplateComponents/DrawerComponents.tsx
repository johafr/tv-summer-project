import styled from "styled-components";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";

export const DrawerComponents = () => {
  return (
    <>
      <ComponentBody>
        <ChatBubbleOutlineOutlinedIcon />
        <p>Dialog</p>
      </ComponentBody>
      <ComponentBody>
        <PsychologyOutlinedIcon />
        <p>Thought</p>
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
`;
