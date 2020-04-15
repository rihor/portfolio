import React from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

import GlobalStyles from "../styles/global-styles";
import light from "../styles/themes/light";
import { Nav } from "./nav";

type Props = {
  children: React.ReactNode;
  theme?: DefaultTheme;
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 0px 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Layout: React.FC<Props> = ({ children, theme = light }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyles />
      <Nav theme={theme} />
      <main>{children}</main>
    </Container>
  </ThemeProvider>
);

export { Layout };
