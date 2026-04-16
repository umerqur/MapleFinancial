import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: {
          50: "#F1F5F2",
          100: "#DDE8DF",
          200: "#B7CDBC",
          300: "#8AAE93",
          400: "#5A8B68",
          500: "#33694A",
          600: "#1F5238",
          700: "#123F2A",
          800: "#0B2F20",
          900: "#061E14",
          950: "#03120C",
        },
        brass: {
          50: "#FBF6EA",
          100: "#F2E6C0",
          200: "#E6CF89",
          300: "#D9B553",
          400: "#C99A2E",
          500: "#A87D20",
          600: "#85611C",
          700: "#64491A",
          800: "#453214",
          900: "#2A1E0C",
        },
        cream: {
          50: "#FBFAF4",
          100: "#F5F1E6",
          200: "#ECE4CF",
          300: "#DFD2AE",
        },
        ink: {
          900: "#0A0F0D",
          800: "#121917",
          700: "#1B2422",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(11,47,32,0.25)",
        ring: "0 0 0 1px rgba(11,47,32,0.06), 0 20px 50px -20px rgba(11,47,32,0.25)",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "progress": {
          "0%": { width: "0%" },
          "100%": { width: "var(--target, 85%)" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "progress": "progress 2.2s cubic-bezier(0.16,1,0.3,1) 0.4s both",
        "ticker": "ticker 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
