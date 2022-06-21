import { atom, RecoilState } from "recoil";

export type DisplayMeasurments = {
  premade?: string;
  width: number;
  height: number;
};

const defaultMeasurments: DisplayMeasurments = {
  premade: "iphone 13",
  width: 195,
  height: 422,
};

export const screenMeasurments: RecoilState<DisplayMeasurments> = atom({
  key: "Measurments",
  default: defaultMeasurments,
});
