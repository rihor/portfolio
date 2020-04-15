import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";

const purple: DefaultTheme = {
  title: "purple",

  colors: {
    primary: "#FB8862",
    secundary: "#7159C1",

    background: "#583375",
    metaBackground: chroma("#583375")
      .darken()
      .desaturate()
      .hex(),
    text: "#f9f9f9",
  },
};

export default purple;
