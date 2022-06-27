import React from "react";
import { Person } from "../atoms/persons";
import * as S from "../styles/components/SentenceCardStyles";

type sentenceCardProps = {
  person?: Person;
  align: string;
  content: string;
};

export const SentenceCard: React.FC<sentenceCardProps> = ({
  person,
  align,
  content,
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
