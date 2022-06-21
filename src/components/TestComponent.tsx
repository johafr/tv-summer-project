import React from "react";
import { SentenceCard } from "./SentenceCard";

export const TestComponent: React.FC<{}> = (props) => {
  return (
    <>
      <SentenceCard
        name={"Torstein"}
        text={"Hva er det du trenger hjelp til i dag da, Cornelius?"}
      />
      <SentenceCard name={"Cornelius"} text={"Vet ikke ass, you tell me"} />
      <SentenceCard name={"Johannes"} text={"Halla!"} />
    </>
  );
};
