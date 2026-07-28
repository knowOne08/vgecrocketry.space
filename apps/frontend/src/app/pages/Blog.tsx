import React, { useEffect, useState } from "react";
import { Box, Container, Grid, TextField, Typography, Button, useMediaQuery } from "@mui/material";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { theme } from "../theme";
import { colors, fonts } from "../tokens";
import { motion } from "framer-motion";

const dhairyaWorkingVideo = "/DhairyaWorking2.mp4";
const anantaArrow = "/AnantaArrow.mp4";
const aflatoon2 = "/Aflatoon2.jpeg";
const rocket = "/rocket-demo.jpeg";
const aflatoonOnPad = "/AflatoonOnPad.jpeg";
const recruitsFirstLaunch = "/RecruitsFirstLaunch.jpeg";
const bigRocket = "/BigRocket.jpeg";
const carbNosecone = "/CarbNosecone.jpeg";
const turkAvionics = "/TurkAvionics.jpeg";

const newsPosts = [
  { title: "Aflatoon's 5th Launch", date: "13 Oct 2024", image: aflatoon2 },
  { title: "Venessa 1st Launch", date: "17 Aug 2024", image: rocket },
  { title: "Aflatoon's 4th Launch", date: "23 Jun 2024", image: aflatoonOnPad },
  { title: "Recruits' First Launch", date: "25 Jun 2024", image: recruitsFirstLaunch },
  { title: "Testing Tecknofet Rocket's Subsystems", date: "18 May 2024", image: bigRocket },
];

const blogPosts = [
  { title: "Carbon Fiber Nosecone", description: "Design and manufacturing of a carbon fiber nosecone with a steel tip", image: carbNosecone },
  { title: "Telescopic Ejection Mechanism", description: "Design philosophy and manufacturing of a telescopic ejection mechanism", image: rocket },
  { title: "Parachute Designing", description: "Designing drogue and main parachutes for high powered rocketry", image: rocket },
  { title: "Avionics Subsystem", description: "Indigenous avionics for an international rocketry competition", image: turkAvionics },
  { title: "Airframe and Fins", description: "Designing, manufacturing and testing airframe and fins", image: rocket },
];

