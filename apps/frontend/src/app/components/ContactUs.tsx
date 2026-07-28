import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";
import { colors, fonts } from "../tokens";
import { Reveal } from "./ui/Reveal";

export const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = name === "";
    const emailError = !emailRegex.test(email);
    const messageError = message === "";

    setErrors({ name: nameError, email: emailError, message: messageError });

    if (!nameError && !emailError && !messageError) {
      axios
        .post(
          "https://discord.com/api/webhooks/1290707583195156561/niGX7p0C6VbGgYydzHapxVk9VCVXvHj77MQWbPtEDxb37coIJZ70tY710JSuJ6GYtEkY",
          { content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` }
        )
        .then(() => {
          setIsSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setIsSuccess(false), 3000);
        })
        .catch(console.error);
    }
  };

  // Brutalist styling for text fields
  const inputStyles = {
    input: {
      color: "#FFFFFF",
      fontFamily: fonts.mono,
      fontSize: "0.8rem",
      letterSpacing: "0.1em",
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.4)",
      fontFamily: fonts.mono,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      fontSize: "0.8rem",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#FFFFFF",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0, // Sharp industrial corners
      bgcolor: "transparent",
      "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
      "&:hover fieldset": { borderColor: "rgba(255,255,255,0.5)" },
      "&.Mui-focused fieldset": { borderColor: "#FFFFFF", borderWidth: "1px" },
    },
  };

  return (
    <Box component="section" id="contact">
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
        
        {/* Left Side: Copy */}
        <Grid item xs={12} md={5}>
          <Reveal>
            <Typography
              sx={{
                fontFamily: fonts.mono,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: fonts.display,
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3.5rem" },
                color: "#FFFFFF",
                mb: 3,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
              }}
            >
              Get in touch
            </Typography>
            <Typography
              sx={{
                fontFamily: fonts.body,
                color: "rgba(255,255,255,0.7)",
                mb: 6,
                lineHeight: 1.7,
                fontSize: "1.125rem",
              }}
            >
              Partnerships, media inquiries, or questions about joining the team — we'd like to hear from you.
            </Typography>
            <Typography
              sx={{
                fontFamily: fonts.mono,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Mechanical Workshop · VGEC · Chandkheda
            </Typography>
          </Reveal>
        </Grid>

        {/* Right Side: Form */}
        <Grid item xs={12} md={7}>
          <Reveal delay={0.1}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                p: { xs: 3, md: 5 },
                bgcolor: "transparent",
                border: `1px solid rgba(255,255,255,0.15)`,
                borderRadius: 0, // Removed rounded border
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    fullWidth
                    required
                    value={name}
                    error={errors.name}
                    onChange={(e) => setName(e.target.value)}
                    sx={inputStyles}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    fullWidth
                    required
                    type="email"
                    value={email}
                    error={errors.email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={inputStyles}
                  />
                </Grid>
              </Grid>
              <TextField
                label="Message"
                fullWidth
                required
                multiline
                rows={5}
                value={message}
                error={errors.message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  ...inputStyles,
                  "& .MuiInputBase-inputMultiline": {
                    color: "#FFFFFF",
                    fontFamily: fonts.mono,
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    lineHeight: 1.5,
                  },
                }}
              />
              {isSuccess ? (
                <Button
                  fullWidth
                  disabled
                  startIcon={<CheckCircleIcon />}
                  sx={{
                    py: 1.5,
                    mt: 2,
                    bgcolor: colors.success,
                    color: "#fff",
                    fontFamily: fonts.display,
                    letterSpacing: "0.1em",
                    borderRadius: 0,
                    "&.Mui-disabled": {
                      bgcolor: colors.success,
                      color: "#fff",
                      opacity: 0.8,
                    },
                  }}
                >
                  Message Sent
                </Button>
              ) : (
                <Button
                  type="submit"
                  sx={{
                    alignSelf: "stretch",
                    mt: 2,
                    borderColor: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                    color: "#FFFFFF",
                    fontFamily: fonts.display,
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    py: 2,
                    borderRadius: 0, // Sharp button
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#FFFFFF",
                      color: "#000000",
                    },
                  }}
                >
                  Send Message
                </Button>
              )}
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Box>
  );
};