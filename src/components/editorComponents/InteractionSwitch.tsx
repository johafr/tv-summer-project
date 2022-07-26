import React from "react";
import { Message } from "../../atoms/stories";
import { SpanCardChat } from "../customTemplateComponents/formats/SpanCardChat";
import { SpeechBubbleChat } from "../customTemplateComponents/formats/dialogFormats/SpeechBubbleChat";
import { ThoughtBubbleChat } from "../customTemplateComponents/formats/ThoughtBubbleChat";
import { getAllFormats } from "../../atoms/template";

export const InteractionSwitch: React.FC<Message> = (props) => {
  const formats = getAllFormats(props.format[0])!;

  switch (props.format[0]) {
    case "DIALOG":
      switch (formats[0].formatName) {
        case "SpeechBubbleChat":
          return (
            <SpeechBubbleChat
              id={props.id}
              format={props.format}
              content={props.content}
              person={props.person}
            />
          );
        default:
          return <p>default</p>;
      }
    case "THOUGHT":
      return (
        <ThoughtBubbleChat
          id={props.id}
          format={props.format}
          content={props.content}
          person={props.person}
        />
      );
    case "NARRATIVE": // Er bare spancard, evt replace med noe annen styling senere
      return <SpanCardChat text="test"></SpanCardChat>;
    default:
      return <p>default</p>;
  }
};
