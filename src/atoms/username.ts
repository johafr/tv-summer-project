import { atom } from "recoil";

export const usernameState = atom<string | undefined | null>({
  key: "usernameState",
  default: undefined,
});
