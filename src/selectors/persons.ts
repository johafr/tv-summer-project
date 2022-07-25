import { selector } from "recoil";
import { charactersState } from "../atoms/persons";

export const activePerson = selector({
  key: "activePerson",
  get: ({ get }) => {
    const characters = get(charactersState);
    return characters.persons[characters.activePersonIndex];
  },
});
