import Typography from "typography";
import sutroTheme from "typography-theme-sutro";

const typography = new Typography(sutroTheme);

// Insert styles directly into the <head>
typography.injectStyles();

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
