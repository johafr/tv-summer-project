import React from "react";
import * as S from "../../../styles/components/LeftCardChat";

type LeftCardProps = {
  name?: string;
  text: string;
  variant? : string;
};

export const LeftCardChat: React.FC<LeftCardProps> = ({ name, text }) => {


  return (
    <>
      
      <S.LeftCard>
        {/* <S.LeftCardName>{name}</S.LeftCardName> */}
        <S.LeftCardText>{text}</S.LeftCardText>
      </S.LeftCard>
    </>
  );
};
