import { atom } from "recoil";
import { Person } from "./persons";

export type messageProps = {
  id: number;
  person: Person | null;
  content: string;
};

const dummyData = [
  [
    {
      id: 0,
      person: {
        id: 0,
        name: "Markus",
        color: "rgb(132, 176, 214",
      },
      content: "This is dummy data",
    },
    {
      id: 1,
      person: {
        id: 1,
        name: "Lisa",
        color: "rgb(10, 214, 214",
      },
      content: "This is the second line",
    },
  ],
  [
    {
      id: 0,
      person: null,
      content: "This is a message without an assigned person",
    },
  ],
];

export const StoryPages = atom<messageProps[][]>({
  key: "displayScreens",
  default: dummyData,
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

export const createNewPage = (currentList: messageProps[][]) => {
  const newList = [...currentList, []];
  return newList;
};

export const deletePage = (
  currentList: messageProps[][],
  pageToBeDeleted: messageProps[]
) => {
  return currentList.length === 1
    ? [[]]
    : currentList.filter((page) => page !== pageToBeDeleted);
};
