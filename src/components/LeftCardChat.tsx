import React from "react";
import * as S from "../styles/components/LeftCardChat";

type LeftCardProps = {
  name: string;
  text: string;
};

export const LeftCardChat: React.FC<LeftCardProps> = ({ name, text }) => {
  return (
    <>
      <S.LeftCardName>{name}</S.LeftCardName>
      <S.LeftCard>
        <S.LeftCardText>{text}</S.LeftCardText>
      </S.LeftCard>
    </>
  );
};
