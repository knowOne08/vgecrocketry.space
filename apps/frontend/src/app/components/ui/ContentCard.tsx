import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { colors, fonts } from "../../tokens";
import { GhostButton } from "./Buttons";

interface ContentCardProps {
  image: string;
  title: string;
  meta?: string;
  onAction?: () => void;
  actionLabel?: string;
  aspectRatio?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  image,
  title,
  meta,
  onAction,
  actionLabel = "Read",
  aspectRatio = "16 / 10",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      component={motion.article}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: colors.bg.card,
        border: `1px solid ${colors.border.subtle}`,
        borderRadius: 1,
        overflow: "hidden",
        transition: "border-color 0.3s, transform 0.3s",
        "&:hover": {
          borderColor: colors.border.accent,
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          aspectRatio,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(8,9,12,0.85) 100%)",
          }}
        />
      </Box>

      <Box sx={{ p: { xs: 2.5, md: 3 }, flex: 1, display: "flex", flexDirection: "column" }}>
        {meta && (
          <Typography
            sx={{
              fontFamily: fonts.mono,
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: colors.text.muted,
              mb: 1.5,
            }}
          >
            {meta}
          </Typography>
        )}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: colors.text.primary,
            mb: 2,
            flex: 1,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        {onAction && (
          <GhostButton
            onClick={onAction}
            sx={{
              alignSelf: "flex-start",
              py: 1,
              px: 2.5,
              fontSize: "0.75rem",
            }}
          >
            {actionLabel}
          </GhostButton>
        )}
      </Box>
    </Box>
  );
};
