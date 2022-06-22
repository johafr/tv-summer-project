import { atom, RecoilState } from "recoil";

export type DisplayMeasurements = {
  premade?: string;
  width: number;
  height: number;
};

const defaultMeasurements: DisplayMeasurements = {
  premade: "iphone 13",
  width: 195 * 1.5,
  height: 422 * 1.5,
};

export const screenMeasurements: RecoilState<DisplayMeasurements> = atom({
  key: "Measurements",
  default: defaultMeasurements,
});
