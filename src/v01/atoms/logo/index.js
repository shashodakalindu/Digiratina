import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// imported from static
import logoImage from '../../static/images/logo-updated.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    borderTopLeftRadius: "30px",
    WebkitBorderBottomRightRadius: "30px"
  },
}));

function Logo() {
  
  const classes = useStyles();

  return (
    <img src={logoImage} alt='Logo'  width={'200px'} className={classes.logo}></img>
  );
}

export default Logo;
