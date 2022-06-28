import { atom } from "recoil";
import { Story } from "./StoryPages";

type Props = {
  author: string;
  stories: Story[];
};

export const stories = atom<Props>({
  key: "stories",
  default: { author: "dev", stories: [] },
});
