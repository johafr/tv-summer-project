import { selector } from "recoil";
import { activeIndex, messageProps, StoryPages } from "../atoms/StoryPages";

export const activePage = selector<messageProps[]>({
  key: "activePage",
  get: ({ get }) => {
    const pageNum = get(activeIndex);
    const displayed = get(StoryPages);
    const activeMessages = displayed[pageNum];
    return activeMessages;
  },
});

export const getDisplayScreenLength = selector<number>({
  key: "getDisplayScreenLength",
  get: ({ get }) => {
    const displayed = get(StoryPages);
    return displayed.length;
  },
});
