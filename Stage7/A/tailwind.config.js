const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "499px" },
    },

    extend: {
      borderRadius: {
        "4xl": "2.0rem",
        "5xl": "2.5rem",
        "6xl": "3.0rem",
        "7xl": "3.5rem",
        "8xl": "4.0rem",
        "9xl": "4.5rem",
        "10xl": "5.0rem",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
      padding: {
        "5%": "5%",
      },
      minWidth: {
        100: "25.0rem",
        "11/12": "91%",
      },
      width: {
        18: "4.5rem",
        88: "22.0rem",
        100: "25.0rem",
      },
      height: {
        105: "26.0rem",
        106: "26.25rem",
        107: "26.50rem",
        108: "26.75rem",
        109: "27.25rem",
        110: "27.50rem",
        111: "27.75rem",
        112: "28.0rem",
        113: "28.25rem",
        114: "28.50rem",
        115: "28.75rem",
        116: "29.0rem",
        "28/100": "28%",
      },
      margin: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        // n5: "-1.25rem",
      },

      colors: {
        amber: colors.amber,
        lime: colors.lime,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        rose: colors.rose,
        lightBlue: colors.lightBlue,

        brand: {
          dark: "#5a5959",
          lightDark: "#444444",
          DEFAULT: "#e9dd71",
          light: " #e7dd87c4",
        },

        background: {
          dark: "#424242",
          moredark: "#2d2d2d",
        },
      },
    },
  },

  variants: {
    extend: {
      height: ["focus"],
      inset: ["first-of-type", "last-of-type"],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("first-of-type", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-of-type${separator}${className}`)}:first-of-type`;
        });
      });
    }),

    plugin(function ({ addVariant, e }) {
      addVariant("last-of-type", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last-of-type${separator}${className}`)}:last-of-type`;
        });
      });
    }),
  ],
};
