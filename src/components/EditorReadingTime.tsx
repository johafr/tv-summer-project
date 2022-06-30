import React from "react";
import { useRecoilValue } from "recoil";
import { numWordsInStory } from "../selectors/story";
import { WordHighlight } from "./WordHighlight";

// Component wrapper function // This component calculates reading time based on amount of words written via editor
export const EditorReadingTime: React.FC = () => {
  const numWords = useRecoilValue(numWordsInStory);

  let readingTime: number | string = 0;

  // Calculate est. reading time based on 250 words per minute.
  if (numWords < 100) {
    readingTime = "< 0";
  } else {
    readingTime = Math.ceil(numWords / 100);
  }

  // Component end-return
  return (
    <div>
      <p>Wordcount : {numWords}</p>
      <p>Estimated reading time {readingTime} minutes... </p>
      <WordHighlight />
    </div>
  );
};
