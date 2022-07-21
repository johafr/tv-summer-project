import { selector } from "recoil";
import {
  activeInteractionIndex,
  interactionListState,
} from "../atoms/components";

export const getAllInteractions = selector({
  key: "getAllInteractions",
  get: ({ get }) => {
    const interactionList = get(interactionListState);
    return interactionList;
  },
});

export const activeInteraction = selector({
  key: "activeInteraction",
  get: ({ get }) => {
    const interactionList = get(interactionListState);
    const currentInteractionIndex = get(activeInteractionIndex);
    const currentInteraction =
      currentInteractionIndex === -1
        ? null
        : interactionList[currentInteractionIndex];
    const currentInteractionFormats = currentInteraction
      ? currentInteraction.premadeFormats
      : [];
    return {
      currentInteraction,
      currentInteractionFormats,
    };
  },
});

export const activeFormat = selector({
  key: "activeVersion",
  get: ({ get }) => {
    const { currentInteraction } = get(activeInteraction);
    const currentFormat =
      currentInteraction !== null
        ? currentInteraction.premadeFormats[
            currentInteraction.activeFormatIndex
          ]
        : null;
    return currentFormat;
  },
});
