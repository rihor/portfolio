import React from "react";
import styled, { ThemeProvider } from "styled-components";

import DefaultTheme from "../styles/themes/default";
import { Nav } from "./nav";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>
    <Container>
      <Nav />
      <main>{children}</main>
    </Container>
  </ThemeProvider>
);

export { Layout };
