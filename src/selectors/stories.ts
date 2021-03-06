import { selector } from "recoil";
import {
  storiesState,
  activeStoryIndex,
  Story,
  activePageIndex,
  Page,
  Message,
} from "../atoms/stories";

export const activeStory = selector({
  key: "activeStory",
  get: ({ get }) => {
    const stories = get(storiesState);
    const index = get(activeStoryIndex);
    const selectedStory: Story =
      index === null
        ? { id: -1, name: "none", author: "none", pages: [] }
        : stories.stories[index];
    const activeStoryPages: Page[] = selectedStory ? selectedStory.pages : [];
    return { selectedStory, activeStoryPages };
  },
});

export const activePage = selector({
  key: "activePageInStory",
  get: ({ get }) => {
    const { activeStoryPages } = get(activeStory);
    const currentPageIndex = get(activePageIndex);
    const returnedPage: Page = activeStoryPages[currentPageIndex];
    return returnedPage;
  },
});

export const activeStoryStats = selector({
  key: "activeStoryStats",
  get: ({ get }) => {
    const storyPages = get(activeStory).activeStoryPages;
    const numPages = storyPages?.length;
    let numWords = 0;
    storyPages?.forEach((page: Page) =>
      page.messages.forEach((message: Message) => {
        message.content.split(" ").forEach(() => (numWords += 1));
      })
    );
    return { numPages, numWords };
  },
});
