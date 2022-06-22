import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRecoilState } from "recoil";
import { inputNameState } from "../atoms/inputName";
import { addPerson, personsState } from "../atoms/persons";
import { Tooltip } from "@mui/material";

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
        <div className="editor__nameList-item" style={{backgroundColor: person.color?.toString(),}}>
        <Tooltip title="Name" placement="top-end"> 
        
          <li
            key={person.id}
            style={{
              
              fontWeight: selectedPerson(person.name) ? "bold" : "normal",
            }}
            onClick={(e) => handleSelectPerson(person.id)}
          >
            {person.name} 
          </li>
        
        </Tooltip>
        <div >
            <DeleteIcon className="editor__delete-button" sx={{fontSize:20,color:'#407178',position:'relative',top:-30,right:-100}}/>
        </div>
        </div>
        
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