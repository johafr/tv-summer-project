import { atom } from "recoil";
import { sentenceCardProps } from "../components/SentenceCard";

export const displayScreen = atom<sentenceCardProps[][]>({
  key: "displayScreens",
  default: [
    [
      {
        name: "Johannes",
        content: "Dummy data",
      },
      {
        name: "Johannes",
        content: "Dummy data 2",
      },
    ],
    [
      {
        name: "Torstein",
        content: "Test overload",
      },
    ],
    [
      {
        name: "third page",
        content: "This is the third page",
      },
    ],
  ],
});

export const activeIndex = atom<number>({
  key: "activeIndex",
  default: 0,
});
