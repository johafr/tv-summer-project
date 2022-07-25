import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ComponentFormat } from "../../../atoms/template";
import { activeFormat } from "../../../selectors/template";

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

const Body = styled.span<{ inputVariables: ComponentFormat }>`
  //not changeable variables
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  //changeable variables
  width: 51%;
  border-radius: 5rem;
  background-color: white;
`;

const Text = styled.p``;
