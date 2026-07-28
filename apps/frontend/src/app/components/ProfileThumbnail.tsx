import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import { theme, colors, fonts } from "../theme"
import { useCustomNavigate } from "../utils/useCustomNavigate"
import { To } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ProfileThumbnail  {
    image: string,
    name: string,
    role: string,
    linkToProfile: string | To
}

export const ProfileThumbnail: React.FC<ProfileThumbnail> = ({image, name, role, linkToProfile}) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    const { ref: profileThumbnailRef, inView: profileThumbnailView } = useInView({
        triggerOnce: true,
        threshold: isSmallScreen ? 0.001 : 0.1,
    });  

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
    };

    const handleNavigate = useCustomNavigate();
    return (
        <Grid 
            item
            md={4}
        >
            <Stack
                component={motion.div}
                sx={{
                    alignItems: "center",
                    bgcolor: "transparent",
                    border: "none",
                    borderRadius: 0,
                    p: 0,
                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    "&:hover": {
                        transform: "translateY(-4px)",
                    },
                }}
                initial="hidden"
                ref={profileThumbnailRef}
                animate={profileThumbnailView ? "visible" : 'hidden'}
                variants={fadeInVariants} 
            >
              <img
                src={image}
                alt={name}
                style={{
                    width: isSmallScreen ? "75vw" : isMediumScreen ? "30vw" : "280px",
                    height: isSmallScreen ? "75vw" : isMediumScreen ? "30vw" : "280px",
                    aspectRatio: "1 / 1",                  
                    objectFit: "cover",  
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "none",
                }}
              />
            <Typography
              sx={{
                fontFamily: fonts.display,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 600,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: colors.text.primary,
                textAlign: "center",
                mt: 3,
                mb: 1,
              }}
            >
              {name}
            </Typography>

            <Typography
              sx={{
                fontFamily: fonts.body,
                fontSize: { xs: "0.875rem", md: "0.9375rem" },
                color: colors.text.secondary,
                textAlign: "center",
                whiteSpace: "pre-wrap",
                mb: 3,
                lineHeight: 1.5,
              }}
            >
              {role}
            </Typography>
            <Button
  variant="outlined"
  href={linkToProfile}
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    borderColor: "#FFFFFF",
    border: "1px solid #FFFFFF",
    color: "#FFFFFF",
    fontFamily: fonts.display,
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    py: 1,
    px: 3,
    borderRadius: 0, // Sharp brutalist corners (removes the rounding)
    transition: "all 0.3s ease",
    "&:hover": {
      bgcolor: "#FFFFFF",
      color: "#000000",
      borderColor: "#FFFFFF",
    },
  }}
>
  Connect
</Button>
            </Stack>
          </Grid>
    )
}
