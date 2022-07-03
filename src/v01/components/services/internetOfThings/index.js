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

function InternetOfThings() {
  const classes = useStyles();

  return (
    <Container sx={{ pb: 5 }}>
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
              Internet of things
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
              Digiratina’s IoT experts are complimented by vertical domain
              expertise together with engineering, analytics, consulting &
              application skills having end-to-end capabilities with sensors,
              gateways, connectivity, middleware platforms, machine learning &
              artificial intelligence, which enables us to create digital
              transformation in a hyper-connected world to give actionable
              insights to clients.
              <br /> <br />
              We understand that IoT applications need a carefully customized
              and precise approach, based on individual client requirements, to
              maximize customer value. Our strong expertise in these related
              areas enable us to ensure smooth running of IoT in your company
              via integrated operations platform, enterprise information,
              process management and IoT platform support services that help you
              have a future-ready business.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InternetOfThings;
