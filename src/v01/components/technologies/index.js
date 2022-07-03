import React from "react";
import { Box, Container, Grid, Tab, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@mui/styles";

// front-end images
import angular from "../../static/images/technologies/front-end/angularjs.png";
import bootstrap from "../../static/images/technologies/front-end/bootstrap.png";
import html from "../../static/images/technologies/front-end/hcj.png";
import jquery from "../../static/images/technologies/front-end/jquery.png";
import react from "../../static/images/technologies/front-end/react.png";
import dojo from "../../static/images/technologies/front-end/dojo.png";
import kendo from "../../static/images/technologies/front-end/kendo-ui.png";
import less from "../../static/images/technologies/front-end/less.png";
import sass from "../../static/images/technologies/front-end/saas.png";
import vue from "../../static/images/technologies/front-end/vue.png";

// mobile images
import android from "../../static/images/technologies/mobile/android.png";
import ios from "../../static/images/technologies/mobile/iOS.png";
import flutter from "../../static/images/technologies/mobile/flutter.png";
import reactNative from "../../static/images/technologies/mobile/react.png";

// frameworks images
import springboot from "../../static/images/technologies/frameworks/springboot.png";
import springframework from "../../static/images/technologies/frameworks/spring.png";
import net from "../../static/images/technologies/frameworks/net-core.png";
import express from "../../static/images/technologies/frameworks/expressjs.png";

// programming images
import c from "../../static/images/technologies/programming/c.png";
import cPlus from "../../static/images/technologies/programming/cplus.png";
import java from "../../static/images/technologies/programming/java.png";
import dotnet from "../../static/images/technologies/programming/net.png";
import python from "../../static/images/technologies/programming/python.png";
import go from "../../static/images/technologies/programming/go.png";
import scala from "../../static/images/technologies/programming/scala.png";

// data images
import sql from "../../static/images/technologies/data/mysql.png";
import oracle from "../../static/images/technologies/data/oracle.png";
import sqlserver from "../../static/images/technologies/data/sql-server.png";
import mongo from "../../static/images/technologies/data/mongo-db.png";
import cassandra from "../../static/images/technologies/data/cassandra.png";
import postgre from "../../static/images/technologies/data/postgresql.png";
import firebase from "../../static/images/technologies/data/firebase.png";

function Technologies() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "uppercase",
      border: "unset",
      letterSpacing: "2px",
      fontWeight: "bold",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      borderBottom: "unset",
      fontSize: "1rem",
      padding: "15px 20px",
      color: "#fff",
      "&.Mui-selected": {
        color: "#f15625",
      },
    })
  );

  const useStyles = makeStyles((theme) => ({
    images: {
      background: "#ffffff7d",
      padding: "5%",
      width: "150px",
    },
    root: {
      "& div.MuiTabs-flexContainer": {
        display: "flex",
        justifyContent: "center",
        },
    } 
  }));

  const classes = useStyles();

  return (
    <Container id="technologies" maxWidth="lg">
      <div>
        <Grid
          container
          spacing={2}
          justify="center"
          sx={{ pt: 6, mx: 0, width: "100%" }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: "1.5px solid #0E489B" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="tabs"
                  sx={{ overflow: "overlay" }}
                  className={classes.root}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <StyledTab label="Front-end" value="1" />
                  <StyledTab
                    label="Mobile"
                    value="2"
                    style={{ marginLeft: "5px" }}
                  />
                  <StyledTab
                    label="Frameworks"
                    value="3"
                    style={{ marginLeft: "5px" }}
                  />
                  <StyledTab
                    label="Programming Languages"
                    value="4"
                    style={{ marginLeft: "5px" }}
                  />
                  <StyledTab
                    label="Data Technologies"
                    value="5"
                    style={{ marginLeft: "5px" }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ px: 0 }}>
                <Grid
                  container
                  spacing={5}
                  display="flex"
                  justifyContent="center"
                >
                  <Grid item>
                    <Tooltip title="Angular">
                      <img
                        src={angular}
                        alt="Angular"
                        className={classes.images}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Bootstrap">
                      <img
                        src={bootstrap}
                        alt="Bootstrap"
                        className={classes.images}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="HTML5">
                      <img src={html} alt="HTML5" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="JQuery">
                      <img
                        src={jquery}
                        alt="JQuery"
                        className={classes.images}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="React JS">
                      <img
                        src={react}
                        alt="React JS"
                        className={classes.images}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Dojo">
                      <img src={dojo} alt="Dojo" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Kendo UI">
                      <img
                        src={kendo}
                        alt="Kendo UI"
                        className={classes.images}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="less">
                      <img src={less} alt="less" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Sass">
                      <img src={sass} alt="Sass" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="VUE">
                      <img src={vue} alt="VUE" className={classes.images} />
                    </Tooltip>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2" sx={{ px: 0 }}>
                <Grid container spacing={5} display="flex"
                  justifyContent="center">
                  <Grid item>
                    <Tooltip title="Android">
                      <img src={android} alt="Android" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="ios">
                      <img src={ios} alt="ios" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Flutter">
                      <img src={flutter} alt="Flutter" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="React Native">
                      <img src={reactNative} alt="React Native" className={classes.images} />
                    </Tooltip>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="3" sx={{ px: 0 }}>
              <Grid container spacing={5} display="flex"
                  justifyContent="center">
                  <Grid item>
                    <Tooltip title="Spring Boot">
                      <img src={springboot} alt="Spirng Boot" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Spring Framework">
                      <img src={springframework} alt="Spring Framework" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title=".Net Core">
                      <img src={net} alt=".Net Core" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Express JS">
                      <img src={express} alt="Express JS" className={classes.images} />
                    </Tooltip>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="4" sx={{ px: 0 }}>
              <Grid container spacing={5} display="flex"
                  justifyContent="center">
                  <Grid item>
                    <Tooltip title="C#">
                      <img src={c} alt="C#" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="C++">
                      <img src={cPlus} alt="C++" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Java">
                      <img src={java} alt="Java" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title=".NET">
                      <img src={dotnet} alt=".NET" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Python">
                      <img src={python} alt="Python" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="GO">
                      <img src={go} alt="GO" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Scala">
                      <img src={scala} alt="Scala" className={classes.images} />
                    </Tooltip>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="5" sx={{ px: 0 }}>
              <Grid container spacing={5} display="flex"
                  justifyContent="center">
                  <Grid item>
                    <Tooltip title="My SQL">
                      <img src={sql} alt="My SQL" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Oracle">
                      <img src={oracle} alt="Oracle" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="SQL Server">
                      <img src={sqlserver} alt="SQL Server" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Mongo DB">
                      <img src={mongo} alt="Mongo DB" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Python">
                      <img src={python} alt="Python" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Cassandra">
                      <img src={cassandra} alt="Cassandra" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Postgre SQL">
                      <img src={postgre} alt="Postgre SQL" className={classes.images} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Firebase">
                      <img src={firebase} alt="Firebase" className={classes.images} />
                    </Tooltip>
                  </Grid>
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </div>
    </Container>
  );
}

export default Technologies;
