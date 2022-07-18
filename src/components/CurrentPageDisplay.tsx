import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { DisplayMeasurements, screenMeasurements } from "../atoms/measurements";
import { activePageIndex } from "../atoms/stories";
import { activeStoryStats } from "../selectors/stories";

export const CurrentPageDisplay: React.FC = () => {
  const pageNum = useRecoilValue(activePageIndex)!;
  const { numPages } = useRecoilValue(activeStoryStats);
  const [measurements] = useRecoilState(screenMeasurements);
  return (
    <StyledDiv measurements={measurements}>
      Page {pageNum + 1} of {numPages}
    </StyledDiv>
  );
};

const StyledDiv = styled.span<{ measurements: DisplayMeasurements }>`
  position: absolute;
  top: ${(props) => 570 - (570 - props.measurements.height) / 2 + 6}px;
  width: 100%;
  justify-content: center;
  display: flex;
`;
