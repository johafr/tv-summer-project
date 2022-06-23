import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { changeSentenceTextState } from "../atoms/changeSentenceText";
import { inputNameState } from "../atoms/inputName";
import { inputTextState } from "../atoms/inputText";
import { personsState } from "../atoms/persons";
import { addSentence, sentencesState } from "../atoms/sentences";
import { postJSON } from "../utils/postJSON";
import * as S from "../styles/components/EditorTextInputStyles";

// Component props
type Props = {};

// Component wrapper function
export const EditorTextInput: React.FC<Props> = ({}) => {
  const [sentences, setSentences] = useRecoilState(sentencesState);
  const [persons, setPersons] = useRecoilState(personsState);
  const [inputText, setInputText] = useRecoilState(inputTextState);
  const [inputName, setInputName] = useRecoilState(inputNameState);
  const [changeSentenceText, setChangeSentenceText] = useRecoilState(changeSentenceTextState);


  // Takes data from input field and namefield, creates new Sentence via atom function.
  const handleAddSentence = async (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPerson = persons.find((person) => inputName === person.name);
    let sentenceID : number;
    if (sentences.length === 0) {sentenceID = 1}
    else {sentenceID = sentences[sentences.length - 1].id + 1}

    const newSentence = {
      id: sentenceID,
      person: selectedPerson,
      content: inputText,
    };

    setSentences((currentSentences) => addSentence(currentSentences, newSentence)
    );
    setInputText("");
    
    await postJSON("http://localhost:4000/sentences", {
      id: newSentence.id,
      name: selectedPerson?.name,
      text: newSentence.content,
    });
    console.log(sentences);
    
  }; // End handleAddSentence


  // Updates the selected sentence with the new/changed data.
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
  }; // End handleChangeSentence

  const listInputs = sentences.map((sentence) => {
    return (
      <form
        key={sentence.id}
        onSubmit={(e) => handleChangeSentence(e, sentence.id)}
      >
        <S.FormInput
          type="text"
          defaultValue={sentence.content}
          onChange={(e) => setChangeSentenceText(e.target.value)}
        />
      </form>
    );
  }); // End listInputs

  // Component end-return
  return (
    <div>
      {listInputs}
      <form onSubmit={(e) => handleAddSentence(e)}>
        <S.FormInput
          id="lastInput"
          type="text"
          placeholder="Write a sentence..."
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
      </form>
    </div>
  );
};
