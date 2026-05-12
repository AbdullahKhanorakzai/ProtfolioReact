/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#faf9f6",
        black: "#0e0e0e",
        muted: "#888",
        border: "rgba(0, 0, 0, 0.1)",
        pink: "#e88fa0",
        orange: "#f0a56a",
        purple: "#b89ff8",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        serif: ['"Cormorant Garamond"', "serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite alternate",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", filter: "blur(20px)" },
          "50%": { opacity: "1", filter: "blur(30px)" },
        },
        drift: {
          from: { transform: "translate(-50%, -54%) scale(1)" },
          to: { transform: "translate(-50%, -56%) scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1200px 0" },
          "100%": { backgroundPosition: "1200px 0" },
        },
      },
      backdropFilter: {
        blur: "blur(12px)",
      },
    },
  },
  plugins: [],
};
