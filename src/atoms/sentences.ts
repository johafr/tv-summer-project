import { atom, RecoilState } from "recoil";
import { Person, Sentence } from "../types";



// Expand with values at a later stage if needed, ie color or animation values...
export type Word = {
  id: number;
  content: string;
};
// Expand with values at a later stage if needed, ie color or animation values...


// Init data
const initialString = "The pale old horse galloped.";
const initialData: Sentence[] = [{ id: 1, content: initialString }];

// State
export const sentencesState = atom<Sentence[]>({
  key: "sentencesState",
  default: [],
});

// Modifer (ie adding items to a list state)
export const addSentence = (sentences: Sentence[], newSentence: Sentence) => {
  return [...sentences, newSentence];
};
