import { atom } from "recoil";
import { setRecoil } from "recoil-nexus";

export interface ComponentsProps {
  id: number;
  type: string;
}

export interface DialogProps extends ComponentsProps {}

export interface ThoughtProps extends ComponentsProps {}

export interface ShoutProps extends ComponentsProps {}

export interface CustomComponentProps extends ComponentsProps {}

const dialog: DialogProps = {
  id: 0,
  type: "dialog",
};
const thought: ThoughtProps = {
  id: 1,
  type: "thought",
};
const shout: ShoutProps = {
  id: 2,
  type: "shout",
};

const dummydata: ComponentsProps[] = [dialog, thought, shout];

export const dialogComponentsState = atom<ComponentsProps[]>({
  key: "dialogComponents",
  default: dummydata,
});

export const activeDialogComponentIndex = atom<number>({
  key: "activeDialogComponent",
  default: -1,
});

export const updateActiveComponent = (newIndex: number) => {
  setRecoil(activeDialogComponentIndex, newIndex);
};
