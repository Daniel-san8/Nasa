/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('./public/home/background-home-mobile.jpg')",
        "home-tablet": "url('./public/home/background-home-tablet.jpg')",
        "home-desktop": "url('./public/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('./public/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('./public/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('./public/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('./public/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./public/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./public/crew/background-crew-desktop.jpg')",
      },
      fontFamily: {
        barlow: ["barlow", "sans serif"],
        bellefair: ["bellefair", "sans serif"],
      },
      colors: {
        "blue-primary": "#0B0D17",
        "blue-secondary": "#D0D6F9",
        "barra-after": "#979797",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
