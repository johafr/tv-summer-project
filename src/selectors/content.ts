import { selector } from "recoil";
import {
  activeDialogComponentIndex,
  dialogComponentsState,
} from "../atoms/content";

export const activeComponent = selector({
  key: "activeComponent",
  get: ({ get }) => {
    const components = get(dialogComponentsState);
    const currentIndex = get(activeDialogComponentIndex);
    const currentComponent = !(currentIndex < 0)
      ? components[currentIndex]
      : null;
    return currentComponent;
  },
});
