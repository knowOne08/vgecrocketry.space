import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  Container,
} from "@mui/material";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { theme } from "../theme";
import { colors, fonts, layout } from "../tokens";
import { motion } from "framer-motion";

const launchSnap = "/LaunchSnap.jpeg";
const groupPhoto = "/EventClass.jpg";
const anantaOnStand1 = "/AnantaOnStand1.jpeg";
const aflatoon = "/Aflatoon.jpeg";
const upiQr = "/UPIQr.jpeg";

interface DonorCreds {
  name: string;
  email: string;
  amount: string;
  customAmount?: string;
}

export const SupportUs: React.FC = () => {
  useEffect(() => {
    document.title = "Support Us | VGEC Rocketry";
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const [donorCreds, setDonorCreds] = useState<Partial<DonorCreds>>({});

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const sendInfo = async () => {
    const { name, email, amount: amt, customAmount } = donorCreds;
    setDonorCreds({});
    setQrDialogOpen(false);
    axios.post(
      "https://discord.com/api/webhooks/1092854760136245289/HlAT6CkbSIZFT1COaAbkJOWyq_IXrBpneCew68NaPnrxxDjurc8GqDVTpDNFzNM0L9TB",
      {
        content: `Contribution\nName: ${name}\nEmail: ${email}\nAmount: ${customAmount ? customAmount : amt} \n`,
      }
    );
  };

  const rockets = [
    { name: "Ananta", stat: "183m apogee", image: anantaOnStand1 },
    { name: "Aflatoon", stat: "703m apogee", image: aflatoon },
  ];

  // Brutalist Input Styles
  const inputStyles = {
    input: { color: "#FFFFFF", fontFamily: fonts.mono, fontSize: "0.8rem", letterSpacing: "0.1em" },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)", fontFamily: fonts.mono, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.8rem" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#FFFFFF" },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0, // Sharp industrial corners
      bgcolor: "transparent",
      "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
      "&:hover fieldset": { borderColor: "rgba(255,255,255,0.5)" },
      "&.Mui-focused fieldset": { borderColor: "#FFFFFF", borderWidth: "1px" },
    },
  };

  const brutalistBtn = {
    borderColor: "#FFFFFF",
    border: "1px solid #FFFFFF",
    color: "#FFFFFF",
    fontFamily: fonts.display,
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    py: 2,
    px: 6,
    borderRadius: 0,
    transition: "all 0.3s ease",
    "&:hover": { bgcolor: "#FFFFFF", color: "#000000" },
  };

  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />

      {/* IMMERSIVE HERO */}
      <Box sx={{ position: "relative", height: "75vh", minHeight: "700px", width: "100%", overflow: "hidden" }}>
        <Box
          component="img"
          src={isMobile ? launchSnap : groupPhoto}
          alt="Team"
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
        
        {/* FIX: Cinematic fade-to-black gradient to hide the bottom edge "rip" */}
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

        <Box sx={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", px: 3, pt: `${layout.navHeight}px` }}>
          <Box component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: fonts.display,
                color: "#FFFFFF",
                fontSize: { xs: "2.5rem", md: "5.5rem" },
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 3,
                lineHeight: 1.1
              }}
            >
              Help Us Reach the Sky
            </Typography>
            <Typography
              sx={{
                fontFamily: fonts.body,
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: "1rem", md: "1.25rem" },
                maxWidth: "600px",
                mx: "auto",
                mb: 5,
                lineHeight: 1.6,
              }}
            >
              Your contribution fuels propellant, composites, and launch operations — empowering the next generation of aerospace engineers.
            </Typography>
            <Button onClick={() => setOpen(true)} sx={brutalistBtn}>
              Contribute
            </Button>
          </Box>
        </Box>
      </Box>

     {/* FLEET SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 1 }}>
            Fleet
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em", mb: 1.5 }}>
            Our Rockets
          </Typography>
          <Typography sx={{ fontFamily: fonts.body, color: "rgba(255,255,255,0.6)", maxWidth: "600px", mx: "auto", fontSize: "1rem" }}>
            Two airframes, dozens of motor iterations, and hundreds of hours in the workshop.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {rockets.map((rocket, index) => (
            <Grid item xs={12} sm={6} md={5} key={rocket.name}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  textAlign: "center",
                  p: 3,
                  bgcolor: "transparent",
                  border: `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: 0,
                  transition: "border-color 0.3s ease",
                  cursor: "pointer",
                  "&:hover": { borderColor: "rgba(255,255,255,0.4)" },
                  "&:hover .rocket-img": { filter: "grayscale(0%) brightness(1)", transform: "scale(1.02)" }
                }}
              >
                <Box sx={{ overflow: 'hidden', mb: 2.5, border: "1px solid rgba(255,255,255,0.05)" }}>
                  <Box
                    className="rocket-img"
                    component="img"
                    src={rocket.image}
                    alt={rocket.name}
                    sx={{
                      width: "100%",
                      aspectRatio: "3/4", // Preserves clean portrait ratio without warping
                      objectFit: "cover",
                      display: "block",
                      filter: "grayscale(80%) brightness(0.8)",
                      transition: "all 0.5s ease",
                    }}
                  />
                </Box>
                <Typography variant="h4" sx={{ fontFamily: fonts.display, color: "#FFFFFF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.5, fontSize: "1.5rem" }}>
                  {rocket.name}
                </Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                  {rocket.stat}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA SECTION */}
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="md" sx={{ py: { xs: 12, md: 20 }, textAlign: "center" }}>
          <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="h3" sx={{ fontFamily: fonts.display, color: "#FFFFFF", fontWeight: 700, textTransform: "uppercase", fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}>
              Fuel the next launch
            </Typography>
            <Typography sx={{ fontFamily: fonts.body, color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", mb: 6, lineHeight: 1.6 }}>
              Every contribution directly supports materials, range fees, and equipment that keep our rockets flying.
            </Typography>
            <Button onClick={() => setOpen(true)} sx={brutalistBtn}>
              Contribute Now
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />

      {/* STARK FORM DIALOG */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          component: "form",
          sx: {
            bgcolor: "#05070a", // Terminal dark background
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 0, // No rounded corners
            backgroundImage: "none",
          },
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            formData.set("amount", amount);
            const formJson = Object.fromEntries(formData.entries());
            const { name, email, amount: selectedAmount, customAmount } = formJson;

            if (!name || !email) {
              alert("Please fill in your name and email.");
              return;
            }
            if (!selectedAmount) {
              alert("Please select an amount.");
              return;
            }
            if (amount === "other" && (!customAmount || parseFloat(customAmount as string) <= 0)) {
              alert("Please enter a valid custom amount greater than 0.");
              return;
            }

            setDonorCreds(formJson as Partial<DonorCreds>);
            setQrDialogOpen(true);
            setOpen(false);
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: fonts.display,
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#FFFFFF",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            pb: 3,
            pt: 4,
          }}
        >
          Contribute
        </DialogTitle>
        <DialogContent sx={{ pt: "32px !important" }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2 }}>
            Choose an amount
          </Typography>
          <Grid container spacing={1.5} sx={{ mb: 4 }}>
            {["20", "50", "100", "200", "500", "other"].map((value) => (
              <Grid item xs={4} key={value}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => setAmount(value)}
                  sx={{
                    py: 1.5,
                    fontFamily: fonts.mono,
                    fontSize: "0.875rem",
                    borderRadius: 0,
                    borderColor: amount === value ? "#FFFFFF" : "rgba(255,255,255,0.2)",
                    color: amount === value ? "#000000" : "rgba(255,255,255,0.6)",
                    bgcolor: amount === value ? "#FFFFFF" : "transparent",
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      bgcolor: amount === value ? "#FFFFFF" : "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  {value === "other" ? "Other" : `₹${value}`}
                </Button>
              </Grid>
            ))}
          </Grid>
          
          {amount === "other" && (
            <TextField fullWidth required name="customAmount" label="Enter Amount" type="number" sx={{ mb: 3, ...inputStyles }} />
          )}

          <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 2, mt: 2 }}>
            Personal information
          </Typography>
          <TextField fullWidth required name="name" label="Name" sx={{ mb: 3, ...inputStyles }} />
          <TextField fullWidth required name="email" label="Email" type="email" sx={inputStyles} />
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0, gap: 2, borderTop: "1px solid rgba(255,255,255,0.1)", mt: 2 }}>
          <Button 
            onClick={() => setOpen(false)} 
            sx={{ color: "rgba(255,255,255,0.5)", fontFamily: fonts.mono, fontSize: "0.75rem", letterSpacing: "0.1em", "&:hover": { color: "#FFFFFF", bgcolor: "transparent" } }}
          >
            Cancel
          </Button>
          <Button type="submit" sx={{ ...brutalistBtn, py: 1.5, px: 4 }}>
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      {/* QR DIALOG */}
      <Dialog 
        open={qrDialogOpen} 
        onClose={() => setQrDialogOpen(false)} 
        fullWidth 
        maxWidth="xs"
        PaperProps={{
          sx: {
            bgcolor: "#05070a",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 0,
            backgroundImage: "none",
          }
        }}
      >
        <DialogTitle sx={{ fontFamily: fonts.display, color: "#FFFFFF", textTransform: "uppercase", textAlign: "center", pt: 4 }}>
          Payment QR
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textAlign: "center", mb: 3 }}>
            Payment gateway coming soon. Use this QR code for now.
          </Typography>
          <Box sx={{ textAlign: "center", border: "1px solid rgba(255,255,255,0.2)", p: 2, bgcolor: "#FFFFFF" }}>
            <Box
              component="img"
              src={upiQr}
              alt="UPI QR"
              sx={{ width: "100%", maxWidth: isSmallScreen ? "200px" : "240px", display: "block", mx: "auto" }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, justifyContent: "center" }}>
          <Button onClick={sendInfo} sx={{ ...brutalistBtn, width: "100%" }}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};