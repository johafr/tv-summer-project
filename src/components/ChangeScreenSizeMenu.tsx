import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as S from "../styles/components/ChangeScreenSizeMenuStyles";
import { screenMeasurements } from "../atoms/measurements";
import { useRecoilState } from "recoil";
import { iphoneEight } from "../atoms/measurements";

export const ChangeScreenSizeMenu: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useRecoilState(screenMeasurements);

  const handleOpenModal = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {clicked ? (
        <S.Table>
          <S.TableHeader>
            <S.SpanHeader style={{ color: "black" }}>
              Change screen format
            </S.SpanHeader>
            <KeyboardArrowDownIcon
              sx={{ marginRight: 1, color: "black" }}
              onClick={() => setClicked(false)}
            />
          </S.TableHeader>
          <S.TableBody>
            <S.ContentRow>Iphone 13</S.ContentRow>
            <S.ContentRow>Ipad</S.ContentRow>
            <S.ContentRow>Samsung galaxy 10</S.ContentRow>
            <S.ContentRow>Desktop</S.ContentRow>
            <S.ContentRow onClick={() => setScreenSize(iphoneEight)}>
              iPhone 8
            </S.ContentRow>
          </S.TableBody>
          <S.TableFooter>
            <S.CloseButton onClick={() => setClicked(false)}>
              Close
            </S.CloseButton>
          </S.TableFooter>
        </S.Table>
      ) : (
        <S.Button onClick={handleOpenModal}>
          <MenuIcon sx={{ color: "white" }} />
        </S.Button>
      )}
    </>
  );
};
