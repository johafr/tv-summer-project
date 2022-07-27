import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  templates,
  Template,
  activeTemplateIndex,
  activeCommunicationCategoryIndex,
} from "../../../atoms/template";
import {
  activeCommunicationCategory,
  getActiveTemplate,
} from "../../../selectors/template";
import { drawerWidth } from "./StylesDrawer";

export const TemplateDrawer = () => {
  const currentTemplates = useRecoilValue(templates);
  const currentTemplate = useRecoilValue(getActiveTemplate);
  const { currentCommunicationCategory } = useRecoilValue(
    activeCommunicationCategory
  );
  const [, setActiveTemplateIndex] = useRecoilState(activeTemplateIndex);
  const [, setActiveCCIndex] = useRecoilState(activeCommunicationCategoryIndex);

  const handleChangeActiveTemplate = (template: Template) => {
    const newIndex = currentTemplates.findIndex(
      (templateInList: Template) => template === templateInList
    );
    setActiveTemplateIndex(newIndex);
    setActiveCCIndex(-1);
  };

  return (
    <Drawer>
      <CustomizeHeader>Templates</CustomizeHeader>
      <TemplateHeader>Premade</TemplateHeader>
      {currentTemplates.map((template) => (
        <Format onClick={() => handleChangeActiveTemplate(template)}>
          <FormatHeader
            active={
              currentTemplate === template && !currentCommunicationCategory
            }
          >
            {template.templateName}
          </FormatHeader>
        </Format>
      ))}
      <TemplateHeader>Custom</TemplateHeader>
    </Drawer>
  );
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  box-shadow: var(--right-shadow-elevation-low);
`;
const TemplateHeader = styled.h3`
  justify-content: center;
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin: 0;
`;

const Format = styled.div``;

const FormatHeader = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#d3d3d3" : "white")};
  &:hover {
    background-color: #d3d3d3;
  }
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  height: 2.5rem;
`;

const CustomizeHeader = styled.h2`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  min-width: 20%;
  height: 3rem;
`;
