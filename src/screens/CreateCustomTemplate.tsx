import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { activeStoryIndex } from "../atoms/stories";
import { ComponentScreen } from "../components/customTemplateComponents/screenElements/ComponentScreen";
import { ElementsDrawer } from "../components/customTemplateComponents/screenElements/ElementsDrawer";
import { CustomizeDrawer } from "../components/customTemplateComponents/screenElements/CustomizeDrawer";

export const CreateCustomTemplate = () => {
  const { id } = useParams();
  const [, setStoryIndex] = useRecoilState(activeStoryIndex);

  useEffect(() => {
    let tempId: string | undefined = "";
    tempId = id?.substring(1, id.length);
    tempId ? setStoryIndex(parseInt(tempId)) : setStoryIndex(-1);
  }, []);
  return (
    <>
      <TopLine />
      <Toolbar>
        <ElementHeader>Elements</ElementHeader>
        <Screen>
          <ButtonSpan>Preview</ButtonSpan>
          <ButtonSpan>Save</ButtonSpan>
        </Screen>
        <CustomizeHeader>Customize</CustomizeHeader>
      </Toolbar>
      <ContentDiv>
        <ElementsDrawer />
        <ComponentScreen />
        <CustomizeDrawer />
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
  height: 90.3vh;
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
  background-color: blueviolet;
  min-width: 20%;
  height: 100%;
`;

const Screen = styled.div`
  background-color: aliceblue;
  width: 60%;
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
  background-color: blueviolet;
  min-width: 20%;
  height: 100%;
`;
