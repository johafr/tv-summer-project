import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { activeStoryIndex } from "../atoms/stories";
import { ComponentScreen } from "../components/customTemplateComponents/ComponentScreen";
import { ElementsDrawer } from "../components/customTemplateComponents/ElementsDrawer";
import { CustomizeDrawer } from "../components/customTemplateComponents/CustomizeDrawer";

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
