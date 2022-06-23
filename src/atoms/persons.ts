import { atom } from "recoil";

export type Person = {
  id: number;
  name: string;
  color?: string;
  mood?: number;
  isSelected: boolean;
};

// Init data
const initialData = [
  { id: 1, name: "Markus", color: "rgb(132, 176, 214", isSelected: false },
  { id: 2, name: "Lisa", color: "rgb(10, 214, 214", isSelected: false },
];

// State
export const persons = atom<Person[]>({
  key: "personsState",
  default: initialData,
});

// Modifer (ie adding items to a list state)
export const addPerson = (persons: Person[], newPerson: Person) => {
  return [...persons, newPerson];
};
