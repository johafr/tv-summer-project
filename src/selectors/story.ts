import { selector } from "recoil";
import { activeIndex, messageProps, story } from "../atoms/story";

export const activePage = selector<messageProps[]>({
  key: "activePage",
  get: ({ get }) => {
    const pageNum = get(activeIndex);
    const displayed = get(story);
    const activeMessages = displayed.pages[pageNum];
    return activeMessages;
  },
});

export const storyPages = selector<messageProps[][]>({
  key: "storyPages",
  get: ({ get }) => {
    const activeStory = get(story);
    return activeStory.pages;
  },
});

export const getDisplayScreenLength = selector<number>({
  key: "getDisplayScreenLength",
  get: ({ get }) => {
    const displayed = get(story);
    return displayed.pages.length;
  },
});