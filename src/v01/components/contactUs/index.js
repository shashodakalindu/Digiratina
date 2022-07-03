import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@mui/system";
import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from '@mui/icons-material/Public';
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BusinessIcon from '@mui/icons-material/Business';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: "'Roboto', sans-serif !important",
  },
  textField: {
    backgroundColor: "white",
    borderRadius: "20px",
  },
  root: {
    "&:hover $notchedOutline": {},
    "& .MuiPaper-root": {
      backgroundColor: "transparent !important",
    },
  },
  focused: {},
  notchedOutline: {
    border: "3px solid rgb(241, 86, 37) !important",
    borderRadius: "20px !important",
  },
}));

function ContactUs() {
  const classes = useStyles();

  return (
    <Container id="contact" sx={{ pb: 5 }} style={{ textAlign: "center" }}>
      <Typography 
        variant="h3"
        color="white"
        textAlign="center"
        letterSpacing="2px"
        sx={{ pb: 5 }}
      >
        Contact Us
      </Typography>
      <form>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              sx={{ width: "48ch", mb: 1 }}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type={"text"}
              name="name"
              placeholder="Your Name *"
              id="name"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PersonIcon
                        style={{ color: "#004e92", fontSize: "1.5rem" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                classes: {
                  root: classes.root,
                  focused: classes.focused,
                  notchedOutline: classes.notchedOutline,
                },
                style: {
                  color: "#000",
                  letterSpacing: "3px",
                  fontStyle: "italic",
                  borderRadius: "50px",
                  fontWeight: "lighter",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              className={classes.textField}
              sx={{ width: "48ch", mb: 1 }}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type={"phone"}
              name="phone"
              placeholder="Phone Number *"
              id="phone"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PhoneAndroidIcon
                        style={{ color: "#004e92", fontSize: "1.5rem" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                classes: {
                  root: classes.root,
                  focused: classes.focused,
                  notchedOutline: classes.notchedOutline,
                },
                style: {
                  color: "#000",
                  letterSpacing: "3px",
                  fontStyle: "italic",
                  borderRadius: "50px",
                  fontWeight: "lighter",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              sx={{ width: "48ch", mb: 1 }}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type={"email"}
              name="email"
              placeholder="Your Email *"
              id="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <AlternateEmailIcon
                        style={{ color: "#004e92", fontSize: "1.5rem" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                classes: {
                  root: classes.root,
                  focused: classes.focused,
                  notchedOutline: classes.notchedOutline,
                },
                style: {
                  color: "#000",
                  letterSpacing: "3px",
                  fontStyle: "italic",
                  borderRadius: "50px",
                  fontWeight: "lighter",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              className={classes.textField}
              sx={{ width: "48ch", mb: 1 }}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type={"text"}
              name="country"
              placeholder="Your Country *"
              id="country"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PublicIcon
                        style={{ color: "#004e92", fontSize: "1.5rem" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                classes: {
                  root: classes.root,
                  focused: classes.focused,
                  notchedOutline: classes.notchedOutline,
                },
                style: {
                  color: "#000",
                  letterSpacing: "3px",
                  fontStyle: "italic",
                  borderRadius: "50px",
                  fontWeight: "lighter",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>    
          <TextField
              className={classes.textField}
              sx={{ width: "48ch", mb: 1 }}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type={"text"}
              name="organization"
              placeholder="Organization"
              id="organization"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <BusinessIcon
                        style={{ color: "#004e92", fontSize: "1.5rem" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                classes: {
                  root: classes.root,
                  focused: classes.focused,
                  notchedOutline: classes.notchedOutline,
                },
                style: {
                  color: "#000",
                  letterSpacing: "3px",
                  fontStyle: "italic",
                  borderRadius: "50px",
                  fontWeight: "lighter",
                },
              }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>    
          <TextField
              className={classes.textField}
              sx={{ width: "48ch", mb: 1 }}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type={"text"}
              name="message"
              placeholder="Mesasage"
              id="message"
              multiline
              rows={3}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <EditIcon
                        style={{ color: "#004e92", fontSize: "1.5rem", display: "flex", alignItems: "start" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                classes: {
                  root: classes.root,
                  focused: classes.focused,
                  notchedOutline: classes.notchedOutline,
                },
                style: {
                  color: "#000",
                  letterSpacing: "3px",
                  fontStyle: "italic",
                  borderRadius: "50px",
                  fontWeight: "lighter",
                },
              }}
            />
        </Grid>
        </Grid>
       <Grid container sx={{py: 5}}>
       <Button variant="contained" component="label" style={{display: "block", margin: "auto"}} sx={{my: 5}}>
              SEND
              <input type="submit" hidden />
            </Button>
       </Grid>
      </form>
      <iframe width="100%" style={{height: "300px"}} title="Digiratina" src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.295213691109!2d79.88666511620025!3d6.855175107616581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ba0abbe142f%3A0x93858fce6ca4b73f!2sDigiratina%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2slk!4v1656852682259!5m2!1sen!2slk"> </iframe>
    </Container>
  );
}

export default ContactUs;
