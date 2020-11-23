import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    height: 100%;
    overflow-y: auto;
  }

  body {
    background: ${props => props.theme.colors.background};
    line-height: 1;
  }

  a {
    text-decoration: none;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, code, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  article, aside, canvas, details, embed,
  b, u, i, center, ul, li, form, label,
  figure, figcaption, footer, header,
  menu, nav, section, summary
  {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text}
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  }

  p, span, em, a, li {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }
`;
