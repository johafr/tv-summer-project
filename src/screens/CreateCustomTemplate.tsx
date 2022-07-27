import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { activeStoryIndex } from "../atoms/stories";
import { RenderScreen } from "../components/customTemplateComponents/screenElements/RenderScreen";
import { StylesDrawer } from "../components/customTemplateComponents/screenElements/StylesDrawer";
import { TemplateDrawer } from "../components/customTemplateComponents/screenElements/TemplateDrawer";

export const CreateCustomTemplate = () => {
  const { id } = useParams();
  const [, setStoryIndex] = useRecoilState(activeStoryIndex);

  useEffect(() => {
    let tempId: string | undefined = "";
    tempId = id?.substring(1, id.length);
    tempId ? setStoryIndex(parseInt(tempId)) : setStoryIndex(-1);
  }, [id, setStoryIndex]);
  return (
    <>
      <TopLine />

      <ContentDiv>
        <StylesDrawer />
        <RenderScreen />
        <TemplateDrawer />
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
