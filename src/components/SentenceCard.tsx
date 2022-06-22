import React from "react";
import { personsState } from "../atoms/persons";
import { Person } from "../atoms/sentences";
import * as S from "../styles/components/SentenceCardStyles";

export type sentenceCardProps = {
  name: string;
  //person: Person | undefined
  content: string;
};

export const SentenceCard: React.FC<sentenceCardProps> = ({
  name,
  content,
}) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Name>{name}</S.Name>
        <S.Text>{content}</S.Text>
      </S.Container>
    </S.Wrapper>
  );
};
