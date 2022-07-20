import { atom } from "recoil";

export interface Premade {
  activeVersionIndex: number;
  componentName: string;
}

//Dialog
export interface DialogProps {
  name: string;
  width: number;
  borderRadius: number;
  backgroundColor: string;
}

interface PremadeDialogComponents extends Premade {
  premadeComponents: DialogProps[];
}

const premadeDialogComponents: PremadeDialogComponents = {
  activeVersionIndex: 0,
  componentName: "Dialog",
  premadeComponents: [
    {
      name: "default",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "#d3d3d3",
    },
    {
      name: "Alternate 1",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "red",
    },
  ],
};

//Thought
export interface ThoughtProps {
  name: string;
  width: number;
  borderRadius: number;
  backgroundColor: string;
}

interface PremadeThoughtComponents extends Premade {
  premadeComponents: DialogProps[];
}

const premadeThoughtComponents: PremadeThoughtComponents = {
  activeVersionIndex: 0,
  componentName: "Thought",
  premadeComponents: [
    {
      name: "default",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "#d3d3d3",
    },
    {
      name: "Alternate 1",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "red",
    },
  ],
};

//State
const premadeComponents: Premade[] = [
  premadeDialogComponents,
  premadeThoughtComponents,
];

export const storyComponentsState = atom<Premade[]>({
  key: "storyComponents",
  default: premadeComponents,
});

export const activeStoryComponentIndex = atom<number>({
  key: "activeStoryComponentIndex",
  default: -1,
});
