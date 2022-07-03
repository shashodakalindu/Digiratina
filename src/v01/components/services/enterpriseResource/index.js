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

function EnterpriseResource() {
  const classes = useStyles();

  return (
    <Container sx={{ pt: 5 }}>
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
              Enterprise Resource Planning
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
              Enterprise applications are at the core of organization’s IT
              structure, which is being supported by ERP systems that is
              segmented into four major business process support areas:
              financial management systems, human capital management, enterprise
              asset management, and manufacturing and operations.
              <br /> <br />
              Our ERP experts support organizations that are facing
              unprecedented challenges, requiring a new level of agility to
              adapt quickly to changes in the business environment requiring
              them to digitally transform multiple front-and back-office
              business processes.
              <br /> <br />
              Digiratina’s strategy for this digital automation emphasizes
              legacy modernization for systems of engagement, such as ERP and
              CRM applications, and leverage modern cloud technologies through
              the adoption of SaaS ERP applications meeting current and
              anticipated needs.
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

export default EnterpriseResource;
