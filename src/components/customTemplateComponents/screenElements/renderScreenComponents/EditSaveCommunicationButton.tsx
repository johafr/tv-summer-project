import styled from "styled-components";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { activeCommunicationCategoryIndex } from "../../../../atoms/template";
import { useResetRecoilState } from "recoil";

export const EditSaveCommunicationButton = () => {
  const reset = useResetRecoilState(activeCommunicationCategoryIndex);
  const handleSaveInteraction = () => {
    reset();
  };

  return (
    <SaveButtonDiv onClick={handleSaveInteraction}>
      <SaveOutlinedIcon />
      <SaveButtonHeader>Save format</SaveButtonHeader>
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
