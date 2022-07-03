import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Divider } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

//imported from static
import contentImage from "../../../static/images/services/service-two.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    borderTopLeftRadius: "30px",
    borderBottomRightRadius: "30px",
  },
  typography: {
    fontFamily: "'Noto Sans', sans-serif !important",
    color: "#dcdce0e6",
    lineHeight: "1.4",
  },
  contentImage: {
    display: "block",
    margin: "auto",
  },
}));

function QualityEngineering() {
  const classes = useStyles();

  return (
    <Container sx={{ pt: 5 }}>
      <Grid container spacing={8} justify="center" textAlign="justify">
        <Grid item xs={12} sm={7}>
          <div>
            <Typography
              variant="h5"
              color="white"
              textAlign="center"
              letterSpacing="2px"
              sx={{ pb: 1, fontSize: "2rem" }}
            >
              Quality Engineering & Assurance
            </Typography>
            <Divider
              sx={{
                "&::before, &::after": {
                  borderColor: "#f15625",
                },
                pb: 2,
                width: "50%",
                margin: "auto",
              }}
            >
              <DiamondOutlinedIcon style={{ color: "#fff" }} />
            </Divider>
            <Typography variant="p" className={classes.typography}>
              Our Quality Assurance (QA) and Independent Testing services ensure
              that applications are rigorously tested using industry-standard
              testing methods and QA processes.
              <br /> <br />
              We rely on people and processes to build an offshore testing plan
              for our clients, by following rigorous testing procedures &
              standards, and work in a structured environment A wide range of
              manual and automated testing services are available for multiple
              technologies and platforms.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} display="block" margin="auto">
          <img
            src={contentImage}
            alt="Logo"
            width={"80%"}
            className={classes.contentImage}
          ></img>
        </Grid>
      </Grid>
    </Container>
  );
}

export default QualityEngineering;
