import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Link from "@mui/material/Link";

//imported from atoms
import Logo from "../../atoms/logo";

const useStyles = makeStyles((theme) => ({
  bgBlue: {
    backgroundColor: "#ffffff26 !important",
    boxShadow: "unset !important",
  },
  a: {
    color: "#fff !important",
    textDecoration: "unset",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  margin: "0",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: 0,
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "20%",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "12ch",
      },
    },
  },
}));

function MainHeader() {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className={classes.bgBlue}
      style={{ position: "fixed", zIndex: "111111", width: "100%" }}
    >
      <Container maxWidth="false">
        <Toolbar disableGutters sx={{ py: 2 }}>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{
                display: "block",
                marginLeft: "auto",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                  <Link href="#" underline="none">Home</Link>
              </MenuItem>
              <MenuItem>
                  <Link href="#about" underline="none">About Us</Link>
              </MenuItem>
              <MenuItem>
                  <Link href="#services" underline="none">Services</Link>
              </MenuItem>
              <MenuItem>
                  <Link href="#technologies" underline="none">Technologies</Link>
              </MenuItem>
              <MenuItem>
                  <Link href="#partners" underline="none">Partners</Link>
              </MenuItem>
              <MenuItem>
                  <Link href="#careers" underline="none">Careers</Link>
              </MenuItem>
              <MenuItem>
                  <Link href="#contact" underline="none">Contact Us</Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Link href="#" underline="none">
              <Button
                sx={{
                  mt: 3,
                  color: "white",
                  display: "block",
                  letterSpacing: "1.5px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="#about" underline="none">
              <Button
                sx={{
                  mt: 3,
                  color: "white",
                  display: "block",
                  letterSpacing: "1.5px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                About Us
              </Button>
            </Link>
            <Link href="#services" underline="none">
              <Button
                sx={{
                  mt: 3,
                  color: "white",
                  display: "block",
                  letterSpacing: "1.5px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Services
              </Button>
            </Link>
            <Link href="#technologies" underline="none">
              <Button
                sx={{
                  mt: 3,
                  color: "white",
                  display: "block",
                  letterSpacing: "1.5px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Technologies
              </Button>
            </Link>
            <Link href="#partners" underline="none">
              <Button
                sx={{
                  mt: 3,
                  color: "white",
                  display: "block",
                  letterSpacing: "1.5px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Partners
              </Button>
            </Link>
            <Link href="#careers" underline="none">
              <Button
                sx={{
                  mt: 3,
                  color: "white",
                  display: "block",
                  letterSpacing: "1.5px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Careers
              </Button>
            </Link>
            <Link href="#contact" underline="none">
              <Button
                sx={{
                  mt: 3,
                  color: "white",
                  display: "block",
                  letterSpacing: "1.5px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Contact Us
              </Button>
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainHeader;
