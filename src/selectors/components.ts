import { selector } from "recoil";
import { storyComponents } from "../atoms/components";

export const activeComponent = selector({
  key: "activeComponent",
  get: ({ get }) => {
    const selectedComponent = get(activeComponent);
    const availableComponents = get(storyComponents);
  },
});
