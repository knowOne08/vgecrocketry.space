import React from "react";
import { Box, Typography, TypographyProps } from "@mui/material";
import { fonts, colors } from "../../tokens";

interface EyebrowProps extends TypographyProps {
  children: React.ReactNode;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, sx, ...props }) => (
  <Typography
    component="span"
    variant="h6"
    sx={{
      fontFamily: fonts.mono,
      fontSize: "0.6875rem",
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: colors.accent.main,
      display: "block",
      mb: 2,
      ...sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);
