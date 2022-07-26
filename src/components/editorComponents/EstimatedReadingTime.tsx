import React from "react";
import { useRecoilValue } from "recoil";
import { activeStoryStats } from "../../selectors/stories";
import styled from "styled-components";

// Component wrapper function // This component calculates reading time based on amount of words written via editor
export const EstimatedReadingTime: React.FC = () => {
  const { numWords } = useRecoilValue(activeStoryStats);

  let readingTime: number | string = 0;
  // Calculate est. reading time based on 250 words per minute.
  if (numWords < 250) {
    readingTime = "0";
  } else {
    readingTime = Math.ceil(numWords / 250);
  }

  // Component end-return
  return (
    <CountDiv>
      <div className="wordcount">
        <p>Total word count: {numWords}</p>
        <p>Estimated reading time (in minutes): {readingTime} </p>
      </div>
    </CountDiv>
  );
};

export const CountDiv = styled.div`
  padding-left: 2rem;
  & input {
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
`;
