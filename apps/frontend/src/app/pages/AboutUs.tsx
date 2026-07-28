import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { useCustomNavigate } from "../utils/useCustomNavigate";
import { useInView } from "react-intersection-observer";
import { Footer } from "../components/Footer";
import { theme, colors, fonts } from "../theme";
import { Gallery } from "../components/Gallery";
import { AboutUsPageContent } from "../utils/content";
import { ProfileThumbnail } from "../components/ProfileThumbnail";

const Field = "/Field.mp4";
const IsroVisit = "/IsroMeet.jpeg";
const AnantaArrow = "/AnantaArrow.mp4";
const AnantaArrow2 = "/AnataArrow2.mp4";
const OurStory = "/OurStory.jpeg";
const DhairyaGrinder = "/DhairyaGrinder.jpeg";

export const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = "ABOUT | VRT";
    setTimeout(() => {
      setShowComponent(false);
    }, 1500);

    setTimeout(() => {
      setSmallScreenBackgroundVideo(AnantaArrow2);
    }, 20 * 1000);
  }, []);

  const [showComponent, setShowComponent] = useState(true);
  const [smallScreenBackgroundVideo, setSmallScreenBackgroundVideo] = useState<
    string | undefined
  >(AnantaArrow);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: leadershipRef, inView: leadershipInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: recruitsRef, inView: recruitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: recruits2025Ref, inView: recruits2025InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleNavigate = useCustomNavigate();

  return (
    <div style={{ overflow: "hidden", backgroundColor: colors.bg.page }}>
      {/* IMMERSIVE HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          minHeight: "700px",
          width: "100%",
          overflow: "hidden",
          backgroundImage: `url('${isSmallScreen ? DhairyaGrinder : Field.replace('.mp4', '.jpeg')}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {!isSmallScreen && (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={Field.replace('.mp4', '.jpeg')}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
            src={Field}
          />
        )}
        
        {/* Dark overlay with cinematic bottom-fade gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 60%, #000000 100%)",
            zIndex: 1,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column" }}>
          <Navbar />
          
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 3,
            }}
          >
            <Box component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: fonts.display,
                  color: "#FFFFFF",
                  fontSize: { xs: "3rem", md: "6rem" },
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  mb: 2,
                }}
              >
                We Are VRT
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
                The Experimental Rocketry Team of Vishwakarma Government Engineering College.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* About Us Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
       <Grid
          container
          spacing={6}
          component={motion.div}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          ref={visionRef}
          sx={{ alignItems: "flex-start" }} // <-- Ensures both columns align cleanly from the top
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontFamily: fonts.display,
                fontWeight: 700,
                textTransform: "uppercase",
                color: colors.text.primary,
                letterSpacing: "0.02em",
                mb: 3,
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="h5"
              whiteSpace='pre-wrap'
              sx={{
                fontFamily: fonts.body,
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
              }}
            >
              {AboutUsPageContent.ourVisionStatement}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              ref={missionRef}
              sx={{
                fontFamily: fonts.display,
                fontWeight: 700,
                textTransform: "uppercase",
                color: colors.text.primary,
                letterSpacing: "0.02em",
                mb: 3,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              whiteSpace='pre-wrap'
              sx={{
                fontFamily: fonts.body,
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
              }}
            >
              {AboutUsPageContent.outMissionStatement}
            </Typography>
          </Grid>
        </Grid>

        <Box
          component={motion.div}
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            border: "1px solid rgba(255,255,255,0.15)",
            overflow: "hidden",
          }}
        >
          <img
            src={IsroVisit}
            alt="Team Image"
            style={{
              width: "100%",
              maxHeight: "550px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Container>

      {/* Story Banner Section */}
      <Box
        component={motion.div}
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        sx={{
          width: "100%",
          height: "400px",
          backgroundImage: `url('${OurStory}')`, 
          backgroundBlendMode: 'overlay',
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 10,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#FFFFFF",
              fontFamily: fonts.display,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Our Story
          </Typography>
          <Button
            variant="outlined"
            onClick={() => handleNavigate('/story')}
            sx={{
              borderColor: "#FFFFFF",
              border: "1px solid #FFFFFF",
              color: "#FFFFFF",
              fontFamily: fonts.display,
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              py: 1.5,
              px: 4,
              borderRadius: 0,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#FFFFFF",
                color: "#000000",
              },
            }}
          >
            VRT Timeline
          </Button>
        </Stack>
      </Box>

      {/* Team Members */}
      <Stack spacing={15} marginBottom={15}>
        <Stack spacing={3}>
          <Typography
            variant="h2"
            gutterBottom
            component={motion.div}
            ref={leadershipRef}
            initial="hidden"
            animate={leadershipInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            sx={{
              textAlign: "center",
              fontSize: { xs: 37, md: 63 },
              fontFamily: fonts.display,
              fontWeight: 700,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: colors.text.primary,
            }}
          >
            Leadership
          </Typography>
          <Grid container rowSpacing={7} sx={{ justifyContent: "space-evenly" }}>
            {AboutUsPageContent.teamLeaders.map((member) => (
              <ProfileThumbnail key={member.name} name={member.name} role={member.role} image={member.img} linkToProfile={member.linkToProfile} />
            ))}
          </Grid>
        </Stack>

        <Stack spacing={3}>
          <Typography
            variant="h2"
            gutterBottom
            component={motion.div}
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            sx={{
              textAlign: "center",
              fontSize: { xs: 37, md: 63 },
              fontFamily: fonts.display,
              fontWeight: 700,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: colors.text.primary,
            }}
          >
            Members
          </Typography>
          <Grid container rowSpacing={7} justifyContent="space-evenly" sx={{ paddingInline: { xs: 0, md: 20 } }}>
            {AboutUsPageContent.teamMembers.map((member) => (
              <ProfileThumbnail key={member.name} name={member.name} role={member.role} image={member.img} linkToProfile={member.linkToProfile} />
            ))}
          </Grid>
        </Stack>

        <Stack spacing={3}>
          <Typography
            variant="h2"
            gutterBottom
            component={motion.div}
            ref={recruitsRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            sx={{
              textAlign: "center",
              fontSize: { xs: 37, md: 63 },
              fontFamily: fonts.display,
              fontWeight: 700,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: colors.text.primary,
            }}
          >
            Recruits - 2024
          </Typography>
          <Grid container rowSpacing={7} justifyContent="space-evenly" sx={{ paddingInline: { xs: 0, md: 20 } }}>
            {AboutUsPageContent.recruits2024.map((member) => (
              <ProfileThumbnail key={member.name} name={member.name} role={member.role} image={member.img} linkToProfile={member.linkToProfile} />
            ))}
          </Grid>
        </Stack>

        <Stack spacing={3}>
          <Typography
            variant="h2"
            gutterBottom
            component={motion.div}
            ref={recruits2025Ref}
            initial="hidden"
            animate={recruits2025InView ? "visible" : "hidden"}
            variants={fadeInVariants}
            sx={{
              textAlign: "center",
              fontSize: { xs: 37, md: 63 },
              fontFamily: fonts.display,
              fontWeight: 700,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: colors.text.primary,
            }}
          >
            Recruits - 2025
          </Typography>
          <Grid container rowSpacing={7} justifyContent="space-evenly" sx={{ paddingInline: { xs: 0, md: 20 } }}>
            {AboutUsPageContent.recruits2025.map((member) => (
              <ProfileThumbnail key={member.name} name={member.name} role={member.role} image={member.img} linkToProfile={member.linkToProfile} />
            ))}
          </Grid>
        </Stack>
      </Stack>

      {/* Gallery Section */}
      <Grid
        component={motion.div}
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        sx={{
          backgroundColor: "#141414",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "300px",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              color: "#FFFFFF",
              fontFamily: "Nova Square",
              fontSize: isSmallScreen ? 58 : 90,
              textAlign: "center",
              justifyContent: "center",
              textTransform: "uppercase",
            }}
          >
            Hall of Fame
          </Typography>
        </Stack>
        <Box width="100%" sx={{ overflow: "hidden" }}>
          <Gallery />
        </Box> 
      </Grid>

      <Footer isSmallScreen={isSmallScreen} />
    </div>
  );
};