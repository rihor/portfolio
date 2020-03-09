import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import DefaultTheme from "../styles/themes/default";
import { Link } from "./link";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: ${props => (props.theme.screens.sm ? "1.8rem" : "2.2rem")};
  margin: 20px 0px;
  color: white;
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Container>
        <Link to="/">
          <Title>{title.toUpperCase()}</Title>
        </Link>
        <br />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
