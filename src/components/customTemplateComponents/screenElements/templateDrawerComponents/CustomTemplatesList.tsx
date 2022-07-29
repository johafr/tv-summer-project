import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  activeCommunicationCategoryIndex,
  activeTemplateIndex,
  Template,
  templates,
} from "../../../../atoms/template";
import {
  activeCommunicationCategory,
  getActiveTemplate,
  templatesCategory,
} from "../../../../selectors/template";

export const CustomTemplatesList: React.FC = () => {
  const { customTemplates } = useRecoilValue(templatesCategory);

  const allTemplates = useRecoilValue(templates);
  const currentTemplate = useRecoilValue(getActiveTemplate);
  const { currentCommunicationCategory } = useRecoilValue(
    activeCommunicationCategory
  );
  const [, setActiveTemplateIndex] = useRecoilState(activeTemplateIndex);
  const [, setActiveCCIndex] = useRecoilState(activeCommunicationCategoryIndex);

  const handleChangeActiveTemplate = (template: Template) => {
    const newIndex = allTemplates.findIndex(
      (templateInList: Template) => template === templateInList
    );
    setActiveTemplateIndex(newIndex);
    setActiveCCIndex(-1);
  };

  return (
    <>
      {customTemplates.length !== 0 && <TemplateHeader>Custom</TemplateHeader>}
      {customTemplates.map((template) => (
        <Format
          onClick={() => handleChangeActiveTemplate(template)}
          key={template.templateName}
        >
          <FormatHeader
            active={
              currentTemplate === template && !currentCommunicationCategory
            }
          >
            {template.templateName}
          </FormatHeader>
        </Format>
      ))}
    </>
  );
};

const TemplateHeader = styled.h3`
  justify-content: center;
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin: 0;
`;

const Format = styled.div`
  user-select: none;
`;

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
