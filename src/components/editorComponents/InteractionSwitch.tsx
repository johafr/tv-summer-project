import React from "react";
import { Message } from "../../atoms/stories";
import { SpeechBubbleChat } from "../customTemplateComponents/formats/dialogFormats/SpeechBubbleChat";
import { ThoughtBubbleChat } from "../customTemplateComponents/formats/thoughtFormats/ThoughtBubbleChat";
import { ThoughtBubbleFormatRegular } from "../customTemplateComponents/formats/thoughtFormats/ThoughtBubbleFormatRegular";
import { TextMessageFormatRegular } from "../customTemplateComponents/formats/textMessageFormats/TextMessageFormatRegular";
import { DialogFormatRegular } from "../customTemplateComponents/formats/dialogFormats/DialogFormatRegular";
import { NarrativeFormatRegular } from "../customTemplateComponents/formats/narrativeFormats/NarrativeFormatRegular";
import { DialogFormatTextHeavyLarge } from "../customTemplateComponents/formats/dialogFormats/DialogFormatTextHeavyLarge";
import { DialogFormatTextHeavySmall } from "../customTemplateComponents/formats/dialogFormats/DialogFormatTextHeavySmall";
import { DialogFormatOutlined } from "../customTemplateComponents/formats/dialogFormats/DialogFormatOutlined";

export const InteractionSwitch: React.FC<Message> = (props) => {
  //This can maybe be done in a reducer
  switch (props.format[0]) {
    case "NARRATIVE":
      switch (props.format[1]) {
        case "Narrative (regular)":
          return (
            <NarrativeFormatRegular
              id={props.id}
              content={props.content}
              format={props.format}
              person={props.person}
            />
          );
        case "Narrative 1":
          return <p>{props.content}</p>;
        default:
          return <p>default narrative</p>;
      }
    case "TEXTMESSAGE":
      switch (props.format[1]) {
        case "Text Message (regular)":
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
        case "Speech Bubble (regular)":
          return (
            <DialogFormatRegular
              id={props.id}
              content={props.content}
              format={props.format}
              person={props.person}
            />
          );
        case "Speech Bubble (outlined)":
          return (
            <DialogFormatOutlined
              id={props.id}
              content={props.content}
              format={props.format}
              person={props.person}
            />
          );
        case "Text Heavy (large)":
          return (
            <DialogFormatTextHeavyLarge
              id={props.id}
              content={props.content}
              format={props.format}
              person={props.person}
            />
          );
        case "Text Heavy (small)":
          return (
            <DialogFormatTextHeavySmall
              id={props.id}
              content={props.content}
              format={props.format}
              person={props.person}
            />
          );
        default:
          return <p>default dialog</p>;
      }
    case "THOUGHT":
      switch (props.format[1]) {
        case "Thought Bubble (regular)":
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
