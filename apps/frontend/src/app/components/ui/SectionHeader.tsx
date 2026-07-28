import React from "react";
import { Box, Typography } from "@mui/material";
import { Eyebrow } from "./Eyebrow";
import { colors, layout } from "../../tokens";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  maxWidth?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  maxWidth = layout.contentWidth,
}) => (
  <Box
    sx={{
      textAlign: align,
      maxWidth: align === "center" ? "100%" : maxWidth,
      mx: align === "center" ? "auto" : 0,
      mb: { xs: 5, md: 7 },
    }}
  >
    {eyebrow && <Eyebrow sx={{ textAlign: align }}>{eyebrow}</Eyebrow>}
    <Typography
      variant="h2"
      component="h2"
      sx={{ color: colors.text.primary, mb: subtitle ? 2 : 0 }}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body1"
        sx={{
          color: colors.text.secondary,
          maxWidth: align === "center" ? "42rem" : "100%",
          mx: align === "center" ? "auto" : 0,
          mt: 2,
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);
