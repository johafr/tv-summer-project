import React from "react";
import { Message } from "../../atoms/stories";
import { SpeechBubbleChat } from "../customTemplateComponents/formats/dialogFormats/SpeechBubbleChat";
import { ThoughtBubbleChat } from "../customTemplateComponents/formats/thoughtFormats/ThoughtBubbleChat";

export const InteractionSwitch: React.FC<Message> = (props) => {
  //This can maybe be done in a reducer
  switch (props.format[0]) {
    case "NARRATIVE":
      switch (props.format[1]) {
        case "Default Narrative":
          return <p>this is the default narrative</p>;
        case "Narrative 1":
          return <p>this is the Narrative 1 option</p>;
        default:
          return <p>default narrative</p>;
      }
    case "TEXTMESSAGE":
      switch (props.format[1]) {
        case "Default Textmessage":
          return <p>this is the default textmessage</p>;
        case "Textmessage 1":
          return <p>this is the textmessage 1</p>;
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
          return <p>this is the dialog option 2</p>;
        default:
          return <p>default dialog</p>;
      }
    case "THOUGHT":
      switch (props.format[1]) {
        case "ThoughtBubbleChat":
          return (
            <ThoughtBubbleChat
              id={props.id}
              format={props.format}
              content={props.content}
              person={props.person}
            />
          );
        case "Thought 1":
          return <p>this is the Thought 1 option</p>;
        default:
          return <p>default thought</p>;
      }
    case "SHOUT":
      switch (props.format[1]) {
        case "ShoutBubbleChat":
          return <p>this is the shoutBubbleCHat</p>;
        case "Shout 1":
          return <p>this is the shout 1</p>;
        default:
          return <p>default shout</p>;
      }
    default:
      return <p>default none</p>;
  }
};
