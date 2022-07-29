import { atom } from "recoil";

export const pageOverflowState = atom<boolean>({
  key: "pageOverflowState",
  default: false,
});

export const overflowRanState = atom<boolean>({
  key: "overflowRanState",
  default: false,
});
