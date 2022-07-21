import React from "react";
import { MessageProps } from "../atoms/stories";
import * as S from "../styles/components/SentenceCardStyles";

export const MessageCard: React.FC<MessageProps> = ({
  person,
  align,
  content,
  interactionType,
}) => {
  return (
    <S.Wrapper align={align}>
      {person ? (
        <S.DialogContainer>
          <S.Name align={align}>{person.name}</S.Name>
          <S.Dialog>{content}</S.Dialog>
        </S.DialogContainer>
      ) : (
        <S.TextContainer>
          <S.Text>{content}</S.Text>
        </S.TextContainer>
      )}
    </S.Wrapper>
  );
};
