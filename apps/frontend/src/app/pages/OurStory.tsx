import React, { useEffect, useRef } from "react";
import {
    Container,
    Typography,
    Box,
    useMediaQuery,
    Button,
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import { theme, colors, fonts } from "../theme";
import { Footer } from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCustomNavigate } from "../utils/useCustomNavigate";

const Fun = "/Fun.jpeg";
const MissionsCover = "/MissionsCover.jpeg";
const FirstMotorTest = "/FirstMotorTest.jpeg";
const FirstEjectionTest = "/FirstEjectionTest.png";
const IronOxideGrains = "/IronOxideGrains.jpeg";
const RocketMotorWebinar = "/RocketMotorWebinar.jpeg";
const AflatoonLaunch = "/AflatoonLaunch.jpeg";
const Workshop2 = "/Workshop2.jpeg";
const SoundingRocket = "/SoundingRocket.jpeg";
const AflatoonFlying = "/AflatoonFlying.jpeg";
const MaxThrustF = "/MaxThrustF.png";
const AflatoonLaunchPhone = "/AflatoonLaunchPhone2.png";
const ThirdAnanta = "/3rdAnanta.png";
const AnantaOnStand = "/AnantaOnStand.jpeg";
const workshop3 = "/workshop3.jpeg";
const Dishoomlaunching = "/Dishoomlaunching.png";
const NClassMotorTest = "/NClassMotorTest.jpeg";
const vader = "/vader.jpeg";
const workshop4 = "/workshop4.jpg";
const venessa = "/venessa.png";

// DATA REMAINS UNTOUCHED
const storyLineImages = [
    {
        date: `3ʳᵈ October, 2022`,
        title: "Foundation",
        description: "Pavitra and his batchmates founded VGEC Rocketry Team",
        image: MissionsCover
    },
    {
        date: "21ˢᵗ November, 2022",
        title: "First motor test",
        description: "Team tested it's 1ˢᵗ in-house manufactured Rocket Motor",
        image: FirstMotorTest
    },
    {
        date: "3ʳᵈ April, 2023",
        title: "First ejection test",
        description: "The parachute ejection mechanism was tested successfully for the first time",
        image: FirstEjectionTest
    },
    {
        date: "8ᵗʰ May, 2023",
        title: "Iron oxide grains test",
        description: "Team tested a motor with iron-oxide for the 1ˢᵗ time. We achieved a thrust of 950gm",
        image: IronOxideGrains
    },
    {
        date: "27ᵗʰ May, 2023",
        title: "First Launch",
        description: "We launched our very first rocket Ananta",
        image: AnantaOnStand
    },
    {
        date: "8ᵗʰ June, 2023",
        title: "Maximum Thrust",
        description: "We achieved highest thrust of 2700gm in our class-F motor",
        image: MaxThrustF
    },
    {
        date: "11ᵗʰ June, 2023",
        title: "Webinar on Solid Rocket Fuel",
        description: "A webinar was conducted by team on solid rocket fuel. The audience was also given an introduciton on the same for amature rocketry",
        image: RocketMotorWebinar
    },
    {
        date: "16ᵗʰ September, 2023",
        title: "Workshop on Rocket and Subsytems",
        description: "7 hour offline workshop conducted by team Subsystems of the Model Rocket. The attendees were given an introduction to Rocket Systems in general and how they are realised on a model scale was demonstrated.",
        image: Workshop2
    },
    {
        date: "1ˢᵗ February, 2024",
        title: "First successful launch of Ananta",
        description: "This launch we achieved a maximum height of 183m for the first time",
        image: ThirdAnanta
    },
    {
        date: "8ᵗʰ March, 2024",
        title: "First launch of Aflatoon",
        description: "First launch of our 2nd rocket Aflatoon, when it came back in three pieces",
        image: AflatoonLaunch
    },
    {
        date: "5ᵗʰ May, 2024",
        title: "Manufactured Sounding Rocket",
        description: "Team designed and manufactured Soundng rocket for an International Rocket Competition Tecknofest in Turkey",
        image: SoundingRocket
    },
    {
        date: "13ᵗʰ October, 2024",
        title: "Highest altitude recorded by Aflatoon",
        description: "Aflatoon achieved the highest altitude of 702 meter, with 175 m/s",
        image: AflatoonFlying
    },
    {
        date: "21ˢᵗ January, 2025",
        title: "Workshop on Rocket and Subsytems",
        description: "7 hour offline workshop conducted by team Subsystems of the Model Rocket. The attendees were given an introduction to Rocket Systems in general and how they are realised on a model scale was demonstrated.",
        image: workshop3
    },
    {
        date: "25ᵗʰ February, 2025",
        title: "Successful launch of Venessa (First Two Stage Rocket)",
        description: "Team successfully launched Venessa, the first two stage rocket of VGEC Rocketry Team.",
        image: venessa
    },
    {
        date: "26ᵗʰ - 27ᵗʰ June, 2025",
        title: "First Launches by New Recruits",
        description: "The new recruits split into two teams to execute two separate rocket launches across two days, successfully reaching altitudes up to 190 meters.",
        image: Dishoomlaunching
    },
    {
        date: "16ᵗʰ October, 2025",
        title: "N-Class Motor Static Fire Test",
        description: "During the static fire test of our first N-class motor, the casing experienced a rapid overpressurization event. The resulting anomaly provided the team with invaluable material stress data to reinforce future iterations.",
        image: NClassMotorTest
    },
    {
        date: "3ᵗʰ December, 2025",
        title: "Nocturnal Flight Operations",
        description: "The team worked together to build and launch Vader in the dark.",
        image: vader
    },
    {
        date: "6ᵗʰ December, 2025",
        title: "Workshop on Rocket and Subsystems",
        description: "7 hour offline workshop conducted by team Subsystems of the Model Rocket. The attendees were given an introduction to Rocket Systems in general and how they are realised on a model scale was demonstrated.",
        image: workshop4
    },
];

