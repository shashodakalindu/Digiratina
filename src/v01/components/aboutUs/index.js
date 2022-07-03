import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@mui/material";

//imported from static
import aboutImage from "../../static/images/about/about-us.jpg";

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
  aboutImage: {
    borderTopLeftRadius: "50px",
    borderBottomRightRadius: "50px",
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <Container id="about" sx={{ py: 5 }} style={{marginTop: "-10px"}}>
      <Typography
        variant="h3"
        color="white"
        textAlign="center"
        letterSpacing="2px"
        sx={{ pb: 6 }}
      >
        About Us
      </Typography>
      <Grid container spacing={8} justify="center" textAlign="justify">
        <Grid item md={5}>
          <img
            src={aboutImage}
            alt="Logo"
            width={"100%"}
            className={classes.aboutImage}
          ></img>
        </Grid>
        <Grid item md={7} display="flex" alignItems="center">
          <Typography variant="p" className={classes.typography}>
            Digiratina is a software development company focused on offshore
            software engineering and outsourcing services, enabling enterprises
            address the pressing need to become fast, innovative and
            personalized in their response to digital disruption by fully
            integrating digital solutions to create new revenue streams and
            reduce operational expenses.
            <br /> <br />
            We solve complex business problems for our clients in diversified
            industries through innovative information technology solutions built
            around digital, IoT, cloud, cybersecurity, analytics and engineering
            services.
            <br /> <br />
            Our experts in IoT help clients realize tangible and significant
            benefits of IoT. We seamlessly connect the physical with the
            digital. Create new connected products and renew standalone products
            into smart ones capable of doing more.
            <br /> <br />
            Whether you need to run your business more efficiently or accelerate
            revenue growth, Digiratina can get you there.
            <br /> <br />
            Together, we discover ideas and connect the dots to solve the
            toughest challenges by providing unmatched services in strategy,
            consulting, digital, technology and operations.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
