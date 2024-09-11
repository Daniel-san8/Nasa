/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
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
