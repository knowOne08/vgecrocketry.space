import React from "react";
import { Box } from "@mui/material";
import { colors, layout } from "../../tokens";

interface PageSectionProps {
  children: React.ReactNode;
  bg?: "page" | "section" | "elevated";
  py?: { xs?: number; md?: number };
  id?: string;
  fullBleed?: boolean;
}

export const PageSection: React.FC<PageSectionProps> = ({
  children,
  bg = "page",
  py = { xs: 10, md: 14 },
  id,
  fullBleed = false,
}) => {
  const bgMap = {
    page: colors.bg.page,
    section: colors.bg.section,
    elevated: colors.bg.elevated,
  };

  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: "100%",
        bgcolor: bgMap[bg],
        py,
        px: fullBleed ? 0 : { xs: 2, sm: 3, md: 4 },
      }}
    >
      {fullBleed ? (
        children
      ) : (
        <Box sx={{ maxWidth: layout.maxWidth, mx: "auto", width: "100%" }}>
          {children}
        </Box>
      )}
    </Box>
  );
};
