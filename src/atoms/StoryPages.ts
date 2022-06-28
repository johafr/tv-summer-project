import { atom } from "recoil";
import { Person } from "./persons";

export type messageProps = {
  id: number;
  person?: Person;
  content: string;
  align: string;
};

export type Story = {
  id: number;
  name: string;
  pages: messageProps[][];
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
      align: "right",
    },
    {
      id: 1,
      person: {
        id: 1,
        name: "Lisa",
        color: "rgb(10, 214, 214",
      },
      content: "This is the second line",
      align: "left",
    },
  ],
  [
    {
      id: 0,
      content: "This is a message without an assigned person",
      align: "center",
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

export const deleteMessage = (
  messageIndex: number,
  pagenumber: number,
  messages: messageProps[],
  stories: messageProps[][]
) => {
  // Remove the message (object) from the sublist (page[])
  const updatedMessagelist = [
    ...messages.slice(0, messageIndex),
    ...messages.slice(messageIndex + 1),
  ];
  // Replace the sublist (page[]) in the parent list (pages[][])
  const updatedPagesList = [
    ...stories.slice(0, pagenumber),
    updatedMessagelist,
    ...stories.slice(pagenumber + 1),
  ];
  return updatedPagesList;
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

// Attempt at making updates for every instance of the person that had a color change.
export const updatePersonColor = (
  oldPerson: Person,
  newPerson: Person,
  stories: messageProps[][]
) => {
  const totalPages = stories.length;
  let updatedStoriesList: messageProps[][];
  let updatedMessagesList: messageProps[];

  for (let i = 0; i < totalPages; i++) {
    for (let j = 0; j < stories[i].length; j++) {
      if (stories[i][j].person?.id === oldPerson.id) {
        console.table(stories[i][j].person);
      }
    }
  }
  return stories;
};
