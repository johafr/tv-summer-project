import { atom } from "recoil";

type DialogProps = {};

type ThoughtProps = {};

type ShoutProps = {};

type DialogComponents = {
  dialog: DialogProps;
  thought: ThoughtProps;
  shout: ShoutProps;
};

const dummyData: DialogComponents = {
  dialog: {},
  thought: {},
  shout: {},
};

export const dialogComponents = atom<DialogComponents>({
  key: "dialogComponents",
  default: dummyData,
});
