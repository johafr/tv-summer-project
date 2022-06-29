import { atom } from "recoil";
import { Story } from "./story";

type StoriesProps = {
  id: number;
  author: string;
  stories: Story[];
};

const dummyData = {
  id: 0,
  author: "dev",
  stories: [],
};

export const stories = atom<StoriesProps>({
  key: "stories",
  default: dummyData,
});
