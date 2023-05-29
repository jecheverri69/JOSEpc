import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./assets/img/Logo_blanco.png"; // replace with your logo file path

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "white" }} position="static">
      <Container maxWidth="xl" sx={{ ml: "0" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Logo" width="55%" />
          </Box>
          <Box>
            <Button
              sx={{ color: "black", fontSize: "20px" }}
              component={Link}
              to="/"
              color="inherit"
            >
              Home
            </Button>
            <Button
              sx={{ color: "black", fontSize: "20px" }}
              component={Link}
              to="/services"
              color="inherit"
            >
              Services
            </Button>
            <Button
              sx={{ color: "black", fontSize: "20px" }}
              component={Link}
              to="/contact-us"
              color="inherit"
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
