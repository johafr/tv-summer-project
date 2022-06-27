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
      <S.Container>
        {person ? <S.Name align={align}>{person.name}</S.Name> : <></>}
        <S.Text style={{ backgroundColor: person?.color }}>{content}</S.Text>
      </S.Container>
    </S.Wrapper>
  );
};
