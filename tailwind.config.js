/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter_400Regular"],
        inter: ["Inter_400Regular"],
        "inter-bold": ["Inter_700Bold"],
      },
      colors: {
        bloom: {
          green: "#245F40",
          green2: "#2F7650",
          cream: "#F6F8E9",
          card: "#FFFFFF",
          text: "#11180F",
          muted: "#66705F",
          lime: "#DDE9A8",
          soft: "#EEF3DC",
          border: "#E0E7CF",
          input: "#F3F6E4",
          inputBorder: "#C9D6A8",
          tip: "#C5D48A",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".font-normal": { fontFamily: "Inter_400Regular", fontWeight: "normal" },
        ".font-medium": { fontFamily: "Inter_500Medium", fontWeight: "normal" },
        ".font-semibold": { fontFamily: "Inter_600SemiBold", fontWeight: "normal" },
        ".font-bold": { fontFamily: "Inter_700Bold", fontWeight: "normal" },
        ".font-extrabold": { fontFamily: "Inter_800ExtraBold", fontWeight: "normal" },
        ".font-black": { fontFamily: "Inter_900Black", fontWeight: "normal" },
      });
    },
  ],
};
