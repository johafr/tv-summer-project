import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { FormatProps } from "../../../atoms/interactionComponents";
import { activeFormat } from "../../../selectors/interactionComponents";

export const CustomComponent = () => {
  const { currentFormat } = useRecoilValue(activeFormat);

  return (
    <>
      {currentFormat ? (
        <Body inputVariables={currentFormat}>
          <Text>This is the {currentFormat.formatName} version</Text>
        </Body>
      ) : (
        <></>
      )}
    </>
  );
};

const Body = styled.span<{ inputVariables: FormatProps }>`
  //not changeable variables
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  //changeable variables
  width: ${(props) => props.inputVariables.styles[0].width}%;
  border-radius: ${(props) => props.inputVariables.styles[0].borderRadius}rem;
  background-color: ${(props) =>
    props.inputVariables.styles[0].backgroundColor};
`;

const Text = styled.p``;
