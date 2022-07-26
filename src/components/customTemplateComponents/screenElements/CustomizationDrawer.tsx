import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  ComponentFormat,
  updateCurrentActiveFormat,
} from "../../../atoms/template";
import {
  activeFormat,
  activeCommunicationCategory,
} from "../../../selectors/template";
import { drawerWidth } from "./ElementsDrawer";

export const CustomizationDrawer = () => {
  const { currentInteraction, currentInteractionFormats } = useRecoilValue(
    activeCommunicationCategory
  );
  const { currentFormat } = useRecoilValue(activeFormat);

  const handleCheckIfFormatIsSelected = (format: ComponentFormat) => {
    return currentFormat ? currentFormat === format : false;
  };

  const handleUpdateActiveFormat = (format: ComponentFormat) => {
    updateCurrentActiveFormat(
      currentInteraction!.premadeFormats.findIndex(
        (currentFormat: ComponentFormat) => currentFormat === format
      )
    );
  };

  return (
    <Drawer>
      <CustomizeHeader>Customize</CustomizeHeader>
      <ElementHeader>Formats</ElementHeader>
      <>
        {currentInteractionFormats.map((format: ComponentFormat) => (
          <Format key={format.formatName}>
            <FormatHeader
              active={handleCheckIfFormatIsSelected(format)}
              onClick={() => handleUpdateActiveFormat(format)}
            >
              {format.formatName}
            </FormatHeader>
          </Format>
        ))}
      </>
      <ElementHeader>Customize</ElementHeader>
      <CustomizeFieldBody>
        <p>This is to customize</p>
      </CustomizeFieldBody>
    </Drawer>
  );
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  box-shadow: var(--right-shadow-elevation-low);
`;
const ElementHeader = styled.h3`
  justify-content: center;
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin: 0;
`;

const Format = styled.div``;

const FormatHeader = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#d3d3d3" : "white")};
  &:hover {
    background-color: #d3d3d3;
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
`;

const CustomizeHeader = styled.h2`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  min-width: 20%;
  height: 3rem;
`;
