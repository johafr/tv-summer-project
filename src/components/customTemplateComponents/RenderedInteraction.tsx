import { useRecoilValue } from "recoil";
import { CommunicationCategory } from "../../atoms/template";
import { activeCommunicationCategory } from "../../selectors/template";

export const RenderedInteraction = (interactionType: string) => {
  const { currentInteraction } = useRecoilValue(activeCommunicationCategory);

  const DisplayInteraction = (interaction: CommunicationCategory) => {};

  return <>{DisplayInteraction(currentInteraction!)}</>;
};
