import { useRecoilValue } from "recoil";
import { CommunicationCateogry } from "../../atoms/template";
import { activeCommunicationCategory } from "../../selectors/template";

export const RenderedInteraction = (interactionType: string) => {
  const { currentInteraction } = useRecoilValue(activeCommunicationCategory);

  const DisplayInteraction = (interaction: CommunicationCateogry) => {};

  return <>{DisplayInteraction(currentInteraction!)}</>;
};
