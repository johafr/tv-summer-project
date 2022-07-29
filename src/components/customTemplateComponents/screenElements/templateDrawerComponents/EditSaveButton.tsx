import styled from "styled-components";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { useRecoilState } from "recoil";
import { editState } from "../../../../screens/CreateCustomTemplate";

export const EditSaveButton = () => {
  const [, setEdit] = useRecoilState(editState);
  const tempSave = () => {
    setEdit(false);
  };

  return (
    <SaveButtonDiv onClick={tempSave}>
      <SaveOutlinedIcon />
      <SaveButtonHeader>Save</SaveButtonHeader>
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
