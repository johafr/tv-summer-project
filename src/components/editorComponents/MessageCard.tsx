import React from "react";
import { useRecoilValue } from "recoil";
import { MessageProps } from "../../atoms/stories";
import { getAllStyles } from "../../selectors/interactionComponents";
import * as S from "../../styles/components/SentenceCardStyles";
import { SpanCardChat } from "../customTemplateComponents/formats/SpanCardChat";
import { SpeechBubbleChat } from "../customTemplateComponents/formats/dialogFormats/SpeechBubbleChat";
import { ThoughtBubbleChat } from "../customTemplateComponents/formats/ThoughtBubbleChat";

export const MessageCard: React.FC<MessageProps> = ({
  person,
  align,
  content,
  interactionType,
}) => {
  const activeStyles = useRecoilValue(getAllStyles);

  switch (interactionType) {
    case "DIALOG":
      return (
        <SpeechBubbleChat
          name={person?.name}
          content={content}
          variant={align}
          inputVariables={activeStyles.currentDialogStyle}
        />
      );
    case "THOUGHT":
      return (
        <ThoughtBubbleChat
          name={person?.name}
          content={content}
          variant={align}
          inputVariables={activeStyles.currentThoughtStyle}
        />
      );
    default:
      return <SpanCardChat name={person?.name} text={content} />;
  }
};
