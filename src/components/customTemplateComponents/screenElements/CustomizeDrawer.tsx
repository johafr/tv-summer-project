import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  addFormatStyle,
  FormatProps,
  updateFormatStyles,
  updateSelectedFormat,
} from "../../../atoms/components";
import { activeFormat, activeInteraction } from "../../../selectors/components";
import { drawerWidth } from "./ElementsDrawer";

export const CustomizeDrawer = () => {
  const [customizedFormat, setCustomizedFormat] = useState<FormatProps | null>(
    null
  );
  const currentFormat = useRecoilValue(activeFormat);
  const { currentInteraction, currentInteractionFormats } =
    useRecoilValue(activeInteraction);

  const checkActive = (id: number) => {
    const active = id === currentInteraction!.activeFormatIndex;
    return active;
  };

  const addNewFormat = (newFormat: FormatProps) => {
    addFormatStyle(newFormat);
    updateSelectedFormat(newFormat.formatId);
  };

  const updateFormatColor = (color: string) => {
    const isInList = currentInteractionFormats.find(
      (format: FormatProps) => customizedFormat!.formatId === format.formatId
    );

    const newEntry = {
      version: "Custom 1",
      width: customizedFormat!.styles[0].width,
      borderRadius: customizedFormat!.styles[0].borderRadius,
      backgroundColor: color,
    };

    const newFormat: FormatProps = {
      ...customizedFormat!,
      styles: [...customizedFormat!.styles, newEntry],
    };
    isInList ? updateFormatStyles(newFormat) : addNewFormat(newFormat);
  };

  useEffect(() => {
    currentFormat === null
      ? setCustomizedFormat(null)
      : setCustomizedFormat(
          currentFormat?.formatName.includes("Custom")
            ? currentFormat
            : {
                ...currentFormat,
                formatName: "Custom " + currentFormat?.formatName,
                formatId: currentInteractionFormats[
                  currentInteractionFormats.length - 1
                ]
                  ? currentInteractionFormats[
                      currentInteractionFormats.length - 1
                    ].formatId + 1
                  : 0,
              }
        );
  }, [currentFormat, currentInteractionFormats]);

  return (
    <Drawer>
      {currentInteraction ? (
        <>
          <ElementHeader>Formats</ElementHeader>
          {currentInteractionFormats.length !== 0 ? (
            <>
              {currentInteractionFormats.map((format: FormatProps) => (
                <ComponentBody
                  key={format.formatId}
                  active={checkActive(format.formatId)}
                  onClick={() => updateSelectedFormat(format.formatId)}
                >
                  {format.formatName}
                </ComponentBody>
              ))}
            </>
          ) : (
            <></>
          )}

          <ElementHeader>Customize</ElementHeader>
          <CustomizeFieldBody>
            <button onClick={() => updateFormatColor("lightblue")}>blue</button>
            <button onClick={() => updateFormatColor("lightgreen")}>
              green
            </button>
          </CustomizeFieldBody>
        </>
      ) : (
        <></>
      )}
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

const CustomizeFieldBody = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;
