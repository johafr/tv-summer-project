import { atom } from "recoil";
import { Person } from "./persons";

export type messageProps = {
  id: number;
  person?: Person | undefined;
  content: string;
};

export const StoryPages = atom<messageProps[][]>({
  key: "displayScreens",
  default: [
    [
      {
        id: 0,
        person: {
          id: 0,
          name: "Johannes",
          isSelected: false,
        },
        content: "Dummy data",
      },
      {
        id: 1,
        person: {
          id: 0,
          name: "Johannes",
          isSelected: false,
        },
        content: "Dummy data 2",
      },
    ],
    [
      {
        id: 0,
        person: {
          id: 1,
          name: "Torstein",
          isSelected: false,
        },
        content: "Test overload",
      },
    ],
    [
      {
        id: 0,
        content: "This is the third page",
      },
    ],
  ],
});

export const updatePage = (
  currentList: messageProps[][],
  newPage: messageProps[],
  index: number
) => {
  const newList = [
    ...currentList.slice(0, index),
    newPage,
    ...currentList.slice(index + 1),
  ];
  return newList;
};

export const activeIndex = atom<number>({
  key: "activeIndex",
  default: 0,
});