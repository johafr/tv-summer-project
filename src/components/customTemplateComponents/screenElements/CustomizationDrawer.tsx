import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  FormatProps,
  StyleProps,
  updateActiveStyle,
  updateCurrentActiveFormat,
} from "../../../atoms/interactionComponents";
import {
  activeFormat,
  activeInteraction,
} from "../../../selectors/interactionComponents";
import { drawerWidth } from "./ElementsDrawer";

export const CustomizationDrawer = () => {
  const { currentInteraction, currentInteractionFormats } =
    useRecoilValue(activeInteraction);
  const { currentFormat, selectedStyle } = useRecoilValue(activeFormat);

  const handleCheckIfFormatIsSelected = (format: FormatProps) => {
    return currentFormat ? currentFormat === format : false;
  };

  const handleUpdateActiveStyle = (newStyleIndex: number) => {
    updateActiveStyle(newStyleIndex);
  };

  const handleUpdateActiveFormat = (format: FormatProps) => {
    updateCurrentActiveFormat(
      currentInteraction!.premadeFormats.findIndex(
        (currentFormat: FormatProps) => currentFormat === format
      )
    );
    updateActiveStyle(0);
  };

  return (
    <Drawer>
      <ElementHeader>Formats</ElementHeader>
      <>
        {currentInteractionFormats.map((format: FormatProps) => (
          <Format key={format.formatName}>
            <FormatHeader
              active={handleCheckIfFormatIsSelected(format)}
              onClick={() => handleUpdateActiveFormat(format)}
            >
              {format.formatName}
            </FormatHeader>
            {handleCheckIfFormatIsSelected(format) ? (
              format.styles.map((style: StyleProps) => (
                <StyleBody
                  key={style.id}
                  active={selectedStyle ? selectedStyle === style : false}
                  onClick={() =>
                    handleUpdateActiveStyle(
                      format.styles.findIndex(
                        (formatStyle) => style === formatStyle
                      )
                    )
                  }
                >
                  {style.version}
                </StyleBody>
              ))
            ) : (
              <></>
            )}
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
  margin: 0.6rem;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  font-size: small;
  cursor: pointer;
  height: 1.5rem;
`;
