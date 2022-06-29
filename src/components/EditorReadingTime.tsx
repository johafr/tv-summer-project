import React from "react";
import { useRecoilState } from "recoil";
import { messageProps, StoryPages } from "../atoms/StoryPages";
import { WordHighlight } from "./WordHighlight";

// Component wrapper function // This component calculates reading time based on amount of words written via editor
export const EditorReadingTime: React.FC = () => {
  const [storyPages] = useRecoilState(StoryPages);

  let wordCount: number = 0;
  let readingTime: number | string = 0;

  // Split and count all words in sentences
  storyPages.map((page: messageProps[]) => {
    page.map((message: messageProps) => {
      const words = message.content.split(" ");
      wordCount += words.length;
    });
  });

  // Calculate est. reading time based on 250 words per minute.
  if (wordCount < 100) {
    readingTime = "< 0";
  } else {
    readingTime = Math.ceil(wordCount / 100);
  }

  // Component end-return
  return (
    <div>
      <p>Wordcount : {wordCount}</p>
      <p>Estimated reading time {readingTime} minutes... </p>
      <WordHighlight />
    </div>
  );
};
