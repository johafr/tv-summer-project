import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dialogComponentState, DialogProps } from "../../../atoms/components";

export const DialogComponent = () => {
  const [dialogState] = useRecoilState(dialogComponentState);
  return (
    <DialogBody dialogState={dialogState}>
      <DialogText>This is the {dialogState.name} version</DialogText>
    </DialogBody>
  );
};

const DialogBody = styled.span<{ dialogState: DialogProps }>`
  //not changeable variables
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  //changeable variables
  max-width: ${(props) => props.dialogState.width}rem;
  border-radius: ${(props) => props.dialogState.borderRadius}rem;
  background-color: ${(props) => props.dialogState.backgroundColor};
`;

const DialogText = styled.p``;
