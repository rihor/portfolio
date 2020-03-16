import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: "1.618em",
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
});

typography.options.overrideStyles = () => ({
  html: {
    overflowY: "auto",
    height: "100%",
  },
});

// Insert styles directly into the <head>
typography.injectStyles();

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
