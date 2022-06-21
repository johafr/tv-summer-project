
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { json } from "stream/consumers";
import {addSentence, Person, sentencesState} from "../atoms/sentences";
// Expand with values at a later stage if needed, ie color or animation valeus...
type Word = {
  id : number,
  content : string,
}
// Expand with values at a later stage if needed, ie color or animation values...
type Sentence = {
  id : number,
  person: Person
  content : Word[],
}

const initialPersons = [
  {id : 1, name: 'Markus',color: 'red'},
  {id : 2, name : 'Lisa', color: 'green'},
]
const initialName = 'Markus'
export const Editor: React.FC = () => {

  const [inputName,setInputName] = useState<string>(initialName);
  const [inputText,setInputText] = useState<string>("");

  const [persons,setPersons] = useState<Person[]>(initialPersons)
  const [words,setWords] = useState<Word[]>([])
  const [sentences,setSentences] = useRecoilState(sentencesState)
  

  const handleInputText = () => {
    setInputText(inputText);
  }

  const handleNameChange = () => {
    setInputName(inputName);
  }

  const selectedPerson = persons.find((person) => person.name === inputName)

  // TODO: Convert to atom method
  const handleAddName = (e: React.FormEvent) => {
    e.preventDefault();
    const newPerson = {
      id : persons[persons.length - 1].id +1,
      name : inputName,
    }
    const updatedList = [
      ...persons,
      newPerson,
    ]
    setPersons(updatedList)
  }

  const handleAddSentence = (e: React.FormEvent) => {
    e.preventDefault()
    const newSentence = {
      id: sentences[sentences.length-1].id+1,
      content: inputText
    }

    setSentences((currentSentences) => addSentence(currentSentences, newSentence));
    setInputText('');
  }


  const listSentences = sentences
  .map((sentence) => {
    return (
      <p>{sentence.content}</p>
    )
  })

  const listNames = persons
  .map((person) => {
    return (
      <li style={{backgroundColor: person.color?.toString()}}>{person.name}</li>
    )
  })





  // Editor final return
  return (
 
  <div className="editor">
    <h1>Editor</h1>
    <div className="editor__nameList">
    <ul>
      {listNames}
    </ul>
    </div>
    <div className="editor__nameForm">
      <form onSubmit={(e) => handleAddName(e)}>
      <input type="text" placeholder="Name" value={inputName} onChange={(event) => setInputName(event.target.value)}/>
      </form>
    </div>
    <div className="editor__textForm">
      <form onSubmit={(e) => handleAddSentence(e)}>
        <input type="text" placeholder ="Text" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
      </form>
    </div>
    <div className="prodPreview" style={{display:"flex"}}>
      <p>{listSentences}</p>
    </div>
    </div>
  )
};
