import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import {
  activeComponent,
  getAllPremadeComponents,
} from "../selectors/components";

export interface Premade {
  activeVersionIndex: number;
  componentName: string;
  premadeComponents: ComponentProps[];
}

export interface ComponentProps {
  id: number;
  name: string;
  width: number;
  borderRadius: number;
  backgroundColor: string;
}

const premadeDialogComponents: Premade = {
  activeVersionIndex: 0,
  componentName: "Dialog",
  premadeComponents: [
    {
      id: 0,
      name: "default",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "#d3d3d3",
    },
    {
      id: 1,
      name: "Dialog 1",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "red",
    },
  ],
};

const premadeThoughtComponents: Premade = {
  activeVersionIndex: 0,
  componentName: "Thought",
  premadeComponents: [
    {
      id: 0,
      name: "default",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "#d3d3d3",
    },
    {
      id: 1,
      name: "Thought 1",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "red",
    },
  ],
};

const premadeShoutComponents: Premade = {
  activeVersionIndex: 0,
  componentName: "Shout",
  premadeComponents: [
    {
      id: 0,
      name: "default",
      width: 10,
      borderRadius: 0.2,
      backgroundColor: "#d3d3d3",
    },
    {
      id: 1,
      name: "Shout 1",
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
  premadeShoutComponents,
];

export const storyComponentsState = atom<Premade[]>({
  key: "storyComponents",
  default: premadeComponents,
});

export const activeStoryComponentIndex = atom<number>({
  key: "activeStoryComponentIndex",
  default: -1,
});

//methods
export const updateStoryComponentsState = (newVersionsList: Premade) => {
  const currentComponentsList = getRecoil(getAllPremadeComponents);
  const componentIndex = getRecoil(activeStoryComponentIndex);
  const updatedState: Premade[] = [
    ...currentComponentsList.slice(0, componentIndex),
    newVersionsList,
    ...currentComponentsList.slice(componentIndex + 1),
  ];
  setRecoil(storyComponentsState, updatedState);
};

export const updateVersion = (newActiveVersionIndex: number) => {
  const { currentComponent } = getRecoil(activeComponent);
  const updatedComponent: Premade = {
    ...currentComponent!,
    activeVersionIndex: newActiveVersionIndex,
  };
  updateStoryComponentsState(updatedComponent);
};
