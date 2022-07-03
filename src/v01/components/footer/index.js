import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { ListItemButton } from "@mui/material";

//imported images
import facebook from "../../static/images/fb.png";
import twitter from "../../static/images/twitter.png";
import linkedin from "../../static/images/linked-in.png";

const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
  },
  typography: {
    fontFamily: "'Noto Sans', sans-serif !important",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center">
        <a
          href="https://maps.google.com/maps?ll=6.85517,79.890892&z=16&t=m&hl=en&gl=LK&mapclient=embed&cid=10630060612226692927"
          target="_blank"
          rel="noreferrer"
          className={classes.a}
        >
          <ListItemButton>
            <ListItemIcon>
              <LocationOnIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="399/2/1 Colombo Road, Pepiliyana, Sri Lanka"
              style={{ color: "#fff" }}
            />
          </ListItemButton>
        </a>
        <a href="tel:0112735374" className={classes.a}>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="+94 112 735 374" style={{ color: "#fff" }} />
          </ListItemButton>
        </a>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid
          container
          spacing={5}
          display="flex"
          justifyContent="flex-end"
          style={{ paddingRight: "3%" }}
        >
          <Grid item>
            <a
              href="https://www.facebook.com/digiratina"
              className={classes.a}
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Facebook" width={"50px"}></img>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://twitter.com/digiratina"
              className={classes.a}
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Twitter" width={"50px"}></img>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEYjDS4OKHeCAAAAYHEbCpAq9jeEy_1Dw0_HkDDWA-AFNhkk1SALh0UX-BdFfiVES9sNQoRUztnvRVgVisE3-AwRn88rCXutwL0okHDwsJnZ3o5oQw-4qCsK_6X2_HvgsuPsxU=&original_referer=https://digiratina.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdigiratina%2F"
              className={classes.a}
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" width={"50px"}></img>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="p"
        className={classes.typography}
        style={{ textAlign: "center", fontWeight: "bold", background: "rgb(241, 86, 37)", padding: "1%", width: "100%" }}
      >
        Copyright © 2022 | Digiratina Technology Solutions Pvt. Ltd. | All
        Rights Reserved.
      </Typography>
    </Grid>
  );
}

export default Footer;
