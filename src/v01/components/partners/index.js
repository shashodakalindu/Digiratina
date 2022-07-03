import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
  } from "@mui/material";

// imported from static
import one from "../../static/images/partners/miotiv.png";
import two from "../../static/images/partners/KBC_Security.png";
import three from "../../static/images/partners/danat-logo.png";
import four from "../../static/images/partners/pioneer.png";


function Partners() {

  return (
    <Container id="partners" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        color="white"
        textAlign="center"
        letterSpacing="2px"
        sx={{ pb: 5 }}
      >
        Our Partners
      </Typography>
      <Grid container spacing={5} sx={{px:8}}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }} style={{display: "block", margin: "auto", backgroundColor: "transparent", boxShadow: "unset"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={one}
                alt="MIOTIV"
              />
              <CardContent style={{ }}>
                <Typography variant="body2" color="white" textAlign="justify" letterSpacing="1.2px" sx={{pb: 2}}>
                Headquartered in San Diego – California, MIOTIV was founded in 2015 with the vision to deliver to its customers transformational digital IoT solutions.  Miotiv integrate state of the art technology into the most advanced IoT service platforms and deploy turn key services. It enables customers to connect their assets reliably and securely to IoT clouds.
                <br /> <br />
                Miotiv also provide engineering services and deliver fully integrated digital solutions to help customers create new revenue streams and reduce operational expenses.
                </Typography>
                <Typography variant="h6" style={{color: "#f15625", paddingTop:"5%", fontStyle: "italic"}}>
                California, USA
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }} style={{display: "block", margin: "auto", backgroundColor: "transparent", boxShadow: "unset"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={two}
                alt="KBC Security"
              />
              <CardContent style={{ }}>
                <Typography variant="body2" color="white" textAlign="justify" letterSpacing="1.2px" sx={{pb: 2}}>
                KBC Security is a leading Irish based security company with over 20 years of experience with offices in Ireland and UAE and presence in UK, Germany, Netherlands, Hungary and Singapore. It is focused on delivering penetration testing and attack emulation services to larger organizations in financial, government, telecommunication and other enterprises in Europe, Middle East and Asia.
                <br /> <br />
                Our teams of ethical hackers are experts at network penetration testing and vulnerability scanning.
                </Typography>
                <Typography variant="h6" style={{color: "#f15625", paddingTop:"5%", fontStyle: "italic"}}>
                Cork, Ireland
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }} style={{display: "block", margin: "auto", backgroundColor: "transparent", boxShadow: "unset"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={three}
                alt="KBC Security"
              />
              <CardContent style={{ }}>
                <Typography variant="body2" color="white" textAlign="justify" letterSpacing="1.2px" sx={{pb: 2}}>
                Established in 2006, with a goal to offer high quality technology solutions, consultancy and support services to enable transformation of innovative ideas to digital platforms for Arabic speaking internet users, with the focus of enriching the Arabic content on the internet.
                <br /> <br />
                With offices in Dubai, Riyadh and Karachi, Danat has a large team of professionals working on web and mobile development who take pride in their work and are focused on quality of delivery.
                </Typography>
                <Typography variant="h6" style={{color: "#f15625", paddingTop:"5%", fontStyle: "italic"}}>
                Dubai, UAE
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }} style={{display: "block", margin: "auto", backgroundColor: "transparent", boxShadow: "unset"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={four}
                alt="KBC Security"
              />
              <CardContent style={{ }}>
                <Typography variant="body2" color="white" textAlign="justify" letterSpacing="1.2px" sx={{pb: 2}}>
                Pioneer Solutions engages in providing clients with the best solution using the latest available technologies at affordable cost. Established in 1982, has Head Office in Saudi Arabia and branch in United Arab Emirates. It offers a thorough array of business-consulting services to help clients align technology investments with their business targets.
                <br /> <br />
                Our Cloud, Education, eLearning and eHealth solutions offer full life cycle project management services to effectively develop, design, and implement your program goals and objectives.
                </Typography>
                <Typography variant="h6" style={{color: "#f15625", paddingTop:"5%", fontStyle: "italic"}}>
                Jeddah, Saudi Arabia
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Partners;
