import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      email,
      message: message.substring(0, 500), // Limit message to 500 characters
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzb5X4_hlc48yPIrxidnD--i4_LFqm-bwGdteHf7zHsjYBQc66ej3dm2nCF0aIxhCc1/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Data sent successfully!");
        // Reset form fields
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        alert("Error sending data. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending data. Please try again later.");
    }
  };

  const handleClick = () => {
    const phoneNumber = "+573014109359";
    const message = encodeURIComponent("Hello, I have a question.");

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "5%", marginBottom: "15%" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Contact Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Message (max 500 characters)"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          inputProps={{ maxLength: 500 }}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send Data
        </Button>
      </form>
      <IconButton color="primary" onClick={handleClick} sx={{ width: '100%'}}>
        <Typography sx={{margin: '0 2%'}} color={'black'}>Mensaje directo via whatasapp click aqui</Typography>
        <WhatsAppIcon color="success" />
      </IconButton>
    </Container>
  );
}

export default ContactForm;
