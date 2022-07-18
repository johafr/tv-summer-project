import React from "react";
import { useRecoilValue } from "recoil";
import { MessageProps } from "../atoms/stories";
import { activePage } from "../selectors/stories";

export const MappedMessages: React.FC = () => {
  const currentPage = useRecoilValue(activePage)!;
  return (
    <>
      {currentPage.messages.map((message: MessageProps) => (
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
