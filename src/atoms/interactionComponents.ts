import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import {
  activeFormat,
  activeInteraction,
  getAllInteractions,
} from "../selectors/interactionComponents";

export interface Template {
  background?: null;
  interactions: InteractionProps[];
}

export interface InteractionProps {
  activeFormatIndex: number;
  interactionName: string;
  premadeFormats: FormatProps[];
}

export interface FormatProps {
  formatId: number;
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
      formatId: 0,
      formatName: "SpeechBubbleChat",
      styles: [
        {
          version: "DEAFULT SpeechBubbleChat",
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
      formatId: 1,
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
      formatId: 0,
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
      formatId: 1,
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
      formatId: 0,
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
      formatId: 0,
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
const premadeComponents: InteractionProps[] = [
  premadeDialogFormats,
  premadeThoughtFormats,
  premadeShoutFormats,
  premadeCustomFormats,
];

export const interactionListState = atom<InteractionProps[]>({
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
  setRecoil(interactionListState, updatedInteractionListState);
};

//interaction:
//updates the format list in the Interaction
export const updateInteraction = (newFormats: FormatProps[]) => {
  const { currentInteraction } = getRecoil(activeInteraction);
  const updatedInteraction: InteractionProps = {
    ...currentInteraction!,
    premadeFormats: newFormats,
  };
  updateInteractionList(updatedInteraction);
};

//updates the selected format for the active interaction
export const updateSelectedFormat = (newActiveFormatIndex: number) => {
  const { currentInteraction } = getRecoil(activeInteraction);
  const updatedComponent: InteractionProps = {
    ...currentInteraction!,
    activeFormatIndex: newActiveFormatIndex,
  };
  updateInteractionList(updatedComponent);
};

//Format:
//Updates the selected format
export const updateFormat = (updatedStyles: StyleProps[]) => {
  const { currentInteraction, currentInteractionFormats } =
    getRecoil(activeInteraction);
  const activeFormatIndex = currentInteraction!.activeFormatIndex;
  const { currentFormat } = getRecoil(activeFormat)!;

  const newInteractionFormats: FormatProps[] = [
    ...currentInteractionFormats.slice(0, activeFormatIndex),
    { ...currentFormat!, styles: updatedStyles },
    ...currentInteractionFormats.slice(activeFormatIndex + 1),
  ];
  updateInteraction(newInteractionFormats);
};

//adds a new format to the list
export const addFormat = (newFormat: FormatProps) => {
  const { currentInteractionFormats } = getRecoil(activeInteraction);
  const newInteractionFormats: FormatProps[] = [
    ...currentInteractionFormats,
    newFormat,
  ];
  updateInteraction(newInteractionFormats);
};

//Styles
//Add new Style to list
export const addFormatStyle = (newStyle: StyleProps) => {
  const { currentFormatStyles } = getRecoil(activeFormat);
  updateFormat([...currentFormatStyles, newStyle]);
};

//update existing style
export const updateFormatStyles = (updatedStyle: StyleProps) => {
  const { currentFormatStyles } = getRecoil(activeFormat);
  const formatIndex = currentFormatStyles.findIndex(
    (styles: StyleProps) => styles.version === updatedStyle.version
  );
  updatedStyle.version.split("").includes("DEFAULT")
    ? addFormatStyle(updatedStyle)
    : updateFormat([
        ...currentFormatStyles.slice(0, formatIndex),
        updatedStyle,
        ...currentFormatStyles.slice(formatIndex),
      ]);
};

//Set active Style
