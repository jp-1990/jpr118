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
        "50%": "50%",
        "40%": "40%",
        "20%": "20%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
