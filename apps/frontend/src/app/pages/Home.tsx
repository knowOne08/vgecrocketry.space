import React, { useEffect } from "react";
import { Box, Grid, Typography, useMediaQuery, Button, Container } from "@mui/material";
import { theme } from "../theme";
import { colors, fonts } from "../tokens";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactUs } from "../components/ContactUs";
import { useCustomNavigate } from "../utils/useCustomNavigate";
import { VideoPanel } from "../components/ui/MediaHero";
import { motion } from "framer-motion";

const bestFlight = "/bestFlight.mp4";
const anantaArrow = "/AnantaArrow.mp4";
const fuelFlame = "/FuelFlame.jpeg";
const isroVisit = "/IsroMeet.jpeg";
const isroVisitPhone = "/IsroVisitPhone.jpeg";
const workshop = "/Workshop.jpeg";
const workshopPhone = "/WorkshopPhone.jpeg";
const aflatoonLaunch = "/AflatoonLaunch.jpeg";
const aflatoonLaunchPhone = "/AflatoonLaunchPhone.jpeg";
const motorLaunch = "/MotorLaunch.mp4";
const motorLaunchPoster = "/MotorFire1.jpeg";

const pillars = [
  {
    label: "Why",
    title: "Inspire the impossible",
    body: "A thriving global aerospace industry starts with students who imagine bold possibilities and work tirelessly to turn them into reality.",
  },
  {
    label: "How",
    title: "Hands-on from day one",
    body: "We give engineers real experience in propulsion, avionics, and flight hardware — empowering them to design, build, and fly their own rockets.",
  },
  {
    label: "What",
    title: "Rockets that fly",
    body: "From Ananta to Aflatoon, we design and manufacture high-powered rockets and solid motors entirely in-house at VGEC.",
  },
];

const updates = [
  {
    image: isroVisit,
    mobileImage: isroVisitPhone,
    title: "Visit to SAC, ISRO Ahmedabad",
    meta: "Field Report",
    route: "/blog" as const,
  },
  {
    image: workshop,
    mobileImage: workshopPhone,
    title: "Rocketry Workshop by VRT",
    meta: "Outreach",
    route: "/blog" as const,
  },
  {
    image: aflatoonLaunch,
    mobileImage: aflatoonLaunchPhone,
    title: "Aflatoon Launch Campaign",
    meta: "Flight Ops",
    route: "/blog" as const,
  },
];

