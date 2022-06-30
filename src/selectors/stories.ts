import { selector } from "recoil";
import { Story } from "../atoms/story";

export const activeStory = selector<Story | null>({
  key: "activeStory",
  get: ({ get }) => {
    console.log("inside stories selector");
    return null;
  },
});
