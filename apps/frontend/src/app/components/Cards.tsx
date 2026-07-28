import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../theme";
import { colors, fonts } from "../tokens";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GhostButton } from "./ui/Buttons";

interface CardData {
  name: string;
  content: string;
  image: string;
  link: string;
}

interface CardGridProps {
  cards: CardData[];
  variant?: "past" | "future";
}

const CardGrid: React.FC<CardGridProps> = ({ cards, variant = "past" }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isFuture = variant === "future";

  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: isSmallScreen ? 0.05 : 0.1,
        });

        return (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Card
              component={motion.div}
              ref={ref}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: isFuture ? colors.bg.elevated : colors.bg.card,
                border: `1px solid ${colors.border.subtle}`,
                boxShadow: "none",
                transition: "border-color 0.3s, transform 0.3s",
                "&:hover": {
                  borderColor: colors.border.accent,
                  transform: "translateY(-3px)",
                },
              }}
            >
              <CardMedia
                component="img"
                alt={card.name}
                image={card.image}
                sx={{
                  aspectRatio: "16 / 10",
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flex: 1, p: 3 }}>
                {isFuture && (
                  <Typography
                    sx={{
                      fontFamily: fonts.mono,
                      fontSize: "0.625rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: colors.accent.main,
                      mb: 1.5,
                    }}
                  >
                    In Development
                  </Typography>
                )}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ color: colors.text.primary, mb: 1.5, lineHeight: 1.15 }}
                >
                  {card.name}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                  {card.content}
                </Typography>
              </CardContent>
              {!isFuture && card.link !== "/" && (
                <Box sx={{ px: 3, pb: 3 }}>
                  <GhostButton
                    href={card.link}
                    target="_blank"
                    sx={{ fontSize: "0.75rem", py: 1, px: 2 }}
                  >
                    Read More
                  </GhostButton>
                </Box>
              )}
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardGrid;
