/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "san-serif"],
      karla: ["Karla", "san-serif"],
    },
    colors: {
      primary: "#449514",
      primary_accent: "#97DD27",
      secondary: "#C3EFA9D4",
      dark_green: "#132707",
      yankees_blue: "#1D2939",
      gray: "#8392AB",
      auro_metal_saurus: "#667085",
      cadet_grey: "#98A1B5",
      bright_grey: "#EAECF0",
      ghost_white: "#F9FAFB",
      red: "#F51E1E",
      green: "#219E38",
      charcol: "#37474F",
      acid_green: "#BDCC13",
      blue: "#3D3AA9",
      white: "#FFFFFF",
      black: "#000000",
      pale_spring_bud: "#EDF7B5",
      transparent: "rgba(255,255,255,0)",
      pale_pink: "#FDCBE9",
      green: "#00ff00",
      pale_green: "#98fb98",
      olive: "#708238",
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scroll-hidden::-webkit-scrollbar": {
          display: "none",
        },

        ".scroll-y-hidden::-webkit-scrollbar": {
          display: "none",
        },

        ".scroll-snap-x-mandatory": {
          "scroll-snap-type": "x mandatory",
        },

        ".bg-primary-gradient": {
          background: "linear-gradient(180deg, #234298 0%, #4E6AB4 100%)",
        },

        ".bg-secondary-gradient": {
          background:
            "linear-gradient(180deg, #FF7901 0%, #F19A4B 99.99%, #FFCC4B 100%)",
        },

        ".bg-gradient-4": {
          background: "linear-gradient(135deg, #6BAAFC 0%, #305FEC 100%)",
        },

        ".bg-gradient-5": {
          background: "linear-gradient(135deg, #EF5E7A 0%, #D35385 100%)",
        },

        ".bg-gradient-6": {
          background: "linear-gradient(135deg, #D623FE 0%, #A530F2 100%)",
        },
        ".bg-green-gradient": {
          background:
            "linear-gradient(180deg, #219E38 0%, #45C837 100%, #7ADE74 100%)",
        },

        ".bg-red-gradient": {
          background: "linear-gradient(180deg, #940000 0%, #CC4141 100%)",
        },

        ".bg-yellow-gradient": {
          background:
            "linear-gradient(180deg, #FF7901 0%, #F19A4B 99.99%, #FFCC4B 100%)",
        },

        ".bg-clip-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities);
    },
    require("tailwindcss-animate"),
  ],
};
