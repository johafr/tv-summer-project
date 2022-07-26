import { atom } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";

export type Person = {
  id: number;
  name: string;
  color: string;
  mood?: number;
};

// Init data
const initialData = [
  { id: 0, name: "Markus", color: "rgb(132, 176, 214" },
  { id: 1, name: "Lisa", color: "rgb(10, 214, 214" },
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

export const fourBoxSelectedPersonsState = atom<Person[][]>({
  key: "fourBoxSelectedPersons",
  default: [
    [{ id: -1, name: "Person 1", color: "" }],
    [{ id: -2, name: "Person 2", color: "" }],
  ],
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
