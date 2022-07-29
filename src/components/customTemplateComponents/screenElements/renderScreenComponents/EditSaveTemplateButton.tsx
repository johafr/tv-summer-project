import styled from "styled-components";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { handleSave } from "../../../../screens/CreateCustomTemplate";

export const EditSaveTemplateButton = () => {
  return (
    <SaveButtonDiv onClick={handleSave}>
      <SaveOutlinedIcon />
      <SaveButtonHeader>Save Template</SaveButtonHeader>
    </SaveButtonDiv>
  );
};

const SaveButtonDiv = styled.div`
  background-color: blue;
  padding-inline: 2rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  color: white;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  user-select: none;
`;

const SaveButtonHeader = styled.h3`
  margin: none;
  padding: none;
`;
