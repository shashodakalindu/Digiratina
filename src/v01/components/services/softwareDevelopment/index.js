import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Divider } from "@mui/material";
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

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

function SoftwareDevelopment() {
  const classes = useStyles();

  return (
    <Container sx={{ py: 5 }}>
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
              Software Development
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
              As an IT outsourcing company, we provide reliably dedicated
              software development teams who have vast experience in latest
              development technologies. We develop and deploy tailored software
              solutions to our clients that is robust, scalable and with
              extensible architectures that can be used in a wide range of
              industries.
              <br /> <br />
              Our service covers the entire software development lifecycle –
              Software Product Ideation, Architecture, Design, Development,
              Testing and QA, Migration and Porting, Technical Support,
              Sustaining Engineering and Professional Services.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SoftwareDevelopment;
