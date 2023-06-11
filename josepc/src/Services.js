import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import video from "./assets/video/video_instJosePc.mp4";
import { CheckCircle } from "@mui/icons-material";
import alquiler from "./assets/img/alquiler.jpeg";
import servicioTecnico from "./assets/img/Servivio Técnico especializado.jpeg";
import venta from "./assets/img/venta.jpeg";
import cctv from "./assets/img/cctv.jpeg";

const Services = () => {
  const itemData = [
    {
      img: cctv,
      title:
        "Venta e instalación garantizada con calidad y responsabilidad de sistemas modernos de vigilancia y seguridad CCTV, equipos de ultima generación, con control via celular, cámaras de última tecnología adecuada a cada necesidad.",
    },
    {
      img: venta,
      title:
        "Te ofrecemos equipos y suministros de todas las marcas, adecuados a tus necesidades según el uso, asesoria completa y con la mayor garantía",
    },
    {
      img: servicioTecnico,
      title:
        "Experiencia, responsabilidad y garantía en nuestro servicio técnico, asesoria y acompañamiento, repuestos de primera calidad garantizados y apoyo presencial o remoto, según el caso",
    },
    {
      img: alquiler,
      title:
        "Venta e instalación garantizada con calidad y responsabilidad de sistemas modernos de vigilancia y seguridad CCTV, equipos de ultima generación, con control via celular, cámaras de última tecnología adecuada a cada necesidad.",
    },
  ];

  useEffect(() => {
    const videoElement = document.getElementById("video");

    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1000px",
          }}
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
      <ImageList
        sx={{ width: "80%", margin: "5% auto 15% auto", overflowY: "unset" }}
        cols={2}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ aspectRatio: "1", width: "80%", margin: "3% 0" }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <Box sx={{ position: "relative", textAlign: "center" }}>
              <Typography
                variant="body2"
                sx={{ maxWidth: "100%", textAlign: "left", fontWeight: "bold", fontSize: '1.2em' }}
              >
                {item.title}
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Services;
