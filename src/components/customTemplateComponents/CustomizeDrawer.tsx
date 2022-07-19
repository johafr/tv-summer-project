import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  dialogComponentState,
  dialogComponentVersions,
  DialogProps,
} from "../../atoms/components";

export const CustomizeDrawer = () => {
  const [variations] = useRecoilState(dialogComponentVersions);
  const [, setDialogState] = useRecoilState(dialogComponentState);

  const handleUpdateVariation = (newState: DialogProps) => {
    setDialogState(newState);
  };

  return (
    <Drawer>
      <CustomizeHeader>Customize</CustomizeHeader>
      <ElementHeader>Premade</ElementHeader>
      {variations.map((component: DialogProps) => (
        <ComponentBody onClick={() => handleUpdateVariation(component)}>
          <p>{component.name}</p>
        </ComponentBody>
      ))}
    </Drawer>
  );
};

const Drawer = styled.div`
  width: 20%;
  background-color: #d3d3d3;
  border-left: 1px solid black;
`;

const ElementHeader = styled.h3`
  justify-content: center;
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid black;
  background-color: antiquewhite;
  margin: 0;
`;

const CustomizeHeader = styled.h2`
  justify-content: center;
  display: flex;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  margin: 0;
  background-color: blueviolet;
`;

const ComponentBody = styled.div`
  background-color: aliceblue;
  &:hover {
    background-color: blue;
  }
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
`;
