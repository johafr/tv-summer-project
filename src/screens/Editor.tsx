import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { activeStoryIndex } from "../atoms/stories";
import { EditorComponent } from "../components/editorComponents/EditorComponent";
import { MobileView } from "../components/editorComponents/MobileView";

export const Editor: React.FC = () => {
  //maps storyinformation to editor using story id.
  const { id } = useParams();
  const [, setStoryIndex] = useRecoilState(activeStoryIndex);

  useEffect(() => {
    let tempId: string | undefined = "";
    tempId = id?.substring(1, id.length);
    tempId ? setStoryIndex(parseInt(tempId)) : setStoryIndex(-1);
  }, []);

  return (
    <div>
      <EditorComponent />
    </div>
  );
};
