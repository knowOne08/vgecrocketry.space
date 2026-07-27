import React from "react";
import { Box, Button, ButtonProps } from "@mui/material";
import { colors } from "../../tokens";

type PrimaryButtonProps = ButtonProps & {
  arrow?: boolean;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  arrow = false,
  sx,
  ...props
}) => (
  <Button
    variant="contained"
    color="primary"
    sx={{
      ...sx,
    }}
    {...props}
  >
    {children}
    {arrow && (
      <Box component="span" sx={{ ml: 1, display: "inline-flex", transition: "transform 0.2s" }}>
        →
      </Box>
    )}
  </Button>
);

export const GhostButton: React.FC<ButtonProps> = ({ children, sx, ...props }) => (
  <Button
    variant="outlined"
    sx={{
      borderColor: colors.border.medium,
      color: colors.text.primary,
      "&:hover": {
        borderColor: colors.accent.main,
        backgroundColor: colors.accent.muted,
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Button>
);
