import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import {
  activeCommunicationCategory,
  communicationCategoriesList,
} from "../selectors/template";

export interface Components {
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

export interface Template {
  templateName: string;
  indexes: {
    communicationName: string;
    index: number;
  }[];
}

//dummyData
const dummyData: CommunicationCategory[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

//States
export const componentsState = atom<Components>({
  key: "activeTemplateState",
  default: { communicationCategories: dummyData },
});

export const activeCommunicationCategoryIndex = atom<number>({
  key: "activeCommunicationCateogryIndex",
  default: -1,
});

export const templates = atom<Template[]>({
  key: "templates",
  default: [
    {
      templateName: "default template 1",
      indexes: [
        { communicationName: "NARRATIVE", index: 0 },
        { communicationName: "TEXTMESSAGE", index: 0 },
        { communicationName: "DIALOG", index: 0 },
        { communicationName: "THOUGHT", index: 0 },
        { communicationName: "SHOUT", index: 0 },
      ],
    },
    {
      templateName: "default template 2",
      indexes: [
        { communicationName: "NARRATIVE", index: 1 },
        { communicationName: "TEXTMESSAGE", index: 1 },
        { communicationName: "DIALOG", index: 1 },
        { communicationName: "THOUGHT", index: 1 },
        { communicationName: "SHOUT", index: 1 },
      ],
    },
  ],
});

export const activeTemplateIndex = atom<number>({
  key: "activeTemplateIndex",
  default: 0,
});

//Methods
export const updateCurrentActiveFormat = (index: number) => {
  const { currentCommunicationCategory } = getRecoil(
    activeCommunicationCategory
  );
  const communicationCategories = getRecoil(communicationCategoriesList);
  const CCIndex = getRecoil(activeCommunicationCategoryIndex);

  const newCommunicationCategory = {
    ...currentCommunicationCategory!,
    activeFormatIndex: index,
  };
  setRecoil(componentsState, {
    ...componentsState,
    communicationCategories: [
      ...communicationCategories.slice(0, CCIndex),
      newCommunicationCategory,
      ...communicationCategories.slice(CCIndex + 1),
    ],
  });
};
