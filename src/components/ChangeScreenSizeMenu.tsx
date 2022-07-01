import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as S from "../styles/components/ChangeScreenSizeMenuStyles";
import {
  DisplayMeasurements,
  measurementsList,
  screenMeasurements,
} from "../atoms/measurements";
import { useRecoilState } from "recoil";

export const ChangeScreenSizeMenu: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [, setScreenSize] = useRecoilState(screenMeasurements);

  const handleOpenModal = () => {
    setClicked(!clicked);
  };

  const handleChangeScreenSize = (premade: string | null) => {
    const newScreen = measurementsList.find(
      (format: DisplayMeasurements) => format.id === premade
    )!;
    setScreenSize(newScreen);
  };

  return (
    <div className="menu-container">
      {clicked ? (
        <S.Table>
          <S.TableHeader>
            <S.SpanHeader>Change screen format</S.SpanHeader>
            <KeyboardArrowDownIcon
              sx={{ marginRight: 1, color: "black" }}
              onClick={() => setClicked(false)}
            />
          </S.TableHeader>
          <S.TableBody>
            {measurementsList.map((display: DisplayMeasurements) => {
              return (
                <S.ContentRow
                  onClick={() => handleChangeScreenSize(display.id)}
                >
                  {display.id ? display.id : "custom"}
                </S.ContentRow>
              );
            })}
          </S.TableBody>
          <S.TableFooter>
            <S.CloseButton onClick={() => setClicked(false)}>
              Close
            </S.CloseButton>
          </S.TableFooter>
        </S.Table>
      ) : (
        <S.Button onClick={handleOpenModal}>
          <MenuIcon sx={{ color: "#adadad" }} />
        </S.Button>
      )}
    </div>
  );
};
