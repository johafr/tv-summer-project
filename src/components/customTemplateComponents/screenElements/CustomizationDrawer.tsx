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
      <CustomizeHeader>Customize</CustomizeHeader>
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
              <StylesContainer>
                {format.styles.map((style: StyleProps) => (
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
                ))}
              </StylesContainer>
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

const StyleBody = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "aliceblue" : "white")};
  &:hover {
    background-color: #d3d3d3;
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

const CustomizeHeader = styled.h2`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  min-width: 20%;
  height: 3rem;
`;

const StylesContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  margin-left: 1px;
  margin-right: 1px;
  padding: 5px;
`;
