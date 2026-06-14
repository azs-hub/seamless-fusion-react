import type { Config } from "tailwindcss";

const designTokens = {
  colors: {
    paper: "#f4f4f1",
    ink: "#0d0d0c",
    grey: "#8c8c86",
    line: "#d9d9d3",
    dot: "#d7d7d1",
    muted: "#2a2a28",
    lede: "#34342f",
    body: "#3a3a35",
    prose: "#2c2c28",
    "surface-hover": "#ecece8",
  },
  fontFamily: {
    sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
    serif: ['"Newsreader"', "Georgia", "serif"],
  },
  transitionTimingFunction: {
    ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  },
  backgroundSize: {
    dot: "24px 24px",
  },
} as const;

export default {
  theme: {
    extend: designTokens,
  },
} satisfies Config;
