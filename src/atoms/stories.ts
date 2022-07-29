import { atom } from "recoil";
import { Person } from "./Characters";
import { getRecoil, setRecoil } from "recoil-nexus";
import { activePage, activeStory } from "../selectors/stories";

export type StoryCollection = {
  id: number;
  author: string;
  stories: Story[];
};

export type Story = {
  id: number;
  name: string;
  author: string;
  pages: Page[];
};

export type Page = {
  id: number;
  messages: Message[];
};

export type Message = {
  id: number;
  person?: Person;
  content: string;
  format: string[]; //[communicationCategory, Componentformat]
};

const dummyPage1: Page = {
  id: 0,
  messages: [
    {
      id: 0,
      person: {
        id: 0,
        name: "Markus",
        color: "rgb(132, 176, 214",
        align: "left",
      },
      content: "This is dummy data",
      format: [],
    },
    {
      id: 1,
      person: {
        id: 1,
        name: "Lisa",
        color: "rgb(10, 214, 214",
        align: "right",
      },
      content: "This is the second line",
      format: [],
    },
  ],
};

const dummyPage2: Page = {
  id: 1,
  messages: [
    {
      id: 0,
      content: "This is a message without an assigned person",
      format: [],
    },
  ],
};

const dummyStory = [dummyPage1, dummyPage2];

const dummyStory2 = [dummyPage2, dummyPage1];

const dummyData = {
  id: 0,
  author: "dev",
  stories: [
    {
      id: 0,
      name: "dummy Story",
      author: "dev",
      pages: dummyStory,
    },
    {
      id: 1,
      name: "test 2",
      author: "johannes",
      pages: dummyStory2,
    },
  ],
};

export const storiesState = atom<StoryCollection>({
  key: "storiesState",
  default: dummyData,
});

//use to check if insideStory
export const activeStoryIndex = atom<number>({
  key: "activeStoryIndex",
  default: -1,
});

export const activePageIndex = atom<number>({
  key: "activePageIndex",
  default: 0,
});

export const updateStory = (updatedStory: Story) => {
  const currentStoriesState = getRecoil(storiesState);
  const currentStoryIndex = getRecoil(activeStoryIndex);
  const newStoriesList: Story[] = [
    ...currentStoriesState.stories.slice(0, currentStoryIndex!),
    updatedStory,
    ...currentStoriesState.stories.slice(currentStoryIndex! + 1),
  ];
  const updatedStoriesState: StoryCollection = {
    ...currentStoriesState,
    stories: newStoriesList,
  };
  setRecoil(storiesState, updatedStoriesState);
};

export const addStory = (newStory: Story) => {
  const currentStoriesState = getRecoil(storiesState);
  const newStories = {
    ...currentStoriesState,
    stories: [...currentStoriesState.stories, newStory],
  };
  setRecoil(storiesState, newStories);
};

export const updatePage = (updatedPage: Page) => {
  const currentStory = getRecoil(activeStory).selectedStory!;
  const currentPageIndex = getRecoil(activePageIndex)!;
  const newPageList: Page[] = [
    ...currentStory.pages.slice(0, currentPageIndex),
    updatedPage,
    ...currentStory.pages.slice(currentPageIndex + 1),
  ];
  const newStory: Story = {
    ...currentStory,
    pages: newPageList,
  };
  updateStory(newStory);
};

export const addPage = (newPage: Page) => {
  const currentStory = getRecoil(activeStory).selectedStory!;
  const newStory: Story = {
    ...currentStory,
    pages: [...currentStory.pages, newPage],
  };
  updateStory(newStory);
};

export const deletePage = (currentPage: Page) => {
  const currentStory = getRecoil(activeStory).selectedStory!;
  const newStory: Story = {
    ...currentStory,
    pages: currentStory.pages.filter(
      (listElement) => listElement !== currentPage
    ),
  };
  updateStory(newStory);
};

export const updateMessage = (oldMessage: Message, updatedMessage: Message) => {
  const currentPage = getRecoil(activePage)!;
  const messageIndex = currentPage.messages.findIndex(
    (listElement: Message) => listElement === oldMessage
  );
  const newMessageList: Message[] = [
    ...currentPage.messages.slice(0, messageIndex),
    updatedMessage,
    ...currentPage.messages.slice(messageIndex + 1),
  ];
  const newPage: Page = { ...currentPage, messages: newMessageList };
  updatePage(newPage);
};

export const addMessage = (newMessage: Message) => {
  const currentPage = getRecoil(activePage)!;
  const newPage: Page = {
    ...currentPage,
    messages: [...currentPage.messages, newMessage],
  };
  updatePage(newPage);
};

export const deleteMessage = (currentMessage: Message) => {
  const currentPage = getRecoil(activePage)!;
  const newPage: Page = {
    ...currentPage,
    messages: currentPage.messages.filter(
      (listElement) => listElement !== currentMessage
    ),
  };
  updatePage(newPage);
};
