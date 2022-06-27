import { atom, RecoilState } from "recoil";

export type DisplayMeasurements = {
  id: string | null;
  width: number;
  height: number;
};

export const measurementsList: DisplayMeasurements[] = [
  {
    id: "iphone 13",
    width: 195,
    height: 422,
  },
  {
    id: "iphone 8",
    width: 375 / 1.5,
    height: 767 / 1.5,
  },
  {
    id: "desktop",
    width: 1920 * 0.39,
    height: 1080 * 0.39,
  },
  {
    id: "ipad",
    width: 1536 * 0.2,
    height: 2048 * 0.2,
  },
];

export const screenMeasurements: RecoilState<DisplayMeasurements> = atom({
  key: "Measurements",
  default: measurementsList[0],
});
