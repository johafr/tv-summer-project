import React from "react";
import { Person } from "../atoms/persons";
import * as S from "../styles/components/SentenceCardStyles";

type sentenceCardProps = {
  person?: Person | undefined;
  content: string;
};

export const SentenceCard: React.FC<sentenceCardProps> = ({
  person,
  content,
}) => {
  return (
    <S.Wrapper>
      <S.Container>
        {person ? <S.Name>{person.name}</S.Name> : <></>}
        <S.Text>{content}</S.Text>
      </S.Container>
    </S.Wrapper>
  );
};
