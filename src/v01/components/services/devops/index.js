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

function Cloud() {
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
              DevOps
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
              We provide DevOps assessment, automation and management services
              with a range of tools to automate and measure the performance of
              the DevOps implementations. Our approach which is focused on the
              optimal mix of tools, processes and business strategy, driven by
              measurable and predictable KPIs will ensure better quality of
              software builds, test and delivery, providing comprehensive
              capabilities across application release management, release
              automation, and continuous deployment.
              <br /> <br />
              Our DevOps service will enable a culture of collaboration,
              innovation and improved operational efficiency by aligning
              Development, Quality Assurance and Operations better for higher
              efficiency and faster time to market.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cloud;
