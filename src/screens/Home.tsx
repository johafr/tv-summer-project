import React from "react";
import { StoryCard } from "../components/StoryCard";
import { useRecoilState } from "recoil";
import { stories as s } from "../atoms/stories";
import styled from "styled-components";
import { Grid } from "@mui/material";

export const Home: React.FC = () => {
  const [stories] = useRecoilState(s);

  return (
    <ScreenDiv>
      <Grid
        container
        sx={{
          width: "88%",
          marginLeft: "6vw",
          justifyContent: "space-between",
        }}
      >
        {stories.stories.map((story) => (
          <Grid item xs={3.5} sx={{ marginTop: "1rem" }} key={story.id}>
            <StoryCard story={story} />
          </Grid>
        ))}
        {stories.stories.map((story) => (
          <Grid item xs={3.5} sx={{ marginTop: "1rem" }} key={story.id}>
            <StoryCard story={story} />
          </Grid>
        ))}
        {stories.stories.map((story) => (
          <Grid item xs={3.5} sx={{ marginTop: "1rem" }} key={story.id}>
            <StoryCard story={story} />
          </Grid>
        ))}
      </Grid>
      <p>this is a test</p>
    </ScreenDiv>
  );
};

const ScreenDiv = styled.div`
  width: 100%;
  background-color: #d3d3d3;
  height: 100%;
`;
