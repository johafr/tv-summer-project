import { atom } from "recoil";
import { Person } from "./persons";
import { getRecoil, setRecoil } from "recoil-nexus";
import { activePage, activeStory } from "../selectors/stories";

export type StoriesProps = {
  id: number;
  author: string;
  stories: StoryProps[];
};

export type StoryProps = {
  id: number;
  name: string;
  author: string;
  pages: PageProps[];
};

export type PageProps = {
  id: number;
  messages: MessageProps[];
};

export type MessageProps = {
  id: number;
  person?: Person;
  content: string;
  align: string;
  interactionType: string;
  formatId?: number;
};

const dummyPage1: PageProps = {
  id: 0,
  messages: [
    {
      id: 0,
      person: {
        id: 0,
        name: "Markus",
        color: "rgb(132, 176, 214",
      },
      content: "This is dummy data",
      align: "right",
      interactionType: "DIALOG",
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
      interactionType: "DIALOG",
    },
  ],
};

const dummyPage2: PageProps = {
  id: 1,
  messages: [
    {
      id: 0,
      content: "This is a message without an assigned person",
      align: "center",
      interactionType: "NONE",
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

export const storiesState = atom<StoriesProps>({
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

export const updateStory = (updatedStory: StoryProps) => {
  const currentStoriesState = getRecoil(storiesState);
  const currentStoryIndex = getRecoil(activeStoryIndex);
  const newStoriesList: StoryProps[] = [
    ...currentStoriesState.stories.slice(0, currentStoryIndex!),
    updatedStory,
    ...currentStoriesState.stories.slice(currentStoryIndex! + 1),
  ];
  const updatedStoriesState: StoriesProps = {
    ...currentStoriesState,
    stories: newStoriesList,
  };
  setRecoil(storiesState, updatedStoriesState);
};

export const addStory = (newStory: StoryProps) => {
  const currentStoriesState = getRecoil(storiesState);
  const newStories = {
    ...currentStoriesState,
    stories: [...currentStoriesState.stories, newStory],
  };
  setRecoil(storiesState, newStories);
};

export const updatePage = (updatedPage: PageProps) => {
  const currentStory = getRecoil(activeStory).selectedStory!;
  const currentPageIndex = getRecoil(activePageIndex)!;
  const newPageList: PageProps[] = [
    ...currentStory.pages.slice(0, currentPageIndex),
    updatedPage,
    ...currentStory.pages.slice(currentPageIndex + 1),
  ];
  const newStory: StoryProps = {
    ...currentStory,
    pages: newPageList,
  };
  updateStory(newStory);
};

export const addPage = (newPage: PageProps) => {
  const currentStory = getRecoil(activeStory).selectedStory!;
  const newStory: StoryProps = {
    ...currentStory,
    pages: [...currentStory.pages, newPage],
  };
  updateStory(newStory);
};

export const deletePage = (currentPage: PageProps) => {
  const currentStory = getRecoil(activeStory).selectedStory!;
  const newStory: StoryProps = {
    ...currentStory,
    pages: currentStory.pages.filter(
      (listElement) => listElement !== currentPage
    ),
  };
  updateStory(newStory);
};

export const updateMessage = (updatedMessage: MessageProps) => {
  const currentPage = getRecoil(activePage)!;
  const messageIndex = currentPage.messages.findIndex(
    (listElement: MessageProps) => listElement.id === updatedMessage.id
  );
  const newMessageList: MessageProps[] = [
    ...currentPage.messages.slice(0, messageIndex),
    updatedMessage,
    ...currentPage.messages.slice(messageIndex + 1),
  ];
  const newPage: PageProps = { ...currentPage, messages: newMessageList };
  updatePage(newPage);
};

export const addMessage = (newMessage: MessageProps) => {
  const currentPage = getRecoil(activePage)!;
  const newPage: PageProps = {
    ...currentPage,
    messages: [...currentPage.messages, newMessage],
  };
  updatePage(newPage);
};

export const deleteMessage = (currentMessage: MessageProps) => {
  const currentPage = getRecoil(activePage)!;
  const newPage: PageProps = {
    ...currentPage,
    messages: currentPage.messages.filter(
      (listElement) => listElement !== currentMessage
    ),
  };
  updatePage(newPage);
};
