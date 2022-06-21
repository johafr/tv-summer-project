import { selector } from "recoil";
import { activeIndex as aI, displayScreen } from "../atoms/displayScreens";
import { sentenceCardProps } from "../components/SentenceCard";

export const activePage = selector<sentenceCardProps[]>({
  key: "activePage",
  get: ({ get }) => {
    const activeIndex = get(aI);
    const displayed = get(displayScreen);
    const activeSentences = [...displayed[activeIndex]];

    return activeSentences;
  },
});

export const getDisplayScreenLength = selector<number>({
  key: "getDisplayScreenLength",
  get: ({ get }) => {
    const displayed = get(displayScreen);
    return displayed.length;
  },
});
