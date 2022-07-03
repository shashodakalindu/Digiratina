import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

function HomeCarousel(props) {
  var items = [
    {
      name: "We are the elite of digital transformation professionals providing software engineering services",
      img_src: "https://ifsolutions.icu/projects/kalindu/home-cover-one.png"
    },
    {
      name: "Bringing dependable, flexible and cost effective offshore custom software development, consulting and IT outsourcing services to your doorstep",
      img_src: "https://ifsolutions.icu/projects/kalindu/home-cover-four.jpg"
    },
    {
      name: "Helping you outperform the competition with insight by reducing cost and time to market",
      img_src: "https://ifsolutions.icu/projects/kalindu/home-cover-three.jpg"
    },
    {
      name: "Your trusted technology services partner that helps resolve your information technology challenges",
      img_src: "https://ifsolutions.icu/projects/kalindu/home-cover-four.jpg"
    }
  ];

  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  img_responsive: {
    height: "auto",
    width: "100%",
  },
  sec: {
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform:"translate(-50%, -50%)",
    color: "#fff"
  }
});

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.sec}>
        <Typography variant="h4" style={{textAlign: 'center', background: "#ffffff26", borderRadius: "20px", padding: '2%'}}>{props.item.name}</Typography>
      </div>

      <img className={classes.img_responsive} src={props.item.img_src} alt="" />
    </Paper>
  );
}

export default HomeCarousel;

