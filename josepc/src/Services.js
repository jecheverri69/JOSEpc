import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import video from "./assets/video/video_instJosePc.mp4";
import { CheckCircle } from "@mui/icons-material";

const Services = () => {
  useEffect(() => {
    const videoElement = document.getElementById("video");

    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: "40px", marginBottom: "40px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: '1000px' }}
      >
        <Box sx={{ flex: "1" }}>
          <Typography
            variant="h2"
            sx={{ marginBottom: "20px", fontSize: "3em" }}
          >
            Nuestros Servicios
          </Typography>
          <List sx={{ marginBottom: "40px" }}>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Atención personalizada a los clientes
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Servicio técnico remoto seguro y garantizado
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Responsabilidad y cumplimiento
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Profesionales calificados
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Tecnología de vanguardia
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Instalaciones y equipos con garantía plena
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Precios acorde al mercado
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Alquiler de equipos de cómputo
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Cámaras y sistemas CCTV adaptables a su necesidad
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ flex: "1" }}>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            <video
              id="video"
              src={video}
              controls
              autoPlay
              muted="muted"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></video>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Services;
