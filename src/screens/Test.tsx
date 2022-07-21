import React from "react";
import styled from "styled-components";
import { LeftCardChat } from "../components/customTemplateComponents/formats/LeftCardChat";
import { SpanCardChat } from "../components/customTemplateComponents/formats/SpanCardChat";
import { SpeechBubbleChat } from "../components/customTemplateComponents/formats/SpeechBubbleChat";
import { ThoughtBubbleChat } from "../components/customTemplateComponents/formats/ThoughtBubbleChat";
import { NamedTextInput } from "../components/Editor Components/NamedTextInput";

type LeftCardProps = {
  name: string;
  text: string;
};
export const Test: React.FC = () => {
  return (
    <>
      {/* <div>test</div>
      <div style={{width:'60%',backgroundColor:'rgba(201,228,212)',minHeight:'110vh',boxShadow:'10px 10px 10px 10px rgba(0,0,0,0.1)'}}>
      <SpeechBubbleChat name={"Mamma"} text={"We can probably tell you more tomorrow, Mikkel"} variant={"left"} />
      <SpanCardChat text={"She says as Dad shoots his arms high in the air, waves them back and forth as he sings."}/>
      <SpeechBubbleChat name={"Pappa"} text={"It was the best concert in the world."} variant={"left"}/>
      <LeftCardChat name={"Terje"} text={"He says. He used to say that after all the concerts they were at, but I believed in him every time, that this concert was even better than the previous one."} variant={"left"}/>
      <SpeechBubbleChat name={"Pappa"} text={"It was magical. The atmosphere was palpable!"}/>
      <ThoughtBubbleChat name={"Sanna"} text={"I remember wondering what that meant. How it could be both to touch and feel a mood."} variant={"right"}/>
      </div> */}

      <div style={{ width: "100%", display: "flex", marginTop: "50px" }}>
        <NamedTextInput name="Lars" />
        <NamedTextInput name="Terje" />
      </div>
    </>
  );
};

export const TestComponent: React.FC<LeftCardProps> = ({ name, text }) => {
  return (
    <>
      <h1>Bing bong!</h1>
    </>
  );
};
