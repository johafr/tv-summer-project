import { atom } from "recoil";
import { sentenceCardProps } from "../components/SentenceCard";

export const displayScreen = atom<sentenceCardProps[][]>({
  key: "displayScreens",
  default: [
    [
      {
        name: "Johannes",
        text: "Dummy data",
      },
      {
        name: "Johannes",
        text: "Dummy data 2",
      },
    ],
    [
      {
        name: "Torstein",
        text: "Test overload",
      },
    ],
    [
      {
        name: "third page",
        text: "This is the third page",
      },
    ],
  ],
});

export const activeIndex = atom<number>({
  key: "activeIndex",
  default: 0,
});
