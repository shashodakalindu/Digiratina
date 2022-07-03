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

function ApplicationServices() {
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
              Application Services
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
              Our application support and maintenance services are specifically
              designed to drive efficiency and effectiveness, balancing cost,
              speed and quality and support greater business agility. The
              technology services span automation, infrastructure, application
              development and maintenance, testing and end-user services.
              <br /> <br />
              Digiratina’s Application Services works at the intersection of
              cloud, mobility and analytics to create simple, effective and
              future ready digital solutions, customized to meet the needs of
              today’s nimble enterprises, while being focused on preempting
              issues and enhancing application stability.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ApplicationServices;
