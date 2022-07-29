import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  activeCommunicationCategoryIndex,
  CommunicationCategory,
} from "../../../../atoms/template";
import { cachedCustomTemplateState } from "../../../../screens/CreateCustomTemplate";
import {
  activeCommunicationCategory,
  communicationCategoriesList,
  templateCommunications,
} from "../../../../selectors/template";
import { GetIcon } from "../stylesDrawerComponents/DrawerCommunicationCustomizationList";

export const EditPremadeTemplatesList: React.FC = () => {
  const customTemplate = useRecoilValue(cachedCustomTemplateState);
  const templateFormatList = useRecoilValue(templateCommunications);
  const activeCC = useRecoilValue(activeCommunicationCategory);
  const CCList = useRecoilValue(communicationCategoriesList);
  const [activeCCIndex, setActiveCCIndex] = useRecoilState(
    activeCommunicationCategoryIndex
  );
  const handleSetActiveCommunicationCategory = (CCId: number) => {
    activeCCIndex !== CCId ? setActiveCCIndex(CCId) : setActiveCCIndex(-1);
  };

  return (
    <>
      {customTemplate.indexes.map((entry, currentMapIndex) => (
        <TemplateEntry
          active={
            activeCC.currentCommunicationCategory?.interactionName ===
            entry.communicationName
          }
          onClick={() => handleSetActiveCommunicationCategory(currentMapIndex)}
        >
          <CommunicationHeader>
            {GetIcon(
              CCList.find(
                (Com: CommunicationCategory) =>
                  Com.interactionName === entry.communicationName
              )!
            )}
            {entry.communicationName}
          </CommunicationHeader>
          <FormatVersionDiv>
            {templateFormatList[currentMapIndex]}
          </FormatVersionDiv>
        </TemplateEntry>
      ))}
    </>
  );
};

const TemplateEntry = styled.div<{ active: boolean }>`
  user-select: none;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#d3d3d3" : "white")};
  &:hover {
    background-color: #d3d3d3;
  }
`;

const CommunicationHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  height: 2.5rem;
  font-weight: bold;
`;

const FormatVersionDiv = styled.div`
  justify-content: center;
  display: flex;
`;
