import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";

const green: DefaultTheme = {
  title: "green",

  colors: {
    primary: "#f5d4ab",
    secundary: "#b0eacd",

    background: "#dff5e9",
    metaBackground: chroma("#438958")
      .darken()
      .desaturate()
      .hex(),
    text: "#438958",
  },
};

export default green;
