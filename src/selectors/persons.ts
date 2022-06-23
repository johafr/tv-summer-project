import { selector } from "recoil";
import { Person, persons } from "../atoms/persons";

export const activePersonValue = selector<Person>({
  key: "activePersonValue",
  get: ({ get }) => {
    const personList = get(persons);
    var selectedPerson: Person = personList[0];
    personList.map((person: Person) => {
      if (person.isSelected) {
        selectedPerson = person;
      }
    });
    return selectedPerson;
  },
});
