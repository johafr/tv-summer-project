import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeCommunicationCategory } from "../../../../selectors/template";

export const EditRenderScreenToolbar = () => {
  const activeCC = useRecoilValue(activeCommunicationCategory);

  return (
    <Toolbar>
      <TemplateHeader>
        {activeCC.currentCommunicationCategory
          ? "Change " + activeCC.currentCommunicationCategory.interactionName
          : "Template"}
      </TemplateHeader>
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

const TemplateHeader = styled.h3`
  justify-content: center;
  display: flex;
  position: absolute;
  left: 40%;
  width: 20%;
`;
