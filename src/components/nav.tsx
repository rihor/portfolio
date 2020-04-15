import React from "react";
import { Link } from "gatsby";
import styled, { DefaultTheme } from "styled-components";

import Logo from "./logo";

const Header = styled.header`
  height: 120px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    margin: 0 10px;
  }

  a {
    font-weight: 400;
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    a {
      font-size: 16px;
    }
  }
`;

type Props = {
  theme: DefaultTheme;
};

function Nav({ theme }: Props): React.ReactElement {
  return (
    <Header>
      <Link to="/">
        <Logo theme={theme} />
      </Link>

      <nav>
        <List>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </List>
      </nav>
    </Header>
  );
}

export { Nav };
