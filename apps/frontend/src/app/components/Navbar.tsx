import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../theme";
import { colors, fonts, layout } from "../tokens";
import { useCustomNavigate } from "../utils/useCustomNavigate";
import { SocialLinks } from "./SocialLinks";

const logo = "/logo.png";

const pages = [
  { name: "About", route: "/about" },
  { name: "Missions", route: "/missions" },
  { name: "Blog", route: "/blog" },
  { name: "Support", route: "/support" },
];

const isActive = (route: string) => {
  const path = document.location.pathname;
  if (route === "/about") return path.startsWith("/about") || path.startsWith("/story");
  return path.startsWith(route);
};

export const Navbar: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleNavigate = useCustomNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Box
        component={motion.header}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          height: layout.navHeight,
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 4 },
          transition: "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
          bgcolor: scrolled ? "rgba(8, 9, 12, 0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
          borderBottom: scrolled ? `1px solid ${colors.border.subtle}` : "1px solid transparent",
        }}
      >
        <Box
          sx={{
            // Removed maxWidth and mx="auto" to force edge-to-edge alignment
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            component="button"
            onClick={() => handleNavigate("/home")}
            aria-label="VGEC Rocketry home"
            sx={{
              border: "none",
              background: "none",
              cursor: "pointer",
              p: 0,
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="VGEC Rocketry"
              sx={{ height: { xs: 44, md: 52 }, width: "auto" }}
            />
          </Box>

          {!isMobile ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              {pages.map((page) => (
                <Box
                  key={page.route}
                  component="button"
                  onClick={() => handleNavigate(page.route)}
                  sx={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    px: 2,
                    py: 1,
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isActive(page.route) ? colors.accent.main : colors.text.secondary,
                      transition: "color 0.2s",
                      "&:hover": { color: colors.text.primary },
                    }}
                  >
                    {page.name}
                  </Typography>
                  {isActive(page.route) && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        bgcolor: colors.accent.main,
                      }}
                    />
                  )}
                </Box>
              ))}
              <Box sx={{ ml: 2, pl: 2, borderLeft: `1px solid ${colors.border.subtle}` }}>
                <SocialLinks color={colors.text.secondary} fontSize={20} />
              </Box>
            </Stack>
          ) : (
            <IconButton
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: colors.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      <AnimatePresence>
        {drawerOpen && (
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: "100%",
                maxWidth: "360px",
                bgcolor: "#000000", // Pure industrial black
                borderLeft: "1px solid rgba(255,255,255,0.15)",
                backgroundImage: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: { xs: 4, md: 6 },
              },
            }}
          >
            {/* Top Close Bar */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
              <IconButton 
                onClick={() => setDrawerOpen(false)} 
                sx={{ 
                  color: "rgba(255,255,255,0.7)", 
                  borderRadius: 0, 
                  p: 1.5,
                  "&:hover": { 
                    bgcolor: "transparent", 
                    color: "#FFFFFF" 
                  } 
                }}
              >
                <CloseIcon fontSize="medium" />
              </IconButton>
            </Box>

            {/* Navigation Links */}
            <Stack spacing={2} sx={{ my: "auto" }}>
              {pages.map((page, i) => {
                const active = isActive(page.route);
                return (
                  <motion.div
                    key={page.route}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, ease: "easeOut" }}
                  >
                    <Box
                      component="button"
                      onClick={() => {
                        handleNavigate(page.route);
                        setDrawerOpen(false);
                      }}
                      sx={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        fontFamily: fonts.display,
                        fontSize: "2rem",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        color: active ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                        py: 1.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        textAlign: "left",
                        width: "100%",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      {/* Active indicator telemetry line */}
                      <Box 
                        sx={{ 
                          width: active ? "16px" : "0px", 
                          height: "2px", 
                          bgcolor: "#FFFFFF", 
                          transition: "width 0.3s ease" 
                        }} 
                      />
                      {page.name}
                    </Box>
                  </motion.div>
                );
              })}
            </Stack>

            {/* Bottom Socials */}
            <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} sx={{ pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", mb: 2 }}>
                Secure Channels
              </Typography>
              <SocialLinks color="rgba(255,255,255,0.7)" fontSize={22} />
            </Box>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};