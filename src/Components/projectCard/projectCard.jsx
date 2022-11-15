import image1 from "../../Assets/board.png";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardInfo = [
    {
        title: "Ricochet Robots",
        subheader: "2-D Game",
        screenshot: image1,
        detail:'A simple implementation of Alex Randolph\'s board game Ricochet Robots including solver. This game is witten in JAVA. Where I learned some of the major algorithms in Computer science, one of such is "Find and hunt" algorithum. Over this I built an AI that can give the solution of the puzzle. The most intresting part was to learn how to build the GUI and the "back-end" supporting it. All the updates were done periodically in 4 different Iteration. This Project is hosted on Github, which leads me to learn the version control language, git. The whole design was created by me and all the code was led by me.',
        
    },
  ];
  const cardcmpt = null;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Ricochet Robots" subheader="2-D Game" />
      <CardMedia
        component="img"
        height="300"
        image={image1}
        alt="Paella dish"
      />
      <CardContent>
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
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
