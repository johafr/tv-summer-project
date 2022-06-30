import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Story } from "../atoms/story";
import { numWordsInStory } from "../selectors/story";
import Placeholder from "../images/placeholder.png";
import "../styles/components/StoryCard.css";

type StoryCardProps = {
  story: Story;
};

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const numWords = useRecoilValue(numWordsInStory);

  return (
    <NavLink to={"/story:" + story.id + "/editor"} className="NavLink">
      <Container>
        <Card
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            "&:hover": {
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            },
          }}
        >
          <CardHeader title={story.name} />
          <CardMedia
            component="img"
            image={Placeholder}
            alt="placeholder"
            sx={{
              borderRadius: "3px",
              width: "100%",
            }}
          />
          <CardContent>
            <p>Last edited: "variable"</p>
            <p>Num words: {numWords}</p>
          </CardContent>
        </Card>
      </Container>
    </NavLink>
  );
};
