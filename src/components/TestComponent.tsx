import React, { useEffect, useState } from "react";
import { SentenceCard } from "./SentenceCard";
import { fetchJSON } from "../utils/fetchJSON";
import { postJSON } from "../utils/postJSON";

export const TestComponent: React.FC<{}> = (props) => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    async function loadData() {
      const res = await fetchJSON("http://localhost:4000/sentences");
      setData(res);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function postData() {
      await postJSON("http://localhost:4000/sentences", {
        id: 7,
        name: "Dummy Seven",
        text: "I am dummy seven",
      });
    }
    postData();
  }, []);

  return (
    <>
      <SentenceCard
        name={"Torstein"}
        text={"Hva er det du trenger hjelp til i dag da, Cornelius?"}
      />
      <SentenceCard name={"Cornelius"} text={"Vet ikke ass, you tell me"} />
      <SentenceCard name={"Johannes"} text={"Halla!"} />
    </>
  );
};
