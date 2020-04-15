import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";

const light: DefaultTheme = {
  title: "light",

  colors: {
    primary: "#1d9ed1",
    secundary: "#ffc83d",

    background: "#efefef",
    metaBackground: chroma("#efefef")
      .darken()
      .desaturate()
      .hex(),
    text: "#2d2d2d",
  },
};

export default light;
