import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import {
  activeCommunicationCategory,
  getAllCommunicationCategories,
} from "../selectors/template";

export interface Template {
  background?: null;
  communicationCategories: CommunicationCategory[];
}

export interface CommunicationCategory {
  activeFormatIndex: number;
  interactionName: string;
  premadeFormats: ComponentFormat[];
}

export interface ComponentFormat {
  formatName: string;
}

const premadeDialogFormats: CommunicationCategory = {
  activeFormatIndex: 0,
  interactionName: "DIALOG",
  premadeFormats: [
    {
      formatName: "SpeechBubbleChat",
    },
    {
      formatName: "Dialog Option 1",
    },
    {
      formatName: "Dialog Option 2",
    },
    {
      formatName: "Dialog Option 3",
    },
  ],
};

const premadeThoughtFormats: CommunicationCategory = {
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

const premadeShoutFormats: CommunicationCategory = {
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

const premadeTextMessageFormats: CommunicationCategory = {
  activeFormatIndex: 0,
  interactionName: "TEXTMESSAGE",
  premadeFormats: [
    {
      formatName: "Default Textmessage",
    },
    {
      formatName: "Textmessage 1",
    },
  ],
};

const premadeNarrativeFormats: CommunicationCategory = {
  activeFormatIndex: 0,
  interactionName: "NARRATIVE",
  premadeFormats: [
    {
      formatName: "Default Narrative",
    },
    {
      formatName: "Narrative 1",
    },
  ],
};

//State
const premadeComponents: Template = {
  communicationCategories: [
    premadeNarrativeFormats,
    premadeTextMessageFormats,
    premadeDialogFormats,
    premadeThoughtFormats,
    premadeShoutFormats,
  ],
};

export const activeTemplateState = atom<Template>({
  key: "activeTemplateState",
  default: premadeComponents,
});

export const activeCommunicationCategoryIndex = atom<number>({
  key: "activeCommunicationCateogryIndex",
  default: -1,
});

//methods

//state:
//updates the state where the data is stored
export const updateCommunicationCategoryList = (
  communicationCategory: CommunicationCategory
) => {
  const currentInteractionList = getRecoil(getAllCommunicationCategories);
  const currentInteractionIndex = getRecoil(activeCommunicationCategoryIndex);
  const updatedInteractionListState: CommunicationCategory[] = [
    ...currentInteractionList.slice(0, currentInteractionIndex),
    communicationCategory,
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
  const { currentCommunicationCategory } = getRecoil(
    activeCommunicationCategory
  );
  const updatedInteraction: CommunicationCategory = {
    ...currentCommunicationCategory!,
    premadeFormats: newFormats,
  };
  updateCommunicationCategoryList(updatedInteraction);
};

//Format:
export const updateCurrentActiveFormat = (index: number) => {
  const { currentCommunicationCategory } = getRecoil(
    activeCommunicationCategory
  );
  updateCommunicationCategoryList({
    ...currentCommunicationCategory!,
    activeFormatIndex: index,
  });
};

//adds a new format to the list
export const addFormat = (newFormat: ComponentFormat) => {
  const { currentCommunicationFormats } = getRecoil(
    activeCommunicationCategory
  );
  const newInteractionFormats: ComponentFormat[] = [
    ...currentCommunicationFormats,
    newFormat,
  ];
  updateInteractionFormats(newInteractionFormats);
};
