import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";

//imported from components
import Header from "../../components/mainHeader";
import HomeCarousel from "../../components/homeCarousel";
import AboutUs from "../../components/aboutUs";
import Services from "../../components/services";
import Technologies from "../../components/technologies";
import Partners from "../../components/partners";
import Careers from "../../components/careers";
import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";

export default function Home() {

  const theme = createTheme({
    typography: {
      fontFamily: "'Noto Sans', sans-serif !important",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <HomeCarousel />
        <AboutUs />
        <Services />
        <Technologies />
        <Partners />
        <Careers />
        <ContactUs />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
