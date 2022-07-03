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

function BusinessConsulting() {
  const classes = useStyles();

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={8} justify="center" textAlign="justify">
        <Grid item xs={12} sm={5}>
          <img
            src={contentImage}
            alt="Logo"
            width={"80%"}
            className={classes.contentImage}
          ></img>
        </Grid>
        <Grid item xs={12} sm={7} display="block" margin="auto">
          <div>
            <Typography
              variant="h5"
              color="white"
              textAlign="center"
              letterSpacing="2px"
              sx={{ pb: 1, fontSize: "2rem" }}
            >
              Business Consulting
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
              Digiratina’s experienced business consulting professionals work
              with organizations delivering human-centric, digital solutions to
              transform business into IT systems by working closely with the
              business leaders, end users and the software engineering team.
              <br /> <br />
              We analyze businesses, gather requirements and recommend solutions
              which enable companies meet their goals, improve performance and
              efficiency. And we also help them confront digital disruption by
              reframing the business they are in, engage people and uncover
              insights from data to shape the products, services and experiences
              they offer.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BusinessConsulting;
