import { selector } from "recoil";
import {
  activeCommunicationCategoryIndex,
  activeTemplateIndex,
  CommunicationCategory,
  ComponentFormat,
  componentsState,
  templates,
} from "../atoms/template";
import {
  cachedCustomTemplateState,
  editState,
} from "../screens/CreateCustomTemplate";

export const communicationCategoriesList = selector({
  key: "communicationCategoriesList",
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

export const templatesCategory = selector({
  key: "premadeTemplates",
  get: ({ get }) => {
    const allTemplates = get(templates);
    const premadeTemplates = allTemplates.filter(
      (template) => !template.custom
    );
    const customTemplates = allTemplates.filter((template) => template.custom);

    return {
      premadeTemplates,
      customTemplates,
    };
  },
});

export const templateCommunications = selector<string[]>({
  key: "templateCommunications",
  get: ({ get }) => {
    const edit = get(editState);
    const CCList = get(communicationCategoriesList);
    const template = edit
      ? get(cachedCustomTemplateState)
      : get(getActiveTemplate);
    const formats: string[] = [];
    CCList.forEach((com: CommunicationCategory, forEachIndex) =>
      formats.push(
        com.premadeFormats[template.indexes[forEachIndex].index].formatName
      )
    );
    return formats;
  },
});
