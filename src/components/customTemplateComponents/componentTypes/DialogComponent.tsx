import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ComponentProps } from "../../../atoms/components";
import { activeVersion } from "../../../selectors/components";

export const Component = () => {
  const currentVersion = useRecoilValue(activeVersion);

  return (
    <Body inputVariables={currentVersion}>
      <Text>This is the {currentVersion.name} version</Text>
    </Body>
  );
};

const Body = styled.span<{ inputVariables: ComponentProps }>`
  //not changeable variables
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  //changeable variables
  width: ${(props) => props.inputVariables.width}rem;
  border-radius: ${(props) => props.inputVariables.borderRadius}rem;
  background-color: ${(props) => props.inputVariables.backgroundColor};
`;

const Text = styled.p``;
