import { selector } from "recoil";
import {
  activeCommunicationCategoryIndex,
  activeTemplateIndex,
  ComponentFormat,
  componentsState,
  templates,
} from "../atoms/template";

export const communicationCategoriesList = selector({
  key: "getAllInteractions",
  get: ({ get }) => {
    const components = get(componentsState);
    return components.communicationCategories;
  },
});

export const activeCommunicationCategory = selector({
  key: "activeCommunicationCategory",
  get: ({ get }) => {
    const components = get(componentsState);
    const currentIndex = get(activeCommunicationCategoryIndex);
    const currentCommunicationCategory =
      currentIndex === -1
        ? undefined
        : components.communicationCategories[currentIndex];
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
  key: "activeFormat",
  get: ({ get }) => {
    const { currentCommunicationCategory } = get(activeCommunicationCategory);
    const currentFormat =
      currentCommunicationCategory?.premadeFormats[
        currentCommunicationCategory.activeFormatIndex
      ];
    return { currentFormat };
  },
});

export const getActiveTemplate = selector({
  key: "getAllStyles",
  get: ({ get }) => {
    const currentTemplates = get(templates);
    const index = get(activeTemplateIndex);
    return currentTemplates[index];
  },
});
