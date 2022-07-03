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

function Cloud() {
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
              Cloud
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
              The impact of Digital Transformation lies in its execution, and
              Cloud technology is at the heart of any such initiative – powering
              agile, adaptive, intuitive, and customized user experiences across
              channels, reinventing organizations by shifting their workloads to
              scalable and flexible Cloud environments.
              <br /> <br />
              We at Digiratina help enterprises increase business agility and
              simplify their Cloud transformation journey to leapfrog
              competition by leveraging applications and exploiting new digital
              trends by picking the right cloud strategy to drive speed and
              innovation, enabling CAPEX savings, reduced maintenance cost and
              faster time to market. Our approach is to initially deliver a
              ‘hybrid’ Cloud environment with the optimum mix of Cloud native
              and traditional technologies, enabling Cloud journey and operation
              through continuous optimization and automation.
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

export default Cloud;
