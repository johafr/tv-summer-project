import { selector } from "recoil";
import { allCharactersState, selectedPersonIndex } from "../atoms/Characters";

export const activePerson = selector({
  key: "activePerson",
  get: ({ get }) => {
    const characters = get(allCharactersState);
    const currentSelectedPersonIndex = get(selectedPersonIndex);
    return currentSelectedPersonIndex < 0
      ? undefined
      : characters[currentSelectedPersonIndex];
  },
});