export const HomePage: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleNavigate = useCustomNavigate();

  useEffect(() => {
    document.title = "VGEC Rocketry";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* IMMERSIVE FULL-SCREEN HERO */}
      <Box sx={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          src={isMobile ? anantaArrow : bestFlight}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
          <Navbar />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%',
              px: 3,
            }}
          >
            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                fontFamily: fonts.mono,
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                mb: 3,
              }}
            >
              Student rocketry · Gujarat, India
            </Typography>
            <Typography
              component={motion.h1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              sx={{
                fontFamily: fonts.display,
                fontSize: { xs: '3rem', md: '5.5rem' },
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: "#FFFFFF",
                mb: 4,
                lineHeight: 1.1,
              }}
            >
              Learn. Build. Fly.
            </Typography>
            <Typography
              component={motion.p}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              sx={{
                fontFamily: fonts.body,
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "rgba(255,255,255,0.7)",
                maxWidth: "800px",
                lineHeight: 1.6,
                mb: 6,
                mx: "auto",
              }}
            >
              VGEC Rocketry is a student team engineering high-powered rockets,
              solid motors, and avionics — from machine shop to launch pad.
            </Typography>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}
            >
              <Button
                variant="outlined"
                onClick={() => handleNavigate("/missions")}
                sx={{
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  fontFamily: fonts.display,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  px: 6,
                  py: 2,
                  borderRadius: 0,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#FFFFFF",
                    color: "#000000",
                  },
                }}
              >
                View Missions
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* INDUSTRIAL MISSION SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 24 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 8, md: 12 }, alignItems: 'center' }}>
          <Box component={motion.div} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Typography
              sx={{
                fontFamily: fonts.mono,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                mb: 2,
              }}
            >
              Mission
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: fonts.display,
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3.5rem" },
                color: "#FFFFFF",
                mb: 3,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
              }}
            >
              Engineered for altitude
            </Typography>
            <Typography
              sx={{
                fontFamily: fonts.body,
                fontSize: { xs: "1rem", md: "1.125rem" },
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                mb: 5,
              }}
            >
              We design, manufacture, and launch high-powered rockets with in-house propulsion systems — pushing the boundaries of what a university team can achieve.
            </Typography>
            <Button
              onClick={() => handleNavigate("/missions")}
              sx={{
                color: "#FFFFFF",
                fontFamily: fonts.mono,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderBottom: "1px solid #FFFFFF",
                borderRadius: 0,
                p: 0,
                pb: 0.5,
                "&:hover": { bgcolor: "transparent", color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.7)" },
              }}
            >
              Explore Projects →
            </Button>
          </Box>

          <Box component={motion.div} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: 0,
                overflow: "hidden",
                border: `1px solid rgba(255,255,255,0.1)`,
              }}
            >
              <Box
                component="img"
                src={fuelFlame}
                alt="Motor static fire"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  // Full color on mobile, grayscale on desktop with hover reveal
                  filter: {
                    xs: "brightness(0.95) contrast(1.05)",
                    md: "grayscale(50%) brightness(0.8)",
                  },
                  transition: "filter 0.5s ease",
                  "@media (min-width: 900px)": {
                    "&:hover": { filter: "grayscale(0%) brightness(1)" },
                  },
                }}
              />
              <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3, background: "linear-gradient(transparent, rgba(0,0,0,0.9))" }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                  Propulsion · Static Fire
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* KEEPING VIDEO PANEL NATIVE */}
      <VideoPanel
        videoSrc={motorLaunch}
        posterSrc={motorLaunchPoster}
        label="Motor test · VGEC workshop"
      />

      {/* STARK PILLARS SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 24 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2 }}>
            Philosophy
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: { xs: "2rem", md: "3.5rem" }, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>
            Why we build
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {pillars.map((pillar, index) => (
            <Grid item xs={12} md={4} key={pillar.label}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  p: { xs: 4, md: 5 },
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: `1px solid rgba(255,255,255,0.05)`,
                  borderRadius: 0,
                  transition: "border-color 0.3s",
                  "&:hover": { borderColor: "rgba(255,255,255,0.3)" },
                }}
              >
                <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.6875rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF", mb: 3 }}>
                  {pillar.label}
                </Typography>
                <Typography variant="h4" component="h3" sx={{ fontFamily: fonts.display, color: "#FFFFFF", fontWeight: 700, textTransform: 'uppercase', mb: 2, letterSpacing: '0.02em' }}>
                  {pillar.title}
                </Typography>
                <Typography sx={{ fontFamily: fonts.body, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  {pillar.body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* INDUSTRIAL UPDATES SECTION */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 12, md: 24 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2 }}>
              News + Updates
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: { xs: "2rem", md: "3.5rem" }, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Latest from the pad
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {updates.map((item, index) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleNavigate(item.route)}
                >
                  <Box sx={{ width: '100%', aspectRatio: '4/3', mb: 3, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Box
                      component="img"
                      src={isMobile ? item.mobileImage : item.image}
                      alt={item.title}
                      sx={{
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        // Full color on mobile, grayscale on desktop with hover reveal
                        filter: {
                          xs: "brightness(0.95) contrast(1.05)",
                          md: "grayscale(80%)",
                        },
                        transition: "all 0.5s ease",
                        "@media (min-width: 900px)": {
                          "&:hover": { filter: "grayscale(0%)", transform: "scale(1.02)" }
                        }
                      }}
                    />
                  </Box>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 1 }}>
                    {item.meta}
                  </Typography>
                  <Typography variant="h5" sx={{ fontFamily: fonts.display, color: "#FFFFFF", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em', mb: 2 }}>
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* KEEP CONTACT & FOOTER */}
      <Box sx={{ bgcolor: "#000000", py: 12 }}>
        <Container maxWidth="lg">
          <ContactUs />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};