import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeIndex,
  deleteMessage,
  StoryPages as sp,
  updatePage,
} from "../atoms/StoryPages";
import { activePage } from "../selectors/StoryPages";
import * as S from "../styles/components/EditorTextInputStyles";
import { messageProps } from "../atoms/StoryPages";
import { activePerson } from "../atoms/persons";

import DeleteIcon from "@mui/icons-material/Delete";

export const EditorInputField: React.FC = () => {
  const [pageNum] = useRecoilState(activeIndex);
  const [storyPages, setStoryPages] = useRecoilState(sp);
  const [selectedPerson] = useRecoilState(activePerson);
  const activeScreen = useRecoilValue(activePage);
  const [inputText, setInputText] = useState("");
  const [messageInputText, setMessageInputText] = useState("");
  const [selectedInputArea, setSelectedInputArea] = useState<number | null>(
    null
  );

  const handleUpdateMessage = (e: React.FormEvent, message: messageProps) => {
    e.preventDefault();
    const activeMessageIndex = activeScreen.findIndex(
      (messageInList: messageProps) => message.id === messageInList.id
    );
    const selectedMessage = activeScreen[activeMessageIndex];
    const newMessageList = [
      ...activeScreen.slice(0, activeMessageIndex),
      {
        ...selectedMessage,
        content: messageInputText,
        align: message.align === "right" ? "left" : "right",
      },
      ...activeScreen.slice(activeMessageIndex + 1),
    ];

    if (messageInputText !== "") {
      setStoryPages(updatePage(storyPages, newMessageList, pageNum));
    }
    setSelectedInputArea(null);
  };

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const markedPerson = selectedPerson;
    const newMessage = {
      id:
        activeScreen.length !== 0
          ? activeScreen[activeScreen.length - 1].id + 1
          : 0,
      person: markedPerson,
      content: inputText,
      align: markedPerson === undefined ? "center" : "right",
    };
    const newMessageList = [...activeScreen, newMessage];
    setStoryPages(updatePage(storyPages, newMessageList, pageNum));
    setInputText("");
  };

  const handleDeleteMessage = (selectedmessage: messageProps) => {
    const selectedMessageIndex = activeScreen.findIndex(
      (currentmessage) => currentmessage.id === selectedmessage.id
    );
    setStoryPages(
      deleteMessage(selectedMessageIndex, pageNum, activeScreen, storyPages)
    );
  }; // End delete message

  const handleOnSelect = (message: messageProps) => {
    if (selectedInputArea !== message.id) {
      setSelectedInputArea(message.id);
      setMessageInputText(message.content);
    }
  };

  const messageList = activeScreen.map((message: messageProps) => {
    return (
      <div key={message.id}>
        <form
          key={message.id}
          onSubmit={(e) => handleUpdateMessage(e, message)}
        >
          <S.ColorCircle
            style={{
              backgroundColor: message.person?.color?.toString(),
              opacity: message.person ? "1" : "0",
            }}
          />
          <S.FormInput
            type="text"
            onSelect={() => handleOnSelect(message)}
            value={
              selectedInputArea === message.id
                ? messageInputText
                : message.content
            }
            onChange={(e) => setMessageInputText(e.target.value)}
          />
          <DeleteIcon
            sx={{ fontSize: 12 }}
            onClick={() => handleDeleteMessage(message)}
          />
        </form>
      </div>
    );
  });

  return (
    <>
      {messageList}
      <div>
        <form onSubmit={(e) => handleAddMessage(e)}>
          <S.ColorCircle
            style={{
              backgroundColor: selectedPerson?.color?.toString(),
              opacity: selectedPerson ? "1" : "0",
            }}
          />
          <S.FormInput
            id="lastInput"
            type="text"
            placeholder="Write a sentence..."
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            style={{ marginTop: "15px" }}
            onSelect={() => setSelectedInputArea(null)}
          />
        </form>
      </div>
    </>
  );
};
