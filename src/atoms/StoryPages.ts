import { atom } from "recoil";
import { Person } from "./persons";

export type messageProps = {
  id: number;
  person: Person | null;
  content: string;
};

export const StoryPages = atom<messageProps[][]>({
  key: "displayScreens",
  default: [[]],
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

export const deleteMessage = (messageIndex : number, pagenumber : number, messages: messageProps[], stories: messageProps[][]) => {
  // Remove the message (object) from the sublist (page[])
  const updatedMessagelist = [
    ...messages.slice(0, messageIndex),
    ...messages.slice(messageIndex + 1)
  ]
  // Replace the sublist (page[]) in the parent list (pages[][])
  const updatedPagesList = [
    ...stories.slice(0,pagenumber),
    updatedMessagelist,
    ...stories.slice(pagenumber + 1)
  ]
  return updatedPagesList;
}

export const activeIndex = atom<number>({
  key: "activeIndex",
  default: 0,
});

export const createNewPage = (currentList: messageProps[][]) => {
  const newList = [...currentList, []];
  //console.log(newList);
  return newList;
};
