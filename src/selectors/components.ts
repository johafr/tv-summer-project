import { selector } from "recoil";
import {
  activeStoryComponentIndex,
  storyComponentsState,
} from "../atoms/components";

export const activeComponent = selector({
  key: "activeComponent",
  get: ({ get }) => {
    const storyComponents = get(storyComponentsState);
    const activeIndex = get(activeStoryComponentIndex);
    const currentComponent =
      activeIndex === -1 ? null : storyComponents[activeIndex];
    return currentComponent;
  },
});
