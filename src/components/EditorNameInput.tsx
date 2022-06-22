import React from "react";
import { useRecoilState } from "recoil";
import { inputNameState } from "../atoms/inputName";
import { addPerson, personsState } from "../atoms/persons";

// Component props
type Props = {

};

// Component wrapper function
export const EditorNameInput: React.FC<Props> = ({  }) => {
    const [persons,setPersons] = useRecoilState(personsState)
    const [inputName,setInputName] = useRecoilState(inputNameState)

    const colorList: string[] = ["#407178", "#9CA9EA", "#D6BF5A", "#F49850"];

    const handleSelectPerson = (selectedID: number) => {
        const findPerson = persons.find((person) => person.id === selectedID);
        if (findPerson) {
          setInputName(findPerson.name);
        }
    };

    const handleAddName = (e: React.FormEvent) => {
        e.preventDefault();

        // Replace with a colorpicker or something..
        const randomColor = () => {
            let random = Math.floor(Math.random() * persons.length);
            if (persons.find((person) => person.color === colorList[random])) {
            randomColor();
            } else return colorList[random];
        };

        const newPerson = {
            id: persons[persons.length - 1].id + 1,
            name: inputName,
            color: randomColor(),
            };
        setPersons((currentPersons) => addPerson(currentPersons, newPerson));
    };

    const listNames = persons.map((person) => {
        const selectedPerson = (name: string) => {
          if (name === inputName) return true;
        };
    
        return (
          <li
            key={person.id}
            style={{
              backgroundColor: person.color?.toString(),
              fontWeight: selectedPerson(person.name) ? "bold" : "normal",
            }}
            onClick={(e) => handleSelectPerson(person.id)}
          >
            {person.name}
          </li>
        );
      });




    // Component end-return
    return (
    <div>
        <div className="editor__nameList">
            <ul>{listNames}</ul>
        </div>

        <div className="editor__nameForm">
            <form onSubmit={(event) => handleAddName(event)}>
            <input
                type="text"
                placeholder="Name"
                value={inputName}
                onChange={(event) => setInputName(event.target.value)}
            />
            </form>
        </div>
    </div>
    )
}