import { atom } from "recoil";
import { setRecoil } from "recoil-nexus";

interface screenDimensions {
  winWidth: number;
  winHeight: number;
}

export const screenDimensions = atom<screenDimensions>({
  key: "screenDimensions",
  default: { winWidth: window.innerWidth, winHeight: window.innerHeight },
});

export const renderScreen = () => {
  setRecoil(screenDimensions, {
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
};
