import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { stories as s, addStoryToStories } from "../atoms/stories";
import { Story } from "../atoms/story";
import { numWordsInStory } from "../selectors/story";

type StoryCardProps = {
  story: Story;
};

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const [stories] = useRecoilState(s);
  const numWords = useRecoilValue(numWordsInStory);

  return (
    <Container>
      <Card>
        <CardHeader
          title={story.name}
          sx={{ borderBottom: "1px solid black" }}
        />
        <CardMedia
          component="img"
          alt="placeholder"
          sx={{ borderBottom: "1px solid black" }}
        />
        <CardContent>
          <p>Last edited: "variable"</p>
          <p>Num words: {numWords}</p>
          <NavLink to={"/story:" + story.id + "/editor"}>
            <button>Enter {story.name}</button>
          </NavLink>
        </CardContent>
      </Card>
    </Container>
  );
};
