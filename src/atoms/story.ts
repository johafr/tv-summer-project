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
  author: string;
  pages: messageProps[][];
};

export const dummyData = [
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

export const story = atom<Story>({
  key: "displayScreens",
  default: {
    id: 0,
    name: "dummy story",
    author: "dummy author",
    pages: dummyData,
  },
});

export const updatePage = (
  currentStory: Story,
  newPage: messageProps[],
  index: number
) => {
  const newList = [
    ...currentStory.pages.slice(0, index),
    newPage,
    ...currentStory.pages.slice(index + 1),
  ];
  const newStory = { ...currentStory, pages: newList };
  return newStory;
};

export const deleteMessage = (
  messageIndex: number,
  pagenumber: number,
  page: messageProps[],
  currentStory: Story
) => {
  // Remove the message (object) from the sublist (page[])
  const updatedMessagelist = [
    ...page.slice(0, messageIndex),
    ...page.slice(messageIndex + 1),
  ];
  // Replace the sublist (page[]) in the parent list (pages[][])
  const updatedPagesList = [
    ...currentStory.pages.slice(0, pagenumber),
    updatedMessagelist,
    ...currentStory.pages.slice(pagenumber + 1),
  ];
  const newStory = { ...currentStory, pages: updatedPagesList };
  return newStory;
};

export const activeIndex = atom<number>({
  key: "activeIndex",
  default: 0,
});

export const createNewPage = (currentStory: Story) => {
  const newPages = [...currentStory.pages, []];
  const newStory = { ...currentStory, pages: newPages };
  return newStory;
};

export const deletePage = (
  currentStory: Story,
  pageToBeDeleted: messageProps[]
) => {
  return currentStory.pages.length === 1
    ? { ...currentStory, pages: [[]] }
    : {
        ...currentStory,
        pages: currentStory.pages.filter((page) => page !== pageToBeDeleted),
      };
};

// Attempt at making updates for every instance of the person that had a color change.
export const updatePersonColor = (
  oldPerson: Person,
  newPerson: Person,
  story: Story
) => {
  const totalPages = story.pages.length;
  //let updatedStoriesList: messageProps[][];
  //let updatedMessagesList: messageProps[];

  for (let i = 0; i < totalPages; i++) {
    for (let j = 0; j < story.pages[i].length; j++) {
      if (story.pages[i][j].person?.id === oldPerson.id) {
        console.table(story.pages[i][j].person);
      }
    }
  }
  return story;
};
