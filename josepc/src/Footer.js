import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; Copyright José PC - 2023
      </Typography>
    </Box>
  );
};

export default Footer;
