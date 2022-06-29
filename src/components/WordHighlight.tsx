import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { messageProps, StoryPages } from "../atoms/StoryPages";

export const WordHighlight: React.FC = () => {
  const [searchFieldText, setSearchFieldText] = useState("");
  const [instances, setInstances] = useState<number>(-1);
  const [pages] = useRecoilState(StoryPages);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setInstances(0);
    var tempCount = 0;
    pages.forEach((page: messageProps[]) => {
      page.forEach((message: messageProps) => {
        const words = message.content.toLowerCase().split(" ");
        console.log(words);
        console.log(searchFieldText.trim().toLowerCase());
        if (words.includes(searchFieldText.trim().toLowerCase())) {
          tempCount += 1;
        }
      });
    });
    setInstances(tempCount);
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
        <Input
          placeholder="Search for instance of word..."
          type="text"
          value={searchFieldText}
          contentEditable
          onChange={(e) => {
            setInstances(-1);
            setSearchFieldText(e.target.value);
          }}
        />
      </Form>
      <span>
        number of instances of "{searchFieldText}" :
        {instances !== -1 ? " " + instances : ""}
      </span>
    </>
  );
};

const Form = styled.form``;

const Input = styled.input`
  width: 50%;
`;
