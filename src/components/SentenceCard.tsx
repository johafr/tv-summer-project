import React from "react";

type Props = {
  name: string;
  text: string;
};

export const SentenceCard: React.FC<Props> = ({ name, text }) => {
  return (
    <div className="sentence-card-container">
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};