export const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Blog | VGEC Rocketry";
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstname")?.toString() || "";
    const lastName = formData.get("lastname")?.toString() || "";
    const email = formData.get("email")?.toString() || "";

    if (!firstName || !lastName || !email) {
      alert("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    axios
      .post(
        "https://discord.com/api/webhooks/1092854760136245289/HlAT6CkbSIZFT1COaAbkJOWyq_IXrBpneCew68NaPnrxxDjurc8GqDVTpDNFzNM0L9TB",
        { content: `**Wants to Stay in Touch**\nName: ${firstName}\nLast Name: ${lastName}\nEmail: ${email} \n` }
      )
      .then((res) => {
        if (res.status === 204) {
          setIsSuccess(true);
          event.currentTarget.reset();
        }
      })
      .catch(() => alert("Failed to submit the form. Please try again."));
  };

  // Brutalist Input Styles
  const inputStyles = {
    input: { color: "#FFFFFF", fontFamily: fonts.mono, fontSize: "0.8rem", letterSpacing: "0.1em" },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)", fontFamily: fonts.mono, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.8rem" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#FFFFFF" },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      bgcolor: "transparent",
      "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
      "&:hover fieldset": { borderColor: "rgba(255,255,255,0.5)" },
      "&.Mui-focused fieldset": { borderColor: "#FFFFFF", borderWidth: "1px" },
    },
  };

  // Shared Brutalist Card with Mobile Color Fix
  const ArticleCard = ({ item, index }: { item: any; index: number }) => (
    <Grid item xs={12} sm={6} lg={4}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
        sx={{
          cursor: "pointer",
          "&:hover .article-image": { filter: "grayscale(0%) brightness(1)", transform: "scale(1.03)" },
        }}
      >
        <Box sx={{ width: "100%", aspectRatio: "4/3", mb: 3, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
          <Box
            className="article-image"
            component="img"
            src={item.image}
            alt={item.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: {
                xs: "brightness(0.95) contrast(1.05)",
                md: "grayscale(80%) brightness(0.8)",
              },
              transition: "all 0.5s ease",
              "@media (min-width: 900px)": {
                "&:hover": {
                  filter: "grayscale(0%) brightness(1)",
                  transform: "scale(1.03)",
                },
              },
            }}
          />
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 1 }}>
          {item.date || item.description}
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: fonts.display, color: "#FFFFFF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em", mb: 2 }}>
          {item.title}
        </Typography>
      </Box>
    </Grid>
  );

  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />

     {/* IMMERSIVE HERO */}
      <Box sx={{ position: "relative", height: "100vh", minHeight: "700px", width: "100%", overflow: "hidden" }}>
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          src={isMobile ? anantaArrow : dhairyaWorkingVideo}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            filter: "brightness(0.4) contrast(1.1)",
          }}
        />

        {/* Cinematic fade-to-black bottom gradient */}
        <Box 
          sx={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            zIndex: 1, 
            background: "linear-gradient(to bottom, transparent 60%, #000000 100%)" 
          }} 
        />

        <Box 
          sx={{ 
            position: "relative", 
            zIndex: 2, 
            height: "100%", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            textAlign: "center", 
            px: 3 
          }}
        >
          <Box component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: fonts.display,
                color: "#FFFFFF",
                fontSize: { xs: "3rem", md: "5.5rem" },
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              News & Blog
            </Typography>
            <Typography
              sx={{
                fontFamily: fonts.body,
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: "1rem", md: "1.25rem" },
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Launch reports, technical write-ups, and field notes from the workshop and the pad.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* LATEST LAUNCHES */}
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 20 } }}>
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2 }}>
            Updates
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: { xs: "2rem", md: "3.5rem" }, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>
            Latest Launches
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {newsPosts.map((post, index) => (
            <ArticleCard key={index} item={post} index={index} />
          ))}
        </Grid>
      </Container>

      {/* ENGINEERING BLOG */}
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 12, md: 20 } }}>
          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2 }}>
              Technical
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: { xs: "2rem", md: "3.5rem" }, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em", mb: 3 }}>
              Engineering Blog
            </Typography>
            <Typography sx={{ fontFamily: fonts.body, color: "rgba(255,255,255,0.6)", maxWidth: "600px", fontSize: "1.125rem" }}>
              Deep dives into subsystems, manufacturing processes, and competition hardware.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <ArticleCard key={index} item={post} index={index} />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* NEWSLETTER (Brutalist Form) */}
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 20 } }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Box component={motion.div} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2 }}>
                Newsletter
              </Typography>
              <Typography variant="h2" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: { xs: "2rem", md: "3.5rem" }, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em", mb: 3, lineHeight: 1.1 }}>
                Stay in touch
              </Typography>
              <Typography sx={{ fontFamily: fonts.body, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontSize: "1.125rem" }}>
                Get notified when we publish new launch reports and technical articles.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Box component={motion.div} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  p: { xs: 3, md: 5 },
                  bgcolor: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 0,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField name="firstname" label="First Name" fullWidth required sx={inputStyles} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField name="lastname" label="Last Name" fullWidth required sx={inputStyles} />
                  </Grid>
                </Grid>
                <TextField name="email" label="Email Address" fullWidth required type="email" sx={inputStyles} />
                
                {isSuccess ? (
                  <Button
                    fullWidth
                    disabled
                    startIcon={<CheckCircleIcon />}
                    sx={{
                      py: 1.5,
                      mt: 1,
                      bgcolor: colors.success,
                      color: "#fff",
                      fontFamily: fonts.display,
                      letterSpacing: "0.1em",
                      borderRadius: 0,
                      "&.Mui-disabled": { bgcolor: colors.success, color: "#fff", opacity: 0.8 },
                    }}
                  >
                    Subscribed
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    sx={{
                      alignSelf: "stretch",
                      mt: 1,
                      borderColor: "#FFFFFF",
                      border: "1px solid #FFFFFF",
                      color: "#FFFFFF",
                      fontFamily: fonts.display,
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      py: 2,
                      borderRadius: 0,
                      transition: "all 0.3s ease",
                      "&:hover": { bgcolor: "#FFFFFF", color: "#000000" },
                    }}
                  >
                    Sign Up
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};