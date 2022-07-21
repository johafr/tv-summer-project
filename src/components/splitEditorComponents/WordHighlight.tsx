import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { MessageProps, PageProps } from "../../atoms/stories";
import { activeStory } from "../../selectors/stories";

export const WordHighlight: React.FC = () => {
  const [searchFieldText, setSearchFieldText] = useState("");
  const [instances, setInstances] = useState<number>(-1);
  const pages = useRecoilValue(activeStory).selectedStory?.pages;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setInstances(0);
    var tempCount = 0;
    pages?.forEach((page: PageProps) => {
      page.messages.forEach((message: MessageProps) => {
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
          className={"form-input"}
          placeholder="Search for instance of a word..."
          type="text"
          value={searchFieldText}
          contentEditable
          onChange={(e) => {
            setInstances(-1);
            setSearchFieldText(e.target.value);
          }}
        />
      </Form>
      <Span>
        number of instances of "{searchFieldText}" :
        {instances !== -1 ? " " + instances : ""}
      </Span>
    </>
  );
};

const Form = styled.form``;

const Input = styled.input`
  width: 50%;
`;

const Span = styled.span``;
