import { selector } from "recoil";
import {
  activeCommunicationCategoryIndex,
  ComponentFormat,
  activeTemplateState,
} from "../atoms/template";

export const getAllCommunicationCategories = selector({
  key: "getAllInteractions",
  get: ({ get }) => {
    const communicationCategories = get(activeTemplateState);
    return communicationCategories.communicationCategories;
  },
});

export const activeCommunicationCategory = selector({
  key: "activeCommunicationCategory",
  get: ({ get }) => {
    const interactionList = get(activeTemplateState);
    const currentInteractionIndex = get(activeCommunicationCategoryIndex);
    const currentCommunicationCategory =
      currentInteractionIndex === -1
        ? null
        : interactionList.communicationCategories[currentInteractionIndex];
    const currentCommunicationFormats: ComponentFormat[] =
      currentCommunicationCategory
        ? currentCommunicationCategory.premadeFormats
        : [];
    return {
      currentCommunicationCategory,
      currentCommunicationFormats,
    };
  },
});

export const activeFormat = selector({
  key: "activeVersion",
  get: ({ get }) => {
    const { currentCommunicationCategory } = get(activeCommunicationCategory);
    const currentFormat: ComponentFormat | null =
      currentCommunicationCategory !== null
        ? currentCommunicationCategory.premadeFormats.length !== null
          ? currentCommunicationCategory.premadeFormats[
              currentCommunicationCategory.activeFormatIndex
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
