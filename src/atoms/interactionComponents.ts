import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import {
  activeFormat,
  activeInteraction,
  getAllInteractions,
} from "../selectors/interactionComponents";

export interface TemplateProps {
  background?: null;
  interactions: InteractionProps[];
}

export interface InteractionProps {
  activeFormatIndex: number;
  interactionName: string;
  premadeFormats: FormatProps[];
}

export interface FormatProps {
  styleIndex: number;
  formatName: string;
  styles: StyleProps[];
}

export interface StyleProps {
  version: string;
  id: number;
  width: number;
  borderRadius: number;
  backgroundColor: string;
}

const premadeDialogFormats: InteractionProps = {
  activeFormatIndex: 0,
  interactionName: "DIALOG",
  premadeFormats: [
    {
      styleIndex: 0,
      formatName: "SpeechBubbleChat",
      styles: [
        {
          version: "DEFAULT SpeechBubbleChat",
          id: 0,
          width: 51,
          borderRadius: 1.25,
          backgroundColor: "white",
        },
        {
          version: "CUSTOM SpeechBubbleChat 1",
          id: 1,
          width: 51,
          borderRadius: 1.25,
          backgroundColor: "red",
        },
      ],
    },
    {
      styleIndex: 1,
      formatName: "Dialog1",
      styles: [
        {
          version: "DEFAULT Dialog1",
          id: 0,
          width: 10,
          borderRadius: 0.2,
          backgroundColor: "lightgreen",
        },
      ],
    },
  ],
};

const premadeThoughtFormats: InteractionProps = {
  activeFormatIndex: 0,
  interactionName: "THOUGHT",
  premadeFormats: [
    {
      styleIndex: 0,
      formatName: "Default Thought",
      styles: [
        {
          version: "DEFAULT",
          id: 0,
          width: 10,
          borderRadius: 0.2,
          backgroundColor: "#d3d3d3",
        },
      ],
    },
    {
      styleIndex: 1,
      formatName: "Thought 1",
      styles: [
        {
          version: "DEFAULT",
          id: 0,
          width: 10,
          borderRadius: 0.2,
          backgroundColor: "lightblue",
        },
      ],
    },
  ],
};

const premadeShoutFormats: InteractionProps = {
  activeFormatIndex: 0,
  interactionName: "SHOUT",
  premadeFormats: [
    {
      styleIndex: 0,
      formatName: "Default Shout",
      styles: [
        {
          version: "DEFAULT",
          id: 0,
          width: 10,
          borderRadius: 0.2,
          backgroundColor: "#d3d3d3",
        },
      ],
    },
    {
      styleIndex: 0,
      formatName: "Shout 1",
      styles: [
        {
          version: "DEFAULT",
          id: 1,
          width: 10,
          borderRadius: 0.2,
          backgroundColor: "#f6cefc",
        },
      ],
    },
  ],
};

const premadeCustomFormats: InteractionProps = {
  activeFormatIndex: 0,
  interactionName: "CUSTOM",
  premadeFormats: [],
};

//State
const premadeComponents: TemplateProps = {
  interactions: [
    premadeDialogFormats,
    premadeThoughtFormats,
    premadeShoutFormats,
    premadeCustomFormats,
  ],
};

export const activeTemplateState = atom<TemplateProps>({
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
export const updateInteractionList = (newInteraction: InteractionProps) => {
  const currentInteractionList = getRecoil(getAllInteractions);
  const currentInteractionIndex = getRecoil(activeInteractionIndex);
  const updatedInteractionListState: InteractionProps[] = [
    ...currentInteractionList.slice(0, currentInteractionIndex),
    newInteraction,
    ...currentInteractionList.slice(currentInteractionIndex + 1),
  ];
  setRecoil(activeTemplateState, {
    ...activeTemplateState,
    interactions: updatedInteractionListState,
  });
};

//interaction:
//updates the format list in the Interaction
export const updateInteractionFormats = (newFormats: FormatProps[]) => {
  const { currentInteraction } = getRecoil(activeInteraction);
  const updatedInteraction: InteractionProps = {
    ...currentInteraction!,
    premadeFormats: newFormats,
  };
  updateInteractionList(updatedInteraction);
};

//Format:
//Updates the selected format
export const updateFormat = (updatedFormat: FormatProps) => {
  const { currentInteraction, currentInteractionFormats } =
    getRecoil(activeInteraction);
  const activeFormatIndex = currentInteraction!.activeFormatIndex;

  const newInteractionFormats: FormatProps[] = [
    ...currentInteractionFormats.slice(0, activeFormatIndex),
    updatedFormat,
    ...currentInteractionFormats.slice(activeFormatIndex + 1),
  ];
  updateInteractionFormats(newInteractionFormats);
};

export const updateCurrentActiveFormat = (index: number) => {
  const { currentInteraction } = getRecoil(activeInteraction);
  updateInteractionList({ ...currentInteraction!, activeFormatIndex: index });
};

export const updateCurrentActiveStyle = (newFormat: FormatProps) => {
  const { currentInteraction, currentInteractionFormats } =
    getRecoil(activeInteraction);
  const activeFormatIndex = currentInteraction!.activeFormatIndex;

  const newInteractionFormats: FormatProps[] = [
    ...currentInteractionFormats.slice(0, activeFormatIndex),
    newFormat,
    ...currentInteractionFormats.slice(activeFormatIndex + 1),
  ];
  updateInteractionFormats(newInteractionFormats);
};

//adds a new format to the list
export const addFormat = (newFormat: FormatProps) => {
  const { currentInteractionFormats } = getRecoil(activeInteraction);
  const newInteractionFormats: FormatProps[] = [
    ...currentInteractionFormats,
    newFormat,
  ];
  updateInteractionFormats(newInteractionFormats);
};

//Styles
//Add new Style to list
export const addFormatStyle = (newStyle: StyleProps) => {
  const { currentFormat } = getRecoil(activeFormat);
  updateFormat({
    ...currentFormat!,
    styles: [...currentFormat!.styles, newStyle],
  });
};

//update existing style
export const updateFormatStyle = (updatedStyle: StyleProps) => {
  const { currentFormat, currentFormatStyles } = getRecoil(activeFormat);
  const formatIndex = currentFormatStyles.findIndex(
    (styles: StyleProps) => styles.version === updatedStyle.version
  );
  updatedStyle.version.split("").includes("DEFAULT")
    ? addFormatStyle(updatedStyle)
    : updateFormat({
        ...currentFormat!,
        styles: [
          ...currentFormatStyles.slice(0, formatIndex),
          updatedStyle,
          ...currentFormatStyles.slice(formatIndex),
        ],
      });
};

//Set active Style
export const updateActiveStyle = (newStyleIndex: number) => {
  const { currentFormat } = getRecoil(activeFormat);
  updateCurrentActiveStyle({ ...currentFormat!, styleIndex: newStyleIndex });
};
