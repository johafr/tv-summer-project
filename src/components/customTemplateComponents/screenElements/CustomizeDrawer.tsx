import { useRecoilState } from "recoil";
import styled from "styled-components";
import { DialogProps } from "../../../atoms/components";

export const CustomizeDrawer = () => {
  return (
    <Drawer>
      <ElementHeader>Premade</ElementHeader>
      {/* <ComponentBody>
        <p>component name</p>
      </ComponentBody> */}
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
