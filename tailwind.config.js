module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
      },
      colors: {
        blue: {
          main: "#001AFF",
        },
      },
      skew: {
        25: "-25deg",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      fontSize: {
        "30em": "3em;line-height: 1;",
        "25em": "2.5em;line-height: 1;",
        "20em": "2em;line-height: 1;",
        "15em": "1.5em;line-height: 1;",
        "1/2": "50%",
      },
      spacing: {
        "50em": "5em",
        "30em": "3em",
        "25em": "2.5em",
        "20em": "2em",
        "10em": "1em",
        "5em": "0.5em",
        "90%": "90%",
        "70%": "70%",
        "65%": "65%",
        "60%": "60%",
        "50%": "50%",
        "45%": "45%",
        "40%": "40%",
        "35%": "35%",
        "30%": "30%",
        "20%": "20%",
        "15%": "15%",
        "10%": "10%",
        "5%": "5%",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
