import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Divider } from "@mui/material";
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

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

function DataAnalytics() {
  const classes = useStyles();

  return (
    <Container sx={{ pb: 5 }}>
      <Grid container spacing={8} justify="center" textAlign="justify">
        <Grid item xs={12} sm={5} display="block" margin="auto">
          <img
            src={contentImage}
            alt="Logo"
            width={"80%"}
            className={classes.contentImage}
          ></img>
        </Grid>
        <Grid item xs={12} sm={7} display="flex" alignItems="center">
          <div>
            <Typography
              variant="h5"
              color="white"
              textAlign="center"
              letterSpacing="2px"
              sx={{ pb: 1, fontSize: '2rem' }}
            >
              Data Analytics
            </Typography>
            <Divider
              sx={{
                "&::before, &::after": {
                  borderColor: "#f15625",
                },
                pb: 2,
                width: "50%",
                margin: 'auto'
              }}

            >
              <DiamondOutlinedIcon style={{color: '#fff'}} />
            </Divider>
            <Typography variant="p" className={classes.typography}>
            Our big data integration and analytics experts help transform information into insights.
              <br /> <br />
              And with the power to apply artificial intelligence and data science to business decisions via enterprise data management solutions and analytics, we help enterprises drive actionable intelligence for faster innovation.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DataAnalytics;
