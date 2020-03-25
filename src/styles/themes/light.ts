import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";

const light: DefaultTheme = {
  title: "light",

  colors: {
    primary: "#c62e65",
    secundary: "#d63af9",

    background: "#efefef",
    metaBackground: chroma("#efefef")
      .darken()
      .desaturate()
      .hex(),
    text: "#2d2d2d",
  },
};

export default light;
