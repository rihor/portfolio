import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";

const blue: DefaultTheme = {
  title: "blue",

  colors: {
    primary: "#ff5722",
    secundary: "#2d4059",

    background: "#222831",
    metaBackground: chroma("#222831")
      .darken()
      .desaturate()
      .hex(),
    text: "#eeeeee",
  },
};

export default blue;
