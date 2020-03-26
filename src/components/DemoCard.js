import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CommentTwoTone from "@material-ui/icons/CommentTwoTone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: "flex"
    },
    leftPanel: {
      display: "flex",
      flexDirection: "column",
      width: "60px",
      marginRight: "40px",
      alignItems: "center"
    },
    root: {
      maxWidth: 700,
      border: "1px solid grey",
      marginBottom: "20px"
    },
    media: {
      height: "300px",
      width: "100%"
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    },
    button: {
      width: 40,
      height: 40,
      borderRadius: 4,
      marginBottom: 20,
      cursor: "pointer"
    }
  })
);

const DemoCard = ({info}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [popCount, setPopCount] = useState(info.popCount);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePopUp = () => {
    setPopCount(popCount + 1);
  };

  const handlePopDown = () => {
    setPopCount(popCount > 1 ? popCount - 1 : 0);
  };
  return (
    <div className={classes.main}>
      <div className={classes.leftPanel}>
        <span
          style={{ fontSize: "18px", marginTop: "30px", marginBottom: "30px" }}
        >
          {popCount}
        </span>
        <button className={classes.button} onClick={handlePopUp}>
          <ArrowDropUpIcon />
        </button>
        <button className={classes.button} onClick={handlePopDown}>
          <ArrowDropDownIcon />
        </button>
      </div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={info.title}
        />
        <CardContent>
          <Typography variant="h5" color="textPrimary" component="header">
            {info.body}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {info.description}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={info.imageURL}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <CommentTwoTone />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <MoreHorizIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {info.method}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default DemoCard;