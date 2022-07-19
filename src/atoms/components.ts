import { atom } from "recoil";

//Dialog
export type DialogProps = {
  name: string;
  type: string;
  width: number;
  borderRadius: number;
  backgroundColor: string;
};

const premadeDialogComponents: DialogProps[] = [
  {
    name: "default",
    type: "dialog",
    width: 10,
    borderRadius: 0.2,
    backgroundColor: "#d3d3d3",
  },
  {
    name: "Alternate 1",
    type: "dialog",
    width: 10,
    borderRadius: 0.2,
    backgroundColor: "red",
  },
];

export const dialogComponentState = atom<DialogProps>({
  key: "dialogComponentState",
  default: premadeDialogComponents[0],
});

export const dialogComponentVersions = atom<DialogProps[]>({
  key: "dialogComponentVersions",
  default: premadeDialogComponents,
});

//Thought
export type ThoughtProps = {
  name: string;
  type: string;
  width: number;
  borderRadius: number;
  backgroundColor: string;
};

const premadeThoughtComponents: ThoughtProps[] = [
  {
    name: "default",
    type: "thought",
    width: 10,
    borderRadius: 0.2,
    backgroundColor: "#d3d3d3",
  },
  {
    name: "Alternate 1",
    type: "thought",
    width: 10,
    borderRadius: 0.2,
    backgroundColor: "red",
  },
];

export const thoughtComponentState = atom<ThoughtProps>({
  key: "thoughtComponentState",
  default: premadeThoughtComponents[0],
});

export const thoughtComponentVersions = atom<ThoughtProps[]>({
  key: "thoughtComponentVersions",
  default: premadeThoughtComponents,
});

export const storyComponents = atom<string[]>({
  key: "storyComponents",
  default: ["dialog", "thought"],
});

export const activeComponent = atom<string>({
  key: "activeComponent",
  default: "none",
});
