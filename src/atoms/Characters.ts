import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";

export type Person = {
  id: number;
  name: string;
  color: string;
  align?: string;
};

// Init data
const initialData = [
  { id: 0, name: "Markus", color: "rgb(132, 176, 214", align: "left" },
  { id: 1, name: "Lisa", color: "rgb(10, 214, 214", align: "right" },
];

// State
export const allCharactersState = atom<Person[]>({
  key: "AllCharactersState",
  default: initialData,
});

export const selectedPersonIndex = atom<number>({
  key: "selectedPersonIndex",
  default: -1,
});

// Modifer (ie adding items to a list state)
export const addNewPerson = (newPerson: Person) => {
  document.getElementById("lastInput")?.focus();
  const characterState = getRecoil(allCharactersState);
  setRecoil(allCharactersState, [...characterState, newPerson]);
};

export const setSelectedPerson = (newSelectedPerson: Person | undefined) => {
  const currentPersons = getRecoil(allCharactersState);
  if (newSelectedPerson === undefined) {
    setRecoil(selectedPersonIndex, -1);
  } else {
    const newIndex = currentPersons.findIndex(
      (personInList: Person) => personInList === newSelectedPerson
    );
    setRecoil(selectedPersonIndex, newIndex);
  }
};

export const deletePerson = (personToDelete: Person) => {
  const currentPersons = getRecoil(allCharactersState);
  const newList = currentPersons.filter(
    (personInList: Person) => personInList !== personToDelete
  );
  setRecoil(allCharactersState, newList);
};
