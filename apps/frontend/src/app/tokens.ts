/** Design tokens — single source of truth for the VGEC Rocketry brand system */

export const colors = {
  bg: {
    page: "#08090C",
    section: "#0E1014",
    elevated: "#151820",
    card: "#181B22",
    cardHover: "#1E222C",
  },
  border: {
    subtle: "rgba(255, 255, 255, 0.08)",
    medium: "rgba(255, 255, 255, 0.14)",
    accent: "rgba(43, 127, 255, 0.45)",
  },
  text: {
    primary: "#F2F4F8",
    secondary: "#9BA3B4",
    muted: "#6B7280",
    inverse: "#08090C",
  },
  accent: {
    main: "#2B7FFF",
    hover: "#4D94FF",
    muted: "rgba(43, 127, 255, 0.12)",
    glow: "rgba(43, 127, 255, 0.35)",
  },
  success: "#22C55E",
  error: "#EF4444",
} as const;

export const fonts = {
  display: '"Barlow Condensed", "Arial Narrow", sans-serif',
  body: '"Open Sans", system-ui, sans-serif',
  mono: '"JetBrains Mono", "Consolas", monospace',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 96,
  "5xl": 128,
} as const;

export const layout = {
  maxWidth: "1280px",
  contentWidth: "720px",
  navHeight: 72,
} as const;

export const motion = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
  },
};
