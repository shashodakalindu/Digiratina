import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Divider } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

//imported from static
import contentImage from "../../../static/images/services/service-one.png";

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

function Mobility() {
  const classes = useStyles();

  return (
    <Container sx={{ py: 5 }}>
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
              Mobility
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
              Mobility is at the core of the current wave of digital
              transformation. With the growing focus on omni channel delivery
              and the importance of a unified customer experience, there is an
              urgent need for organizations to design a well thought-through
              strategy and bring mobility to the forefront of their digital
              transformation initiatives.
              <br /> <br />
              The digital elites at Digiratina have a deep understanding of the
              mobile application development space with a dedicated mobile
              development team of experienced engineers who are on top of the
              latest technology, methodology and development frameworks. We back
              your mobile strategy with robust, unique and customized solutions
              and design user friendly mobile apps while mitigating business
              complexities and meeting your requirements.
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

export default Mobility;
