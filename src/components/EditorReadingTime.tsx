import React from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { activeIndex, messageProps, StoryPages } from "../atoms/StoryPages";

// Component wrapper function // This component calculates reading time based on amount of words written via editor
export const EditorReadingTime: React.FC = () => {
  const [storyPages] = useRecoilState(StoryPages);
  const [pageNum] = useRecoilState(activeIndex);

  let wordCount: number = 0;
  let readingTime: number | string = 0;
  let pagenumber = pageNum + 1;

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
      <p> Page number: {pagenumber}</p>
    </div>
  );
};
