import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import {
  activeFormat,
  activeInteraction,
  getAllInteractions,
} from "../selectors/components";

export interface InteractionProps {
  activeFormatIndex: number;
  InteractionName: string;
  premadeFormats: FormatProps[];
}

export interface FormatProps {
  formatId: number;
  formatName: string;
  styles: {
    width: number;
    borderRadius: number;
    backgroundColor: string;
  };
}

const premadeDialogFormats: InteractionProps = {
  activeFormatIndex: 0,
  InteractionName: "Dialog",
  premadeFormats: [
    {
      formatId: 0,
      formatName: "Default Dialog",
      styles: { width: 10, borderRadius: 0.2, backgroundColor: "#d3d3d3" },
    },
    {
      formatId: 1,
      formatName: "Dialog 1",
      styles: {
        width: 10,
        borderRadius: 0.2,
        backgroundColor: "lightgreen",
      },
    },
  ],
};

const premadeThoughtFormats: InteractionProps = {
  activeFormatIndex: 0,
  InteractionName: "Thought",
  premadeFormats: [
    {
      formatId: 0,
      formatName: "Default Thought",
      styles: {
        width: 10,
        borderRadius: 0.2,
        backgroundColor: "#d3d3d3",
      },
    },
    {
      formatId: 1,
      formatName: "Thought 1",
      styles: {
        width: 10,
        borderRadius: 0.2,
        backgroundColor: "lightblue",
      },
    },
  ],
};

const premadeShoutFormats: InteractionProps = {
  activeFormatIndex: 0,
  InteractionName: "Shout",
  premadeFormats: [
    {
      formatId: 0,
      formatName: "Default Shout",
      styles: {
        width: 10,
        borderRadius: 0.2,
        backgroundColor: "#d3d3d3",
      },
    },
    {
      formatId: 1,
      formatName: "Shout 1",
      styles: {
        width: 10,
        borderRadius: 0.2,
        backgroundColor: "#f6cefc",
      },
    },
  ],
};

//State
const premadeComponents: InteractionProps[] = [
  premadeDialogFormats,
  premadeThoughtFormats,
  premadeShoutFormats,
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
//updates the selected format for the active interaction
export const updateSelectedFormat = (newActiveInteractionIndex: number) => {
  const { currentInteraction } = getRecoil(activeInteraction);
  const updatedComponent: InteractionProps = {
    ...currentInteraction!,
    activeFormatIndex: newActiveInteractionIndex,
  };
  updateInteractionList(updatedComponent);
};

//updates the format list in the Interaction
export const updateInteraction = (newFormats: FormatProps[]) => {
  const { currentInteraction } = getRecoil(activeInteraction);
  const updatedInteraction: InteractionProps = {
    ...currentInteraction!,
    premadeFormats: newFormats,
  };
  updateInteractionList(updatedInteraction);
};

//Format:
//Updates the selected format
export const updateFormatStyles = (newFormat: FormatProps) => {
  const { currentInteraction, currentInteractionFormats } =
    getRecoil(activeInteraction);
  const activeFormatIndex = currentInteraction!.activeFormatIndex;
  const currentFormat = getRecoil(activeFormat)!;

  const newInteractionFormats: FormatProps[] = [
    ...currentInteractionFormats.slice(0, activeFormatIndex),
    { ...currentFormat, styles: newFormat.styles },
    ...currentInteractionFormats.slice(activeFormatIndex + 1),
  ];
  updateInteraction(newInteractionFormats);
};

//adds a new format to the list
export const addFormatStyle = (newFormat: FormatProps) => {
  const { currentInteractionFormats } = getRecoil(activeInteraction);
  const newInteractionFormats: FormatProps[] = [
    ...currentInteractionFormats,
    newFormat,
  ];
  updateInteraction(newInteractionFormats);
};
