import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@mui/system";
import {
  Button,
  Collapse,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

import PersonIcon from "@mui/icons-material/Person";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: "'Roboto', sans-serif !important",
  },
  textField: {
    backgroundColor: "white",
    borderRadius: "50px",
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
    borderRadius: "50px !important",
  },
}));

function Careers() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container id="careers" sx={{ py: 5 }} style={{ textAlign: "center" }}>
      <Typography
        variant="h3"
        color="white"
        textAlign="center"
        letterSpacing="2px"
        sx={{ pb: 5 }}
      >
        Careers
      </Typography>
      <Typography
        variant="p"
        color="white"
        style={{ lineHeight: "1.5" }}
        className={classes.typography}
        sx={{ pb: 5 }}
      >
        At Digiratina, we provide the opportunities, challenges and support to
        live the future of your work now. <br /> Explore how we work,
        opportunities and challenges that await you.
      </Typography>
      <List
        sx={{
          width: "60%",
          bgcolor: "transparent",
          color: "white",
          display: "block",
          margin: "auto",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon></ListItemIcon>
          <ListItemText>
            <Typography
              variant="h6"
              color="white"
              textAlign="left"
              className={classes.typography}
            >
              Currently we have the following ​vacancies:
            </Typography>
          </ListItemText>
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Grid container>
              <Grid item sm={6}>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Architect" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Senior Software Engineer" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="QA Lead" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="UI/UX Engineer" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Project Manager" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Business Analyst" />
                </ListItemButton>
              </Grid>
              <Grid item sm={6}>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Tech Lead" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Software Engineer" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="QA Engineer" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Database Engineer" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="DevOps Engineer" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Operations Executive" />
                </ListItemButton>
              </Grid>
            </Grid>
          </List>
        </Collapse>
      </List>
      <Typography
        variant="h6"
        color="white"
        style={{ lineHeight: "1.5" }}
        className={classes.typography}
        sx={{ py: 3 }}
        fontStyle="italic"
      >
        If you share your belief in the power of technology to change the world,
        let’s talk.
      </Typography>
      <Typography
        variant="h5"
        color="white"
        style={{ lineHeight: "1.5" }}
        className={classes.typography}
        sx={{ py: 3 }}
      >
        Apply for Job
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
              placeholder="Your First Name *"
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
              type={"text"}
              name="position"
              placeholder="Position applied for *"
              id="position"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <DesktopMacIcon
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
          <Button variant="contained" component="label" style={{display: "block", margin: "auto"}} sx={{my: 5}}>
              Upload File
              <input type="file" hidden />
            </Button>
        </Grid>
       <Grid container sx={{py: 5}}>
       <Button variant="contained" component="label" style={{display: "block", margin: "auto"}} sx={{my: 5}}>
              APPLY
              <input type="submit" hidden />
            </Button>
       </Grid>
      </form>
    </Container>
  );
}

export default Careers;
