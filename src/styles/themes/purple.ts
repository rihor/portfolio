import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";

const purple: DefaultTheme = {
  title: "purple",

  colors: {
    primary: "#7159C1",
    secundary: "#B04D48",

    background: "#583375",
    metaBackground: chroma("#583375")
      .darken()
      .desaturate()
      .hex(),
    text: "#f9f9f9",
  },
};

export default purple;
