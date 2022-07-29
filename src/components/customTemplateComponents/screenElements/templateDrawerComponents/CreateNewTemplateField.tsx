import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  activeCommunicationCategoryIndex,
  Template,
  templates,
} from "../../../../atoms/template";
import {
  cachedCustomTemplateState,
  editState,
} from "../../../../screens/CreateCustomTemplate";

export const CreateNewTemplateField = () => {
  const [, setEdit] = useRecoilState(editState);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [, setCachedCustomTemplate] = useRecoilState(cachedCustomTemplateState);
  const allTemplates = useRecoilValue(templates);
  const [, setActiveCCIndex] = useRecoilState(activeCommunicationCategoryIndex);

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newTemplate: Template = {
      id: allTemplates.length,
      templateName: newTemplateName,
      custom: true,
      indexes: [
        { communicationName: "NARRATIVE", index: 0 },
        { communicationName: "TEXTMESSAGE", index: 0 },
        { communicationName: "DIALOG", index: 0 },
        { communicationName: "THOUGHT", index: 0 },
        { communicationName: "SHOUT", index: 0 },
      ],
    };
    setCachedCustomTemplate(newTemplate);
    setNewTemplateName("");
    e.currentTarget.blur();
    setActiveCCIndex(-1);
    setEdit(true);
  };

  return (
    <Body>
      <ButtonBody>
        <CreateNewTemplateInput
          type="text"
          value={newTemplateName}
          placeholder={"Create new Template..."}
          onChange={(e) => setNewTemplateName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          onBlur={() => setNewTemplateName("")}
        />
      </ButtonBody>
    </Body>
  );
};

const CreateNewTemplateInput = styled.input`
  ::placeholder {
    color: white;
    font-weight: bold;
    text-align: center;
  }
  :focus {
    outline: none;
    color: white;
    ::placeholder {
      color: transparent;
    }
  }
  border: none;
  background-color: blue;
  height: 70%;
  color: white;
`;

const ButtonBody = styled.div`
  background-color: blue;
  height: 3rem;
  width: 80%;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Body = styled.div`
  justify-content: center;
  display: flex;
`;
