import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { activeStoryIndex } from "../atoms/stories";
import { RenderScreen } from "../components/customTemplateComponents/screenElements/RenderScreen";
import { ElementsDrawer } from "../components/customTemplateComponents/screenElements/ElementsDrawer";
import { CustomizationDrawer } from "../components/customTemplateComponents/screenElements/CustomizationDrawer";
import { activeInteraction } from "../selectors/interactionComponents";

export const CreateCustomTemplate = () => {
  const { id } = useParams();
  const [, setStoryIndex] = useRecoilState(activeStoryIndex);
  const { currentInteraction } = useRecoilValue(activeInteraction);

  useEffect(() => {
    let tempId: string | undefined = "";
    tempId = id?.substring(1, id.length);
    tempId ? setStoryIndex(parseInt(tempId)) : setStoryIndex(-1);
  }, [id, setStoryIndex]);
  return (
    <>
      <TopLine />
      <Toolbar>
        <ElementHeader>Elements</ElementHeader>
        <Screen interactionIsActive={currentInteraction !== null}>
          <ButtonSpan>Preview</ButtonSpan>
          <ButtonSpan>Save</ButtonSpan>
        </Screen>
        {currentInteraction ? (
          <CustomizeHeader>Customize</CustomizeHeader>
        ) : (
          <></>
        )}
      </Toolbar>
      <ContentDiv>
        <ElementsDrawer />
        <RenderScreen />
        {currentInteraction ? <CustomizationDrawer /> : <></>}
      </ContentDiv>
    </>
  );
};

const TopLine = styled.div`
  margin-top: 1rem;
  border-top: 1px solid black;
`;

const ContentDiv = styled.div`
  display: inline-flex;
  width: 100%;
  height: 84.5vh;
`;

const Toolbar = styled.div`
  height: 3rem;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

const ButtonSpan = styled.span`
  margin-left: 1rem;
`;

const ElementHeader = styled.h2`
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  margin: 0;
  min-width: 20%;
  height: 100%;
`;

const Screen = styled.div<{ interactionIsActive: boolean }>`
  width: ${(props) => (props.interactionIsActive ? 60 : 80)}%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const CustomizeHeader = styled.h2`
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  margin: 0;
  min-width: 20%;
  height: 100%;
`;
