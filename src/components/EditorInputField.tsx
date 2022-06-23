import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeIndex, StoryPages as sp, updatePage } from "../atoms/StoryPages";
import { activePage as aP } from "../selectors/StoryPages";
import * as S from "../styles/components/EditorTextInputStyles";
import { messageProps } from "../atoms/StoryPages";
import { persons as ps } from "../atoms/persons";
import { activePersonValue } from "../selectors/persons";

export const EditorInputField: React.FC = () => {
  const [pageNum] = useRecoilState(activeIndex);
  const [persons] = useRecoilState(ps);
  const [storyPages, setStoryPages] = useRecoilState(sp);
  const activePerson = useRecoilValue(activePersonValue);
  const activePage = useRecoilValue(aP);
  const [inputText, setInputText] = useState("");
  const [messageInputText, setMessageInputText] = useState("");

  const handleUpdateMessage = (e: React.FormEvent, message: messageProps) => {
    e.preventDefault();
    const activeIndex = activePage.findIndex(
      (messageInList: messageProps) => message.id === messageInList.id
    );
    const selectedMessage = activePage[activeIndex];
    const newMessageList = [
      ...activePage.slice(0, activeIndex),
      { ...selectedMessage, content: messageInputText },
      ...activePage.slice(activeIndex + 1),
    ];
    setStoryPages(updatePage(storyPages, newMessageList, pageNum));
    setMessageInputText("");
    console.log(storyPages[pageNum]);
  };

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const markedPerson = persons.find(
      (person) => activePerson.id === person.id
    );
    const newMessage = {
      id: activePage[activePage.length - 1].id + 1,
      person: markedPerson,
      content: inputText,
    };
    const newMessageList = [...activePage, newMessage];
    setStoryPages(updatePage(storyPages, newMessageList, pageNum));
    setInputText("");
  };

  const messageList = activePage.map((message) => {
    return (
      <form key={message.id} onSubmit={(e) => handleUpdateMessage(e, message)}>
        <S.FormInput
          type="text"
          defaultValue={message.content}
          onChange={(e) => setMessageInputText(e.target.value)}
        />
      </form>
    );
  });
  return (
    <>
      {messageList}
      <form onSubmit={(e) => handleAddMessage(e)}>
        <S.FormInput
          type="text"
          placeholder="Write a sentence..."
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
      </form>
    </>
  );
};
