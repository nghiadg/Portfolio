module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#CD921E",
      white: "#FFF",
      dark: "#1C1C1C",
    },
    spacing: {
      0: "0px",
      1: "10px",
      1.5: "15px",
      1.6: "16px",
      2: "20px",
      2.2: "22px",
      2.5: "25px",
      3: "30px",
      3.2: "32px",
      4: "40px",
      4.5: "45px",
      5: "50px",
      5.5: "55px",
      6: "60px",
      6.5: "65px",
      7: "70px",
      7.5: "75px",
      8: "80px",
      9: "90px",
      10: "100px",
    },
    borderRadius: {
      4: "4px",
    },
    fontSize: {
      xs: "1.4rem",
      md: "1.8rem",
      lg: "2.2rem",
      xl: "2.4rem",
      "2xl": "3.6rem",
      "3xl": "4.8rem",
    },
    backgroundImage: {
      line: "url('assets/images/line.png')",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
