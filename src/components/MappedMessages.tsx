import React from "react";
import { useRecoilValue } from "recoil";
import { messageProps } from "../atoms/StoryPages";
import { activePage } from "../selectors/StoryPages";

export const MappedMessages: React.FC = () => {
  const activeScreen = useRecoilValue(activePage);
  return (
    <>
      {activeScreen.map((message: messageProps) => (
        <p>{message.content}</p>
      ))}
      <form>
        <label>
          Name:
          <input type="text" name="name" value={"name"} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
