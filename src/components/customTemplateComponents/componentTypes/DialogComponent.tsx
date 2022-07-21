import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { FormatProps } from "../../../atoms/components";
import { activeFormat } from "../../../selectors/components";

export const Component = () => {
  const currentVersion = useRecoilValue(activeFormat)!;

  return (
    <Body inputVariables={currentVersion}>
      <Text>This is the {currentVersion.formatName} version</Text>
    </Body>
  );
};

const Body = styled.span<{ inputVariables: FormatProps }>`
  //not changeable variables
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  //changeable variables
  width: ${(props) => props.inputVariables.styles.width}rem;
  border-radius: ${(props) => props.inputVariables.styles.borderRadius}rem;
  background-color: ${(props) => props.inputVariables.styles.backgroundColor};
`;

const Text = styled.p``;