export const OurStory: React.FC = () => {
    useEffect(() => {
    // Force immediate hard reset of scroll position
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

    const hanldleNavigate = useCustomNavigate();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end end"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div style={{ backgroundColor: '#000000', minHeight: '100vh', overflowX: 'hidden' }}>
            
            {/* STARK HERO SECTION */}
            <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
                <Box
                    component={motion.img}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={isSmallScreen ? AflatoonLaunchPhone : Fun}
                    alt="VRT Timeline"
                    sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0, left: 0, zIndex: 0,
                        filter: 'brightness(0.6)'
                    }}
                />
                <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
                    <Navbar />
                    <Box
                        sx={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', px: 3,
                        }}
                    >
                        <Typography
                            component={motion.h1}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            sx={{
                                fontFamily: fonts.display,
                                fontSize: { xs: '3rem', md: '6rem' },
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: "#FFFFFF",
                            }}
                        >
                            Our Story
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* MINIMALIST TIMELINE */}
            <Container maxWidth="lg" sx={{ position: 'relative', pt: { xs: 10, md: 20 }, pb: 20 }} ref={timelineRef}>
                
                {/* Clean, 2px Gray Axis with mathematically perfect centering */}
                <Box
                    component={motion.div}
                    style={{ scaleY, transformOrigin: 'top' }}
                    sx={{
                        position: 'absolute', top: 0, bottom: 0,
                        left: { xs: '24px', md: '50%' },
                        width: '2px',
                        marginLeft: '-1px', // Snaps exactly to the center
                        background: 'rgba(255,255,255,0.2)',
                        zIndex: 1,
                    }}
                />

                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    {storyLineImages.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pl: { xs: '60px', md: 0 },
                                    width: '100%',
                                    mb: { xs: 10, md: 20 },
                                    position: 'relative'
                                }}
                            >
                                {/* Stark Geometric Node */}
                                <Box
                                    component={motion.div}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    sx={{
                                        position: 'absolute',
                                        left: { xs: '24px', md: '50%' },
                                        top: { xs: '0px', md: '50%' },
                                        width: '8px',
                                        height: '8px',
                                        marginLeft: '-4px', // Perfect X centering
                                        marginTop: '-4px',  // Perfect Y centering
                                        background: '#FFFFFF',
                                        zIndex: 3,
                                    }}
                                />

                                {/* Text Block */}
                                <Box 
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    sx={{ 
                                        width: { xs: '100%', md: '42%' },
                                        textAlign: { xs: 'left', md: isEven ? 'right' : 'left' },
                                        pb: { xs: 4, md: 0 }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: fonts.mono,
                                            fontSize: { xs: "0.75rem", md: "0.875rem" },
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "rgba(255,255,255,0.5)",
                                            mb: 1.5,
                                        }}
                                    >
                                        {item.date}
                                    </Typography>

                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontFamily: fonts.display,
                                            fontWeight: 700,
                                            fontSize: { xs: "1.75rem", md: "2.5rem" },
                                            color: "#FFFFFF",
                                            mb: 2,
                                            lineHeight: 1.1,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.02em"
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: fonts.body,
                                            fontSize: { xs: "0.95rem", md: "1.125rem" },
                                            color: "rgba(255,255,255,0.7)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>

                                {/* Edge-to-Edge Image Block */}
                                <Box 
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                    sx={{ 
                                        width: { xs: '100%', md: '45%' },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.image}
                                        alt={item.title}
                                        sx={{
                                            width: "100%",
                                            height: { xs: '240px', md: '360px' },
                                            objectFit: 'cover',
                                            display: "block",
                                            filter: "grayscale(20%) brightness(0.9)",
                                            transition: "filter 0.3s ease",
                                            "&:hover": {
                                                filter: "grayscale(0%) brightness(1)",
                                            }
                                        }}
                                    />
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Container>

            {/* INDUSTRIAL CALL TO ACTION */}
            <Box sx={{ bgcolor: '#000000', py: { xs: 15, md: 20 }, textAlign: "center", borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography
                    component={motion.h2}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    sx={{
                        fontFamily: fonts.display,
                        fontSize: { xs: "2rem", md: "4rem" },
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        mb: 6,
                        px: 2,
                    }}
                >
                    Mission Updates
                </Typography>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <Button
                        variant="outlined"
                        onClick={() => hanldleNavigate('/blog#')}
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
                            borderRadius: 0, // Sharp corners
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: "#FFFFFF",
                                color: "#000000",
                            },
                        }}
                    >
                        View Latest News
                    </Button>
                </motion.div>
            </Box>

            <Footer isSmallScreen={isSmallScreen} />
        </div>
    );
};