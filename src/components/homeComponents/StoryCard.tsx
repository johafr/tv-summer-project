import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeStoryStats } from "../../selectors/stories";
import Placeholder from "../../images/placeholder.png";
import "../../styles/components/StoryCard.css";
import { activeStoryIndex, StoryProps } from "../../atoms/stories";
import { screenDimensions } from "../../atoms/screenDimensions";

type StoryCardProps = {
  story: StoryProps;
};

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const { numWords } = useRecoilValue(activeStoryStats);
  const [, setCurrentStoryIndex] = useRecoilState(activeStoryIndex);
  const screen = useRecoilValue(screenDimensions);

  const handleNavigate = () => {
    setCurrentStoryIndex(story.id);
  };

  return (
    <NavLink
      to={
        screen.winWidth > 650
          ? "/story:" + story.id + "/editor"
          : "/story:" + story.id + "/preview"
      }
      className="NavLink"
      onClick={handleNavigate}
    >
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
