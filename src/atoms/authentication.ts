import { atom } from "recoil";

// Stores the user id from the current user that is logged in
export const userIdRefState = atom<string | undefined>({
  key: "userIdRef",
  default: "",
});
