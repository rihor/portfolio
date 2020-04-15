import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";

const dark: DefaultTheme = {
  title: "dark",

  colors: {
    primary: "#EE2737FF",
    secundary: "#333",

    background: "#121212",
    metaBackground: chroma("#121212")
      .darken()
      .desaturate()
      .hex(),
    text: "#fafafa",
  },
};

export default dark;
