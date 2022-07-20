import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ComponentProps, updateVersion } from "../../../atoms/components";
import { activeComponent } from "../../../selectors/components";

export const CustomizeDrawer = () => {
  const { currentComponent, currentComponentVersions } =
    useRecoilValue(activeComponent);

  const checkActive = (id: number) => {
    const active = id === currentComponent!.activeVersionIndex;
    return active;
  };

  return (
    <Drawer>
      <ElementHeader>Premade</ElementHeader>
      {currentComponentVersions.map((version: ComponentProps) => (
        <ComponentBody
          active={checkActive(version.id)}
          onClick={() => updateVersion(version.id)}
        >
          {version.name}
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

const ComponentBody = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#a0a0a0" : "aliceblue")};
  &:hover {
    background-color: #a0a0a0;
  }
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  height: 2.5rem;
`;
