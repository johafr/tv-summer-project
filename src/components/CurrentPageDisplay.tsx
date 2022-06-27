import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { DisplayMeasurements, screenMeasurements } from "../atoms/measurements";
import { activeIndex } from "../atoms/StoryPages";
import { getDisplayScreenLength } from "../selectors/StoryPages";

export const CurrentPageDisplay: React.FC = () => {
  const [pageNum] = useRecoilState(activeIndex);
  const numPages = useRecoilValue(getDisplayScreenLength);
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
