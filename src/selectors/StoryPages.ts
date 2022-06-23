import { selector } from "recoil";
import {
  activeIndex as aI,
  messageProps,
  StoryPages,
} from "../atoms/StoryPages";

export const activePage = selector<messageProps[]>({
  key: "activePage",
  get: ({ get }) => {
    const activeIndex = get(aI);
    const displayed = get(StoryPages);
    const activeMessages = displayed[activeIndex];
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
