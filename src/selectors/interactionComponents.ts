import { selector } from "recoil";
import {
  activeInteractionIndex,
  FormatProps,
  interactionListState,
  StyleProps,
} from "../atoms/interactionComponents";

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
    const currentFormat: FormatProps | null =
      currentInteraction !== null
        ? currentInteraction.premadeFormats.length !== null
          ? currentInteraction.premadeFormats[
              currentInteraction.activeFormatIndex
            ]
          : null
        : null;
    const currentFormatStyles: StyleProps[] = currentFormat
      ? currentFormat.styles
      : [];
    const selectedStyle: StyleProps | null = null;
    return { currentFormat, currentFormatStyles, selectedStyle };
  },
});
