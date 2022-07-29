import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  cachedCustomTemplateState,
  editState,
} from "../../../../screens/CreateCustomTemplate";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import {
  activeCommunicationCategory,
  getActiveTemplate,
} from "../../../../selectors/template";
import { activeCommunicationCategoryIndex } from "../../../../atoms/template";

export const RenderScreenToolbar = () => {
  const { currentCommunicationCategory } = useRecoilValue(
    activeCommunicationCategory
  );
  const [, setEdit] = useRecoilState(editState);
  const currentTemplate = useRecoilValue(getActiveTemplate);
  const [cachedCustomTemplate, setCachedCustomTemplate] = useRecoilState(
    cachedCustomTemplateState
  );
  const [, setActiveCommunicationCategoryIndex] = useRecoilState(
    activeCommunicationCategoryIndex
  );

  const handleEnterEdit = () => {
    setCachedCustomTemplate(currentTemplate);
    setEdit(true);
  };

  const handleReturnToTemplateOverview = () => {
    setActiveCommunicationCategoryIndex(-1);
  };

  return (
    <Toolbar>
      {currentCommunicationCategory ? (
        <ButtonSpan onClick={handleReturnToTemplateOverview}>
          <ArrowBackOutlinedIcon sx={{ marginRight: 1 }} />
          Interactions
        </ButtonSpan>
      ) : (
        <>
          <span />
          {currentTemplate.custom && (
            <EditSpan>
              <>Edit Template</>
              <IconButton
                onClick={handleEnterEdit}
                sx={{ marginLeft: "0.3rem" }}
              >
                <EditOutlinedIcon sx={{ color: "#000000" }} />
              </IconButton>
            </EditSpan>
          )}
        </>
      )}

      {currentCommunicationCategory ? (
        <TemplateHeader>
          {currentCommunicationCategory.interactionName}
        </TemplateHeader>
      ) : (
        <TemplateHeader>{currentTemplate.templateName}</TemplateHeader>
      )}
    </Toolbar>
  );
};

const Toolbar = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--middle-shadow-elevation-low);
`;

const ButtonSpan = styled.span`
  margin-right: 1rem;
  margin-left: 1rem;
  user-select: none;
  align-items: center;
  display: flex;
  padding: 0.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  :hover {
    box-shadow: var(--renderBar-shadow-elevation);
    background-color: #eeeeee;
  }
`;

const EditSpan = styled.span`
  justify-content: right;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const TemplateHeader = styled.h3`
  justify-content: center;
  display: flex;
  position: absolute;
  left: 40%;
  width: 20%;
`;
