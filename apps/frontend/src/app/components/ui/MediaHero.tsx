import React from "react";
import { Box, Typography } from "@mui/material";
import { colors, fonts } from "../../tokens";

interface MediaHeroProps {
  videoSrc?: string;
  imageSrc?: string;
  mobileVideoSrc?: string;
  mobileImageSrc?: string;
  isMobile?: boolean;
  minHeight?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

export const MediaHero: React.FC<MediaHeroProps> = ({
  videoSrc,
  imageSrc,
  mobileVideoSrc,
  mobileImageSrc,
  isMobile = false,
  minHeight = "min(92vh, 900px)",
  overlayOpacity = 0.55,
  children,
}) => {
  const activeVideo = isMobile ? mobileVideoSrc ?? videoSrc : videoSrc;
  const activeImage = isMobile ? mobileImageSrc ?? imageSrc : imageSrc;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {activeVideo ? (
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          src={activeVideo}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      ) : activeImage ? (
        <Box
          component="img"
          src={activeImage}
          alt=""
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      ) : null}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(
            180deg,
            rgba(8, 9, 12, ${overlayOpacity * 0.7}) 0%,
            rgba(8, 9, 12, ${overlayOpacity * 0.45}) 45%,
            rgba(8, 9, 12, ${overlayOpacity + 0.15}) 100%
          )`,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </Box>
    </Box>
  );
};

interface VideoPanelProps {
  videoSrc: string;
  posterSrc?: string;
  label?: string;
  aspectRatio?: string;
}

export const VideoPanel: React.FC<VideoPanelProps> = ({
  videoSrc,
  posterSrc,
  label,
  aspectRatio = "21 / 9",
}) => (
  <Box
    component="section"
    sx={{
      width: "100%",
      position: "relative",
      overflow: "hidden",
      bgcolor: colors.bg.page,
    }}
  >
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio,
        maxHeight: { xs: "50vh", md: "70vh" },
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
        src={videoSrc}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(8,9,12,0.5) 0%, transparent 30%, transparent 70%, rgba(8,9,12,0.5) 100%)",
          pointerEvents: "none",
        }}
      />
      {label && (
        <Typography
          sx={{
            position: "absolute",
            bottom: { xs: 16, md: 24 },
            left: { xs: 16, md: 32 },
            fontFamily: fonts.mono,
            fontSize: "0.6875rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: colors.text.secondary,
          }}
        >
          {label}
        </Typography>
      )}
    </Box>
  </Box>
);
