import { useRecoilValue } from "recoil";
import { InteractionProps } from "../../atoms/interactionComponents";
import {
  activeFormat,
  activeInteraction,
} from "../../selectors/interactionComponents";
import { SpeechBubbleChat } from "./formats/dialogFormats/SpeechBubbleChat";
import { ThoughtBubbleChat } from "./formats/ThoughtBubbleChat";

export const RenderedInteraction = () => {
  const { selectedStyle, currentFormat } = useRecoilValue(activeFormat);
  const { currentInteraction } = useRecoilValue(activeInteraction);

  const DisplayInteractionType = (interaction: InteractionProps | null) => {
    if (!currentFormat) {
      return <p>None selected</p>;
    }
    switch (currentFormat.formatName) {
      case "SpeechBubbleChat":
        return (
          <SpeechBubbleChat
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            inputVariables={selectedStyle!}
          />
        );
      case "ThoughtBubbleChat":
        return (
          <ThoughtBubbleChat
            inputVariables={selectedStyle!}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        );
      default:
        return <p>DefaultCase</p>;
    }
  };

  const DisplayInteraction = (interaction: InteractionProps) => {};

  return <>{DisplayInteractionType(currentInteraction)}</>;
};
