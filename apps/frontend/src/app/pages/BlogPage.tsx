import React, { useEffect } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { theme } from "../theme";
import { colors, fonts, layout } from "../tokens";
import { motion } from "framer-motion";

const isroVisit = "/IsroMeet.jpeg";
const heroImage = "/spacex.jpg";

export const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = "Blog | VGEC Rocketry";
    window.scrollTo(0, 0);
  }, []);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const blogContent = [
    {
      isImage: true,
      url: isroVisit,
    },
    {
      isImage: false,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad deleniti perspiciatis aut voluptatibus ut repellat nobis corrupti laudantium facere, voluptas aliquam consectetur odit odio cumque doloribus incidunt ipsam quas!",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh" }}>
      <Navbar />

      {/* INDUSTRIAL HERO */}
      <Box
        component="section"
        sx={{
          position: "relative",
          width: "100%",
          height: "60vh",
          minHeight: "500px",
          overflow: "hidden",
        }}
      >
        <Box
          component={motion.img}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Blog Hero"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.4) contrast(1.1)",
          }}
        />
        
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: "relative", 
            zIndex: 2, 
            height: "100%", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "flex-end", 
            pb: { xs: 8, md: 12 } 
          }}
        >
          <Box component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <Typography
              sx={{
                fontFamily: fonts.mono,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                mb: 2,
              }}
            >
              Field Report
            </Typography>
            <Typography 
              variant="h1" 
              sx={{ 
                color: "#FFFFFF", 
                fontFamily: fonts.display,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                lineHeight: 1.1,
                mb: 3
              }}
            >
              Blog Title
            </Typography>
            <Typography
              sx={{
                fontFamily: fonts.mono,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
              }}
            >
              Aug 15, 2024
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ARTICLE CONTENT */}
      <Container maxWidth="md" sx={{ py: { xs: 10, md: 16 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {blogContent.map((item, index) =>
            item.isImage ? (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                sx={{
                  width: "100%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 0, // Sharp edges
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={item.url}
                  alt="Article media"
                  sx={{
                    width: "100%",
                    display: "block",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    filter: "grayscale(20%) brightness(0.9)",
                  }}
                />
              </Box>
            ) : (
              <Typography
                key={index}
                component={motion.p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                sx={{
                  fontFamily: fonts.body,
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {item.content}
              </Typography>
            )
          )}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};