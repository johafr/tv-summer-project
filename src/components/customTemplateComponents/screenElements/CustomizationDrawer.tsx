import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { StyleProps } from "../../../atoms/interactionComponents";
import { activeFormat } from "../../../selectors/interactionComponents";
import { drawerWidth } from "./ElementsDrawer";

export const CustomizationDrawer = () => {
  const [activeStyle, setActiveStyle] = useState<StyleProps | null>(null);
  const { currentFormat } = useRecoilValue(activeFormat);

  const handleUpdateActiveStyle = () => {
    console.log("activeStyle set");
    setActiveStyle(null);
  };

  const handleUpdateActiveFormat = () => {
    console.log("Format updated");
  };

  return (
    <Drawer>
      <ElementHeader>Formats</ElementHeader>
      <Format>
        <FormatHeader active={true} onClick={handleUpdateActiveFormat}>
          First
        </FormatHeader>
        {true ? (
          <>
            <StyleBody active={false} onClick={handleUpdateActiveStyle}>
              DEFAULT "First"
            </StyleBody>
            <StyleBody active={true} onClick={handleUpdateActiveStyle}>
              CUSTOM "First" 1
            </StyleBody>
            <StyleBody active={false} onClick={handleUpdateActiveStyle}>
              CUSTOM "First" 2
            </StyleBody>
          </>
        ) : (
          <></>
        )}
      </Format>
      <Format>
        <FormatHeader active={false} onClick={handleUpdateActiveFormat}>
          Second
        </FormatHeader>
        {false ? (
          <>
            <StyleBody active={true} onClick={handleUpdateActiveStyle}>
              DEFAULT "Second"
            </StyleBody>
            <StyleBody active={false} onClick={handleUpdateActiveStyle}>
              Custom "Second" 1
            </StyleBody>
          </>
        ) : (
          <></>
        )}
      </Format>
      <ElementHeader>Customize</ElementHeader>
      <CustomizeFieldBody>
        <p>This is to customize</p>
      </CustomizeFieldBody>
    </Drawer>
  );
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  background-color: #d3d3d3;
  border-left: 1px solid black;
`;
const ElementHeader = styled.h3`
  justify-content: center;
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  background-color: antiquewhite;
  margin: 0;
`;

const Format = styled.div`
  border-bottom: 1px solid grey;
  background-color: aliceblue;
`;

const FormatHeader = styled.div<{ active: boolean }>`
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

const CustomizeFieldBody = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

const StyleBody = styled.div<{ active: boolean }>`
  background-color: aliceblue;
  background-color: ${(props) => (props.active ? "lightgreen" : "aliceblue")};
  &:hover {
    background-color: lightblue;
  }
  margin: 0.3rem;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
