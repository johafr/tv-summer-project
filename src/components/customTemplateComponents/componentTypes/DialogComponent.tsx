import { useRecoilState } from "recoil";
import styled from "styled-components";
import { DialogProps } from "../../../atoms/components";

export const DialogComponent = () => {
  return (
    <DialogBody>
      <DialogText>This is the version</DialogText>
    </DialogBody>
  );
};

const DialogBody = styled.span<{}>`
  //not changeable variables
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  //changeable variables
`;

const DialogText = styled.p``;
