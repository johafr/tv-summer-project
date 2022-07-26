import { selector } from "recoil";
import {
  activeCommunicationCategoryIndex,
  ComponentFormat,
  activeTemplateState,
} from "../atoms/template";

export const getAllCommunicationCategories = selector({
  key: "getAllInteractions",
  get: ({ get }) => {
    const interactionList = get(activeTemplateState);
    return interactionList.communicationCategories;
  },
});

export const activeCommunicationCategory = selector({
  key: "activeCommunicationCategory",
  get: ({ get }) => {
    const interactionList = get(activeTemplateState);
    const currentInteractionIndex = get(activeCommunicationCategoryIndex);
    const currentInteraction =
      currentInteractionIndex === -1
        ? null
        : interactionList.communicationCategories[currentInteractionIndex];
    const currentInteractionFormats: ComponentFormat[] = currentInteraction
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
    const { currentInteraction } = get(activeCommunicationCategory);
    const currentFormat: ComponentFormat | null =
      currentInteraction !== null
        ? currentInteraction.premadeFormats.length !== null
          ? currentInteraction.premadeFormats[
              currentInteraction.activeFormatIndex
            ]
          : null
        : null;
    return { currentFormat };
  },
});

export const getActiveFormats = selector({
  key: "getAllStyles",
  get: ({ get }) => {
    const currentTemplate = get(activeTemplateState);
    const currentDialogStyle =
      currentTemplate.communicationCategories[0].premadeFormats[
        currentTemplate.communicationCategories[0].activeFormatIndex
      ];

    const currentThoughtStyle =
      currentTemplate.communicationCategories[1].premadeFormats[
        currentTemplate.communicationCategories[1].activeFormatIndex
      ];

    const currentShoutStyle =
      currentTemplate.communicationCategories[2].premadeFormats[
        currentTemplate.communicationCategories[2].activeFormatIndex
      ];

    return { currentDialogStyle, currentThoughtStyle, currentShoutStyle };
  },
});
