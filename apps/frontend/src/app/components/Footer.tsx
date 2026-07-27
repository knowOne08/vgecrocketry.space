import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { useCustomNavigate } from "../utils/useCustomNavigate";
import { theme } from "../theme";
import { colors, fonts, layout } from "../tokens";
import { SocialLinks } from "./SocialLinks";
import { Copyright } from "./Copyright";
import { Reveal } from "./ui/Reveal";

const logo = "/logo.png";

const links = [
  { name: "About", route: "/about" },
  { name: "Missions", route: "/missions" },
  { name: "Blog", route: "/blog" },
  { name: "Support", route: "/support" },
];

export const Footer: React.FC<{ isSmallScreen?: boolean }> = () => {
  const handleNavigate = useCustomNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        bgcolor: "#000000", // Pure black
        borderTop: `1px solid rgba(255,255,255,0.1)`, // Stark edge
        mt: "auto",
      }}
    >
      <Box
        sx={{
          maxWidth: layout.maxWidth,
          mx: "auto",
          px: { xs: 3, md: 4 },
          py: { xs: 8, md: 10 },
        }}
      >
        <Reveal>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr" },
              gap: { xs: 6, md: 8 },
              mb: { xs: 6, md: 8 },
            }}
          >
            <Box>
              <Box
                component="button"
                onClick={() => handleNavigate("/home")}
                sx={{ border: "none", background: "none", cursor: "pointer", p: 0, mb: 3 }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="VGEC Rocketry"
                  sx={{ height: isSmallScreen ? 80 : 100, width: "auto" }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: fonts.mono,
                  fontSize: "0.6875rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 280,
                  lineHeight: 1.8,
                }}
              >
                Vishwakarma Government Engineering College
                <br />
                Chandkheda, Gujarat 382424
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ 
                  color: "#FFFFFF", 
                  mb: 3, 
                  fontFamily: fonts.display,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontSize: "0.875rem"
                }}
              >
                Navigate
              </Typography>
              <StackLinks links={links} />
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ 
                  color: "#FFFFFF", 
                  mb: 3, 
                  fontFamily: fonts.display,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontSize: "0.875rem"
                }}
              >
                Connect
              </Typography>
              <SocialLinks color="rgba(255,255,255,0.5)" fontSize={isSmallScreen ? 20 : 22} />
              <Typography
                component="address"
                sx={{
                  mt: 3,
                  fontStyle: "normal",
                  fontFamily: fonts.body,
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                }}
              >
                Mechanical Workshop
                <br />
                VGEC Rocketry Team
              </Typography>
            </Box>
          </Box>
        </Reveal>

        <Box
          sx={{
            pt: 4,
            borderTop: `1px solid rgba(255,255,255,0.1)`,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Copyright sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }} />
          <Typography
            sx={{
              fontFamily: fonts.mono,
              fontSize: "0.625rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Engineering the future of student rocketry
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const StackLinks: React.FC<{ links: { name: string; route: string }[] }> = ({ links }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
    {links.map((link) => (
      <Link
        key={link.route}
        href={link.route}
        underline="none"
        sx={{
          fontFamily: fonts.display,
          fontSize: "1rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          transition: "color 0.2s",
          "&:hover": { color: "#FFFFFF" }, // Removed blue accent hover
        }}
      >
        {link.name}
      </Link>
    ))}
  </Box>
);