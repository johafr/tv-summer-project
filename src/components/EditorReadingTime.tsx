import React from "react";
import { useRecoilValue } from "recoil";
import { numWordsInStory } from "../selectors/story";
import styled from "styled-components";

import { WordHighlight } from "./WordHighlight";

// Component wrapper function // This component calculates reading time based on amount of words written via editor
export const EditorReadingTime: React.FC = () => {
  const numWords = useRecoilValue(numWordsInStory);

  let readingTime: number | string = 0;
  // Calculate est. reading time based on 250 words per minute.
  if (numWords < 250) {
    readingTime = "= 0";
  } else {
    readingTime = Math.ceil(numWords / 250);
  }

  // Component end-return
  return (
    <CountDiv>
      <div className="wordcount">
        <p>{numWords} words total</p>
        <p>{readingTime} minutes estimated time </p>
        <WordHighlight />
      </div>
    </CountDiv>
  );
};

export const CountDiv = styled.div`
  text-align:left;
  padding-top:1px;
  padding-bottom:1px;
  height:8.2rem;
  background:rgb(255, 255, 255);
  min-width:25rem;
  max-width:52rem;
  border-radius:4px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.05);
  margin-top:10px;
  margin-bottom:10px;

  & p {
    margin-left:15px;
  }
`;



