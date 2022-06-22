import React from "react";
import * as S from "../styles/SentenceCardStyles";

export type sentenceCardProps = {
  name: string;
  text: string;
};

export const SentenceCard: React.FC<sentenceCardProps> = (props) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Name>{props.name}</S.Name>
        <S.Text>{props.text}</S.Text>
      </S.Container>
    </S.Wrapper>
  );
};
