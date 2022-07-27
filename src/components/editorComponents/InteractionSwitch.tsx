import React from "react";
import { Message } from "../../atoms/stories";
import { SpeechBubbleChat } from "../customTemplateComponents/formats/dialogFormats/SpeechBubbleChat";
import { TextMessageFormatRegular } from "../customTemplateComponents/formats/textMessageFormats/TextMessageFormatRegular";
import { ThoughtBubbleChat } from "../customTemplateComponents/formats/thoughtFormats/ThoughtBubbleChat";
import { ThoughtBubbleFormatRegular } from "../customTemplateComponents/formats/thoughtFormats/ThoughtBubbleFormatRegular";

export const InteractionSwitch: React.FC<Message> = (props) => {
  //This can maybe be done in a reducer
  switch (props.format[0]) {
    case "NARRATIVE":
      switch (props.format[1]) {
        case "Default Narrative":
          return <p>{props.content}</p>;
        case "Narrative 1":
          return <p>{props.content}</p>;
        default:
          return <p>default narrative</p>;
      }
    case "TEXTMESSAGE":
      switch (props.format[1]) {
        case "Default Textmessage":
          return (
            <TextMessageFormatRegular
              id={props.id}
              content={props.content}
              format={props.format}
              person={props.person}
            />
          );
        case "Textmessage 1":
          return <p>{props.content}</p>;
        default:
          return <p>default textmessage</p>;
      }
    case "DIALOG":
      switch (props.format[1]) {
        case "SpeechBubbleChat":
          return (
            <SpeechBubbleChat
              id={props.id}
              format={props.format}
              content={props.content}
              person={props.person}
            />
          );
        case "Dialog Option 2":
          return <p>{props.content}</p>;
        default:
          return <p>default dialog</p>;
      }
    case "THOUGHT":
      switch (props.format[1]) {
        case "ThoughtBubbleChat":
          return (
            <ThoughtBubbleFormatRegular
              id={props.id}
              format={props.format}
              content={props.content}
              person={props.person}
            />
          );
        case "Thought 1":
          return <p>{props.content}</p>;
        default:
          return <p>default thought</p>;
      }
    case "SHOUT":
      switch (props.format[1]) {
        case "ShoutBubbleChat":
          return <p>{props.content}</p>;
        case "Shout 1":
          return <p>{props.content}</p>;
        default:
          return <p>default shout</p>;
      }
    default:
      return <p>default none</p>;
  }
};
