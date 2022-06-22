import styled from "styled-components";
import { DisplayMeasurements } from "../../atoms/measurements";

export const OutputScreen = styled.div<{ measurements: DisplayMeasurements }>`
  width: ${(props) => props.measurements.width}px;
  height: ${(props) => props.measurements.height}px;
  border-radius: 10px;
  background-color: white;
  margin-top: 0%;
  border: 1px solid black;
`;

export const Bump = styled.span`
  position: absolute;
  left: 50%;
  width: 100px;
  height: 15px;
  margin-left: -50px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #333333;
`;

export const Screen = styled.div<{ measurements: DisplayMeasurements }>`
  position: relative;
  width: ${(props) => props.measurements.width + 100}px;
  left: 50%;
  margin-left: ${(props) => -props.measurements.width / 2 - 50}px;
  height: 90vh;
  justify-content: space-between;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ContentDiv = styled.div<{ measurements: DisplayMeasurements }>`
  width: ${(props) => props.measurements.width - 20}px;
  height: ${(props) => props.measurements.height - 30}px;
  margin-top: 20px;
  margin-left: 10px;
  background-color: #d3d3d3;
  color: black;
`;
