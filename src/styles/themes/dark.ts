import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";

const dark: DefaultTheme = {
  title: "dark",

  colors: {
    primary: "#c62e65",
    secundary: "#d63af9",

    background: "#121212",
    metaBackground: chroma("#121212")
      .darken()
      .desaturate()
      .hex(),
    text: "#fafafa",
  },
};

export default dark;
