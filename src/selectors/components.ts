import { selector } from "recoil";
import {
  activeStoryComponentIndex,
  storyComponentsState,
} from "../atoms/components";

export const getAllPremadeComponents = selector({
  key: "getAllPremadeComponents",
  get: ({ get }) => {
    const state = get(storyComponentsState);
    return state;
  },
});

export const activeComponent = selector({
  key: "activeComponent",
  get: ({ get }) => {
    const storyComponents = get(storyComponentsState);
    const activeIndex = get(activeStoryComponentIndex);
    const currentComponent =
      activeIndex === -1 ? null : storyComponents[activeIndex];
    const currentComponentVersions = currentComponent
      ? currentComponent.premadeComponents
      : [];
    return { currentComponent, currentComponentVersions };
  },
});

export const activeVersion = selector({
  key: "activeVersion",
  get: ({ get }) => {
    const { currentComponent } = get(activeComponent);
    const currentVersion =
      currentComponent!.premadeComponents[currentComponent!.activeVersionIndex];
    return currentVersion;
  },
});
