import React from "react";
import { useRecoilValue } from "recoil";
import { MessageProps } from "../../atoms/stories";
import {
  activeFormat,
  getAllInteractions,
  getAllStyles,
} from "../../selectors/interactionComponents";
import * as S from "../../styles/components/SentenceCardStyles";
import { SpanCardChat } from "../customTemplateComponents/formats/SpanCardChat";
import { SpeechBubbleChat } from "../customTemplateComponents/formats/SpeechBubbleChat";
import { ThoughtBubbleChat } from "../customTemplateComponents/formats/ThoughtBubbleChat";

export const MessageCard: React.FC<MessageProps> = ({
  person,
  align,
  content,
  interactionType,
}) => {
  const activeStyles = useRecoilValue(getAllStyles);
  const { selectedStyle } = useRecoilValue(activeFormat);

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
        />
      );
    case "NARRATIVE": // Er bare spancard, evt replace med noe annen styling senere
      return (
        <SpanCardChat 
          name={person?.name} 
          text={content} 
        />
      );
    default:
      return (
        <SpanCardChat 
          name={person?.name} 
          text={content} 
        />
      );
  }
};
