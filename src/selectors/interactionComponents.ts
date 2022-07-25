import { selector } from "recoil";
import {
  activeInteractionIndex,
  FormatProps,
  activeTemplateState,
  StyleProps,
} from "../atoms/interactionComponents";

export const getAllInteractions = selector({
  key: "getAllInteractions",
  get: ({ get }) => {
    const interactionList = get(activeTemplateState);
    return interactionList.interactions;
  },
});

export const activeInteraction = selector({
  key: "activeInteraction",
  get: ({ get }) => {
    const interactionList = get(activeTemplateState);
    const currentInteractionIndex = get(activeInteractionIndex);
    const currentInteraction =
      currentInteractionIndex === -1
        ? null
        : interactionList.interactions[currentInteractionIndex];
    const currentInteractionFormats: FormatProps[] = currentInteraction
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
    const selectedStyle: StyleProps | null = currentFormat
      ? currentFormat.styles[currentFormat.styleIndex]
      : null;
    return { currentFormat, currentFormatStyles, selectedStyle };
  },
});

export const getAllStyles = selector({
  key: "getAllStyles",
  get: ({ get }) => {
    const currentTemplate = get(activeTemplateState);
    const currentDialogStyle =
      currentTemplate.interactions[0].premadeFormats[
        currentTemplate.interactions[0].activeFormatIndex
      ].styles[
        currentTemplate.interactions[0].premadeFormats[
          currentTemplate.interactions[0].activeFormatIndex
        ].styleIndex
      ];
    const currentThoughtStyle =
      currentTemplate.interactions[1].premadeFormats[
        currentTemplate.interactions[1].activeFormatIndex
      ].styles[
        currentTemplate.interactions[1].premadeFormats[
          currentTemplate.interactions[1].activeFormatIndex
        ].styleIndex
      ];
    const currentShoutStyle =
      currentTemplate.interactions[2].premadeFormats[
        currentTemplate.interactions[2].activeFormatIndex
      ].styles[
        currentTemplate.interactions[2].premadeFormats[
          currentTemplate.interactions[2].activeFormatIndex
        ].styleIndex
      ];
    return { currentDialogStyle, currentThoughtStyle, currentShoutStyle };
  },
});
