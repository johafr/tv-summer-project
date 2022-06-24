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
    const activeMessageIndex = activeScreen.findIndex(
      (messageInList: messageProps) => message.id === messageInList.id
    );
    const selectedMessage = activeScreen[activeMessageIndex];
    const newMessageList = [
      ...activeScreen.slice(0, activeMessageIndex),
      { ...selectedMessage, content: messageInputText },
      ...activeScreen.slice(activeMessageIndex + 1),
    ];

    if (messageInputText !== "") {
      setStoryPages(updatePage(storyPages, newMessageList, pageNum));
    }
    setMessageInputText("");
  };

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const markedPerson = selectedPerson;
    const newMessage = {
      id: activeScreen.length !== 0 ? activeScreen[activeScreen.length - 1].id + 1 : 0,
      person: markedPerson,
      content: inputText,
    };
    const newMessageList = [...activeScreen, newMessage];
    setStoryPages(updatePage(storyPages, newMessageList, pageNum));
    setInputText("");
  };

  const messageList = activeScreen.map((message) => {
    return (
      <div>
      
      <form key={message.id} onSubmit={(e) => handleUpdateMessage(e, message)}>
      <S.ColorCircle style={{backgroundColor: message.person?.color?.toString()}}/>
        <S.FormInput
          type="text"
          defaultValue={message.content}
          onChange={(e) => setMessageInputText(e.target.value)}
        />
      </form>
      </div>
    );
  });

  return (
    <>
      {messageList}
      <form onSubmit={(e) => handleAddMessage(e)}>
        <S.ColorCircle style={{backgroundColor: selectedPerson?.color?.toString(),
        opacity: selectedPerson ? '1' : '0'}}/>
        <S.FormInput
          id="lastInput"
          type="text"
          placeholder="Write a sentence..."
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          style={{marginTop:'15px;'}}
        />
      </form>
    </>
  );
};
