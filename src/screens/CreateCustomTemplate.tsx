import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import { activeStoryIndex } from "../atoms/stories";
import { RenderScreen } from "../components/customTemplateComponents/screenElements/RenderScreen";
import { TemplateDrawer } from "../components/customTemplateComponents/screenElements/TemplateDrawer";
import { StylesDrawer } from "../components/customTemplateComponents/screenElements/StylesDrawer";
import { Template } from "../atoms/template";
import { EditTemplateDrawer } from "../components/customTemplateComponents/screenElements/EditTemplateDrawer";
import { EditRenderScreen } from "../components/customTemplateComponents/screenElements/EditRenderScreen";
import { EditStylesDrawer } from "../components/customTemplateComponents/screenElements/EditStylesDrawer";

export const editState = atom({
  key: "editState",
  default: false,
});

export const cachedCustomTemplateState = atom<Template>({
  key: "cachedCustomTemplate",
  default: { id: -1, templateName: "cached", custom: true, indexes: [] },
});

export const CreateCustomTemplate = () => {
  const { id } = useParams();
  const [, setStoryIndex] = useRecoilState(activeStoryIndex);
  const [edit] = useRecoilState(editState);

  useEffect(() => {
    let tempId: string | undefined = "";
    tempId = id?.substring(1, id.length);
    tempId ? setStoryIndex(parseInt(tempId)) : setStoryIndex(-1);
  }, [id, setStoryIndex]);

  return (
    <>
      {edit ? (
        <ContentDiv>
          <EditTemplateDrawer />
          <EditRenderScreen />
          <EditStylesDrawer />
        </ContentDiv>
      ) : (
        <ContentDiv>
          <TemplateDrawer />
          <RenderScreen />
          <StylesDrawer />
        </ContentDiv>
      )}
    </>
  );
};

const ContentDiv = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
`;
