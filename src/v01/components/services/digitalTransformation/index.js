import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Divider } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

//imported from static
import contentImage from "../../../static/images/services/service-four.png";

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

function DigitalTransformation() {
  const classes = useStyles();

  return (
    <Container sx={{ pb: 5 }}>
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
              Digital Transformation
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
              Digital Transformation happens using a wide range of engineering
              disciplines including Artificial Intelligence (AI), Internet of
              Things (IoT), Mobile, Machine Learning, Big Data, Cloud Computing
              and other technologies interconnected with User Experience to
              deliver significant value to customers through continuous
              innovation.
              <br /> <br />
              Our talented team of digital natives at Digiratina are equipped
              with the necessary skills and tools to help you in your
              digitization journey and ensure that your organization embraces
              all the technology-enabled changes, unlock productivity gains, and
              put your business at the forefront of digital disruption for a
              competitive advantage ensuring agility, flexibility, and
              scalability at a significantly lower TCO.
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

export default DigitalTransformation;
