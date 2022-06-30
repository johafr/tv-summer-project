import { atom } from "recoil";
import { Story, dummyData as dt } from "./story";

type StoriesProps = {
  id: number;
  author: string;
  stories: Story[];
};

const dummyData = {
  id: 0,
  author: "dev",
  stories: [
    {
      id: 0,
      name: "dummy Story",
      author: "dev",
      pages: dt,
    },
  ],
};

export const stories = atom<StoriesProps>({
  key: "stories",
  default: dummyData,
});

export const insideStory = atom<boolean>({
  key: "insideStory",
  default: false,
});

export const addStoryToStories = () => {
  console.log(stories);
};
