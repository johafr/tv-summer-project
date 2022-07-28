import { selector } from "recoil";
import { allCharactersState, selectedPersonIndex } from "../atoms/Characters";
import { selectedPersonSide } from "../atoms/editor";

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


export const alignedPersonsList = selector({
  key: "alignedPersonsList",
  get: ({ get }) => {
    const characters = get(allCharactersState);
    const alignment = get(selectedPersonSide)
    const alignedCharacters = characters.filter(character => character.align?.toUpperCase() === alignment.toUpperCase() || character.align === "")
    return alignedCharacters;
  }
})
