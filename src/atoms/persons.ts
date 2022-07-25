import { atom } from "recoil";

export type Person  = {
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
export const persons = atom<Person[]>({
  key: "personsState",
  default: initialData,
});

export const activePerson = atom<Person | undefined>({
  key: "activePerson",
  default: undefined,
});

export const selectedPersonsState = atom<Person[]>({
  key: "selectedPersonsState",
  default: [],
})

export const fourBoxSelectedPersonsState = atom<Person[][]>({
  key: "fourBoxSelectedPersons",
  default: [
    [{ id: -1, name: "Person 1", color: "" }],
    [{ id: -2, name: "Person 2", color: "" }],
  ],
})

// Modifer (ie adding items to a list state)
export const addPerson = (persons: Person[], newPerson: Person) => {
  document.getElementById("lastInput")?.focus();
  return [...persons, newPerson];
};
