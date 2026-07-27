import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { theme } from "../theme";
import { colors, fonts } from "../tokens";
import { motion } from "framer-motion";

const soldering = "/Soldering.mp4";
const aflatoonFlying = "/AflatoonFlying.jpeg";
const anantaOnStand = "/AnantaOnStand1.jpeg";
const aflatoonOnPad = "/AflatoonOnPad.jpeg";
const recruitsLaunch = "/RecruitsFirstLaunch.jpeg";
const aflatoon2 = "/Aflatoon2.jpeg";
const venessa = "/venessa.png";
const bigRocket = "/BigRocket.jpeg";
const turkAvionics = "/TurkAvionics.jpeg";
const nClassMotor = "/NClassMotorTest.jpeg";
const motorFire = "/MotorFire1.jpeg";
const goodFlight = "/GoodAnataFlight.mp4";

export const Missions: React.FC = () => {
  useEffect(() => {
    document.title = "Missions | VGEC Rocketry";
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cardsDataForLaunch = [
    {
      name: "Metal Casing and Nozzle for smaller motors",
      content:
        "Currently we are redesigning our F-class motors with a stainless steel casing and nozzle, aluminum end caps, and retainer rings.",
      image: nClassMotor,
      link: "/",
    },
    {
      name: "Venessa 3.0",
      content: "Soon, we will have the third launch of Venessa",
      image: venessa,
      link: "/",
    },
    {
      name: "Aflatoon's 6th Launch",
      content: "Also, soon we will be launching Aflatoon again",
      image: aflatoonOnPad,
      link: "/",
    },
  ];

  const cardDataForPrograms = [
    {
      name: "Ananta's 1st Launch",
      content:
        "Ananta was our first rocket, after we perfected our rocket motor design, we quickly moved to developing Ananta, whoes design was alrealy in process by that time.",
      image: anantaOnStand,
      link: "/",
    },
    {
      name: "Ananta's Successful Launch",
      content:
        "After much trial and error especially with the ejection system, and design improvments with each consicutive launch. Ananta's 5th launch was finally successful achieving the height of 183m.",
      image: "/AnantaPrep.jpeg",
      link: "/",
    },
    {
      name: "Recruits' 1st Launch",
      content:
        "The 2023 batch of recruits were divided into two teams and given the task to build and launch their rockets",
      image: recruitsLaunch,
      link: "/",
    },
    {
      name: "Aflatoon's 1st Launch",
      content:
        "Aflatoon is our second rocket, with a much powerfull motor. First launch was incredible, the rocket ascended upto around 300m but unfortunately went through RUD, during parachute ejection event.",
      image: aflatoonFlying,
      link: "/",
    },
    {
      name: "Aflatoon's 2nd Launch",
      content: "Ananta our first ever rocket was launched on 27th May, 2023",
      image: aflatoon2,
      link: "/",
    },
    {
      name: "Venessa's 1st Launch",
      content:
        "Venessa's is a two stage demonstrator that we are building. The first launch didn't bring in any data as the motor underperformed and hence, even the 'liftoff threshold crossed' event didn't trigger",
      image: venessa,
      link: "/",
    },
    {
      name: "Aflatoon's 4th Launch",
      content: "Ananta our first ever rocket was launched on 27th May, 2023",
      image: aflatoonOnPad,
      link: "/",
    },
    {
      name: "High Powered Rocket manufacuted for Tecknofest Competition",
      content:
        "As part of the competition, we were tasked with designing a rocket that achieves the maximum possible apogee using the motor provided for the competition.",
      image: bigRocket,
      link: "/",
    },
    {
      name: "Scientific Payload dessign for Tecknofest competition",
      content:
        "As part of the competition, we designed a rocket-borne scientific payload to measure and transmit temperature, humidity, and pressure data to the ground station.",
      image: bigRocket,
      link: "/",
    },
    {
      name: "Avionics subsystems devloped for Tecknofest competition",
      content:
        "We developed an indigenous avionics system for the rocket to measure pressure, inertial, and GPS data and transmit it continuously to the ground station, adhering to all competition committee rules.",
      image: turkAvionics,
      link: "/",
    },
    {
      name: "Aflatoon's 5th Launch",
      content:
        "This was one of our best launches to date. Aflatoon reached an impressive altitude of 703 meters with a maximum speed of 145 m/s. While the ejection system was triggered, a mechanical failure prevented the parachute from deploying.",
      image: aflatoon2,
      link: "/",
    },
    {
      name: "Solid Rocket Motors design and developments",
      content:
        "We take pride in designing and manufacturing our own rocket motors.We have refined our propellant prepration and manufacturing processes through many iterations. Our top achievements are H-class and I-class motors.",
      image: motorFire,
      link: "/",
    },
  ];

  // Reusable Brutalist Card Component
  const MissionCard = ({ item, index }: { item: any; index: number }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "transparent",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 0, // Sharp industrial edges
          cursor: "pointer",
          transition: "border-color 0.3s ease",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.4)",
          },
          "&:hover .mission-image": {
            filter: "grayscale(0%) brightness(1)",
            transform: "scale(1.05)",
          },
        }}
      >
        <Box sx={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <Box
            className="mission-image"
            component="img"
            src={item.image}
            alt={item.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // Full color on mobile, grayscale by default on desktop
              filter: {
                xs: "brightness(0.95) contrast(1.05)",
                md: "grayscale(80%) brightness(0.8)",
              },
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              "@media (min-width: 900px)": {
                "&:hover": {
                  filter: "grayscale(0%) brightness(1)",
                  transform: "scale(1.05)",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontFamily: fonts.display,
              color: "#FFFFFF",
              fontSize: "1.25rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: fonts.body,
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.875rem",
              lineHeight: 1.6,
            }}
          >
            {item.content}
          </Typography>
        </Box>
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
          src={soldering}
          poster={aflatoonFlying}
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
              Our Projects
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
              From first flight to competition-grade systems — a record of what we've built and where we're headed.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* ARCHIVE SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 20 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2 }}>
            Archive
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: { xs: "2rem", md: "3.5rem" }, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em", mb: 3 }}>
            Previous Projects
          </Typography>
          <Typography sx={{ fontFamily: fonts.body, color: "rgba(255,255,255,0.6)", maxWidth: "600px", mx: "auto", fontSize: "1.125rem" }}>
            Every launch teaches us something. These are the missions that shaped the team.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {cardDataForPrograms.map((item, index) => (
            <MissionCard key={index} item={item} index={index} />
          ))}
        </Grid>
      </Container>

      {/* CINEMATIC VIDEO INTERSTITIAL */}
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", bgcolor: "#000000" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 16 } }}>
          <Box component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} sx={{ position: "relative", width: "100%", aspectRatio: { xs: "16/9", md: "21/9" }, border: "1px solid rgba(255,255,255,0.15)" }}>
            <Box
              component="video"
              autoPlay
              muted
              loop
              playsInline
              src={goodFlight}
              poster={anantaOnStand}
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.7) grayscale(20%)" }}
            />
            <Box sx={{ position: "absolute", bottom: 0, left: 0, p: 4, background: "linear-gradient(transparent, rgba(0,0,0,0.9))", width: "100%" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFFFFF" }}>
                Ananta · Flight Footage
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ROADMAP SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 20 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2 }}>
            Roadmap
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: { xs: "2rem", md: "3.5rem" }, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em", mb: 3 }}>
            Future Plans
          </Typography>
          <Typography sx={{ fontFamily: fonts.body, color: "rgba(255,255,255,0.6)", maxWidth: "600px", mx: "auto", fontSize: "1.125rem" }}>
            Active development across propulsion, airframes, and multi-stage demonstrators.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {cardsDataForLaunch.map((item, index) => (
            <MissionCard key={index} item={item} index={index} />
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};