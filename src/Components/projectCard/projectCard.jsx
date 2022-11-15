import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image1 from "../../Assets/board.png";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={image1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ricochet Robots
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A simple implementation of Alex Randolph's board game Ricochet Robots
          including solver. This game is witten in JAVA. Where I learned some of
          the major algorithms in Computer science, one of such is "Find and
          hunt" algorithum. Over this I built an AI that can give the solution
          of the puzzle. The most intresting part was to learn how to build the
          GUI and the "back-end" supporting it. All the updates were done
          periodically in 4 different Iteration. This Project is hosted on
          Github, which leads me to learn the version control language, git. The
          whole design was created by me and all the code was led by me.
          SOFTWARE USED: Eclipse, IntelliJ. Language: Java. VERSION CONTROL
          LANGUAGE: Git HOSTED: Github
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://github.com/djgrillopena/comp2005-winter20-group11"><Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  );
}
