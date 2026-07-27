import React from "react";
import { Box, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { colors, layout } from "../tokens";
import { PrimaryButton } from "../components/ui/Buttons";
import { useCustomNavigate } from "../utils/useCustomNavigate";

export const NotFoundPage: React.FC = () => {
  const handleNavigate = useCustomNavigate();

  return (
    <Box sx={{ bgcolor: colors.bg.page, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          pt: `${layout.navHeight}px`,
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(5rem, 15vw, 10rem)",
            fontWeight: 700,
            color: colors.border.subtle,
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography variant="h3" sx={{ color: colors.text.primary, mb: 2 }}>
          Page not found
        </Typography>
        <Typography sx={{ color: colors.text.secondary, mb: 4, maxWidth: "24rem" }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <PrimaryButton onClick={() => handleNavigate("/home")}>Return Home</PrimaryButton>
      </Box>
      <Footer />
    </Box>
  );
};
