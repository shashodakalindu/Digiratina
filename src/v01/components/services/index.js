import React from "react";
import { Container, Typography } from "@mui/material";

//imported services
import SoftwareDevelopment from "./softwareDevelopment";
import QualityEngineering from "./qualityEngineering";
import DataAnalytics from "./dataAnalytics";
import UserExperience from "./userExperience";
import ApplicationServices from "./applicationServices";
import DigitalTransformation from "./digitalTransformation";
import InternetOfThings from "./internetOfThings";
import Cloud from "./cloud";
import Devops from "./devops"
import Mobility from "./mobility";
import BusinessConsulting from "./businessConsulting";
import EnterpriseResource from "./enterpriseResource";

function Services() {
    

  return (
    <Container id="services" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        color="white"
        textAlign="center"
        letterSpacing="2px"
        sx={{ pb: 0 }}
      >
        Services
      </Typography>
      <SoftwareDevelopment />
      <QualityEngineering />
      <DataAnalytics />
      <UserExperience />
      <ApplicationServices />
      <DigitalTransformation />
      <InternetOfThings />
      <Cloud />
      <Devops />
      <Mobility />
      <BusinessConsulting />
      <EnterpriseResource />
    </Container>
  );
}

export default Services;
