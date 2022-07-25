import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import {
  activeCommunicationCategory,
  getAllCommunicationCategories,
} from "../selectors/template";

export interface Template {
  background?: null;
  communicationCategories: CommunicationCateogry[];
}

export interface CommunicationCateogry {
  activeFormatIndex: number;
  interactionName: string;
  premadeFormats: ComponentFormat[];
}

export interface ComponentFormat {
  formatName: string;
}

const premadeDialogFormats: CommunicationCateogry = {
  activeFormatIndex: 0,
  interactionName: "DIALOG",
  premadeFormats: [
    {
      formatName: "SpeechBubbleChat",
    },
    {
      formatName: "Dialog Option 2",
    },
  ],
};

const premadeThoughtFormats: CommunicationCateogry = {
  activeFormatIndex: 0,
  interactionName: "THOUGHT",
  premadeFormats: [
    {
      formatName: "ThoughtBubbleChat",
    },
    {
      formatName: "Thought 1",
    },
  ],
};

const premadeShoutFormats: CommunicationCateogry = {
  activeFormatIndex: 0,
  interactionName: "SHOUT",
  premadeFormats: [
    {
      formatName: "ShoutBubbleChat",
    },
    {
      formatName: "Shout 1",
    },
  ],
};

//State
const premadeComponents: Template = {
  communicationCategories: [
    premadeDialogFormats,
    premadeThoughtFormats,
    premadeShoutFormats,
  ],
};

export const activeTemplateState = atom<Template>({
  key: "interactionListState",
  default: premadeComponents,
});

export const activeInteractionIndex = atom<number>({
  key: "activeInteractionIndex",
  default: -1,
});

//methods

//state:
//updates the state where the data is stored
export const updateInteractionList = (
  newInteraction: CommunicationCateogry
) => {
  const currentInteractionList = getRecoil(getAllCommunicationCategories);
  const currentInteractionIndex = getRecoil(activeInteractionIndex);
  const updatedInteractionListState: CommunicationCateogry[] = [
    ...currentInteractionList.slice(0, currentInteractionIndex),
    newInteraction,
    ...currentInteractionList.slice(currentInteractionIndex + 1),
  ];
  setRecoil(activeTemplateState, {
    ...activeTemplateState,
    communicationCategories: updatedInteractionListState,
  });
};

//interaction:
//updates the format list in the Interaction
export const updateInteractionFormats = (newFormats: ComponentFormat[]) => {
  const { currentInteraction } = getRecoil(activeCommunicationCategory);
  const updatedInteraction: CommunicationCateogry = {
    ...currentInteraction!,
    premadeFormats: newFormats,
  };
  updateInteractionList(updatedInteraction);
};

//Format:
export const updateCurrentActiveFormat = (index: number) => {
  const { currentInteraction } = getRecoil(activeCommunicationCategory);
  updateInteractionList({ ...currentInteraction!, activeFormatIndex: index });
};

//adds a new format to the list
export const addFormat = (newFormat: ComponentFormat) => {
  const { currentInteractionFormats } = getRecoil(activeCommunicationCategory);
  const newInteractionFormats: ComponentFormat[] = [
    ...currentInteractionFormats,
    newFormat,
  ];
  updateInteractionFormats(newInteractionFormats);
};

export const getAllFormats = (CommunicationCateogry: string) => {
  const template = getRecoil(activeTemplateState);
  switch (CommunicationCateogry) {
    case "DIALOG":
      return template.communicationCategories[0].premadeFormats;
    case "THOUGHT":
      return template.communicationCategories[1].premadeFormats;
    case "SHOUT":
      return template.communicationCategories[2].premadeFormats;
  }
};
