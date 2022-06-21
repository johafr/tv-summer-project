import React from "react";
import "../styles/SentenceCard.css";

export type sentenceCardProps = {
  name: string;
  text: string;
};

export const SentenceCard: React.FC<sentenceCardProps> = (props) => {
  return (
    <div className={"sentence-card-wrapper"}>
      <div className="sentence-card-container">
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
