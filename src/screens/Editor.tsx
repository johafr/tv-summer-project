import { fontWeight } from "@mui/system";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { json } from "stream/consumers";
import { addPerson, personsState } from "../atoms/persons";
import { addSentence, Person, sentencesState } from "../atoms/sentences";
import { postJSON } from "../utils/postJSON";
import { Preview } from "./Preview";
// Expand with values at a later stage if needed, ie color or animation valeus...
type Word = {
  id: number;
  content: string;
};
// Expand with values at a later stage if needed, ie color or animation values...
type Sentence = {
  id: number;
  person: Person;
  content: Word[];
};

const initialName = "Markus";
export const Editor: React.FC = () => {
  const [inputName, setInputName] = useState<string>(initialName);
  const [inputText, setInputText] = useState<string>("");
  const [changeSentenceText, setChangeSentenceText] = useState<string>("");
  const [words, setWords] = useState<Word[]>([]);

  const [persons, setPersons] = useRecoilState(personsState);
  const [sentences, setSentences] = useRecoilState(sentencesState);

  const colorList: string[] = ["#407178", "#9CA9EA", "#D6BF5A", "#F49850"];

  const handleSelectPerson = (selectedID: number) => {
    const findPerson = persons.find((person) => person.id === selectedID);
    if (findPerson) {
      setInputName(findPerson.name);
    }
  };

  // TODO: Convert to atom method
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

  const handleAddSentence = async (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPerson = persons.find((person) => inputName === person.name);
    const newSentence = {
      id: sentences[sentences.length - 1].id + 1,
      person: selectedPerson,
      content: inputText
    }
    setSentences((currentSentences) => addSentence(currentSentences, newSentence));
    setInputText('');
    
    await postJSON('http://localhost:4000/sentences', {
      id : newSentence.id,
      name : selectedPerson?.name,
      text : newSentence.content,
    })
    console.log(sentences)
  }


  const handleChangeSentence = async (e: React.FormEvent, curID: number) => {
    e.preventDefault();
    const selectedSentenceIndex = sentences.findIndex(
      (sentence) => sentence.id === curID
    );
    const selectedSentence = sentences[selectedSentenceIndex];
    const updatedSentences = [
      ...sentences.slice(0, selectedSentenceIndex),
      { ...selectedSentence, content: changeSentenceText },
      ...sentences.slice(selectedSentenceIndex + 1),
    ];
    setSentences(updatedSentences);
  };

  // Lists all names that are availbile, otherwise empty.
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

  // Delete when better solution exists
  const listSentences = sentences.map((sentence, index) => {
    return <p key={index}>{sentence.content}</p>;
  });

  // Delete when better solution exists
  const listInputs = sentences.map((sentence) => {
    return (
      <form
        key={sentence.id}
        onSubmit={(e) => handleChangeSentence(e, sentence.id)}
      >
        <input
          type="text"
          defaultValue={sentence.content}
          onChange={(e) => setChangeSentenceText(e.target.value)}
        />
      </form>
    );
  });

  // Editor final return
  return (
    <div className="editor__parent--div">
      <div className="editor">
        <h1>Editor</h1>

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

        <div className="editor__textForm">
          {listInputs}
          <form onSubmit={(e) => handleAddSentence(e)}>
            <input
              type="text"
              placeholder="Write a sentence..."
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
          </form>
        </div>
      </div>
      <Preview />
    </div>
  );
};
