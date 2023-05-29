import React from "react";
import whoAreUs from "./assets/img/tecnologia-02.jpg";
import { Box, Container, Typography } from "@mui/material";
const Home = () => {
  return (
    <>
      <img src={whoAreUs} style={{ width: "100%" }} />

      <Container maxWidth="md" sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ marginBottom: "20px" }}>
            Acerca De Jose PC Tecnología
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ margin: "0 auto", maxWidth: "600px" }}
          >
            Ubicados en el occidente de la ciudad, José PC le ofrece a nuestros
            clientes un servicio dedicado con cumplimiento, responsabilidad y
            con las mas altas calidades técnicas especializadas, para su entera
            satisfacción. Nuestra misión es: "Trabajos realizados con
            responsabilidad, cumplimiento y garantía siempre.".
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ marginBottom: "20px" }}>
            Nuestra Ubicación
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.907087840816!2d-75.59767138573409!3d6.275945827734012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429af62cb1643%3A0x28b89668d99a1391!2sJOSE-PC!5e0!3m2!1ses!2sco!4v1674078929583!5m2!1ses!2sco"
              width="940"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "2px solid #000", margin: "0 auto" }}
            ></iframe>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
