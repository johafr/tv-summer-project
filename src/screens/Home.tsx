import React, { useEffect } from "react";
import { StoryCard } from "../components/homeComponents/StoryCard";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activePageIndex,
  activeStoryIndex,
  storiesState,
} from "../atoms/stories";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { usernameState } from "../atoms/username";

export const Home: React.FC = () => {
  const stories = useRecoilValue(storiesState);
  const [, setStoryIndex] = useRecoilState(activeStoryIndex);
  const [, setPageIndex] = useRecoilState(activePageIndex);

  useEffect(() => {
    setStoryIndex(-1);
    setPageIndex(0);
  }, []);

  return (
    <ScreenDiv>
      <Grid
        container
        sx={{
          width: "100%",
        }}
      >
        {stories.stories.map((story) => (
          <Grid
            item
            xs={3.5}
            sx={{ marginTop: "2rem", marginLeft: "1rem" }}
            key={story.id}
          >
            <StoryCard story={story} />
          </Grid>
        ))}
      </Grid>
    </ScreenDiv>
  );
};

const ScreenDiv = styled.div`
  width: 100%;
  background-color: #d3d3d3;
  height: 100%;
  min-height: 92.3vh;
`;
