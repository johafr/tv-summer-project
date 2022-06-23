import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeIndex, StoryPages as sp, updatePage } from "../atoms/StoryPages";
import { activePage } from "../selectors/StoryPages";
import * as S from "../styles/components/EditorTextInputStyles";
import { messageProps } from "../atoms/StoryPages";
import { activePerson } from "../atoms/persons";

export const EditorInputField: React.FC = () => {
  const [pageNum] = useRecoilState(activeIndex);
  const [storyPages, setStoryPages] = useRecoilState(sp);
  const [selectedPerson] = useRecoilState(activePerson);
  const activeScreen = useRecoilValue(activePage);
  const [inputText, setInputText] = useState("");
  const [messageInputText, setMessageInputText] = useState("");

  const handleUpdateMessage = (e: React.FormEvent, message: messageProps) => {
    e.preventDefault();
    const activeIndex = activeScreen.findIndex(
      (messageInList: messageProps) => message.id === messageInList.id
    );
    const selectedMessage = activeScreen[activeIndex];
    const newMessageList = [
      ...activeScreen.slice(0, activeIndex),
      { ...selectedMessage, content: messageInputText },
      ...activeScreen.slice(activeIndex + 1),
    ];
    setStoryPages(updatePage(storyPages, newMessageList, pageNum));
    setMessageInputText("");
    console.log(storyPages[pageNum]);
  };

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const markedPerson = selectedPerson;
    const newMessage = {
      id: activeScreen[activeScreen.length - 1].id + 1,
      person: markedPerson,
      content: inputText,
    };
    const newMessageList = [...activeScreen, newMessage];
    setStoryPages(updatePage(storyPages, newMessageList, pageNum));
    setInputText("");
  };

  const messageList = activeScreen.map((message) => {
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
