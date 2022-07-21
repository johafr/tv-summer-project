import React from "react";
import { MessageProps } from "../atoms/stories";
import * as S from "../styles/components/SentenceCardStyles";
import { SpanCardChat } from "./customTemplateComponents/componentTypes/SpanCardChat";
import { SpeechBubbleChat } from "./customTemplateComponents/componentTypes/SpeechBubbleChat";
import { ThoughtBubbleChat } from "./customTemplateComponents/componentTypes/ThoughtBubbleChat";

export const MessageCard: React.FC<MessageProps> = ({
  person,
  align,
  content,
  interactionType,
}) => {
  switch (interactionType) {
    case "DIALOG":
      return (
        <SpeechBubbleChat
          name={person?.name}
          content={content}
          variant={align}
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
    default:
      return <SpanCardChat name={person?.name} text={content} />;
  }

  // return (

  //   <S.Wrapper align={align}>
  //     {person ? (
  //       <S.DialogContainer>
  //         <S.Name align={align}>{person.name}</S.Name>
  //         <S.Dialog>{content}</S.Dialog>
  //       </S.DialogContainer>
  //     ) : (
  //       <S.TextContainer>
  //         <S.Text>{content}</S.Text>
  //       </S.TextContainer>
  //     )}
  //   </S.Wrapper>
  // );
};
