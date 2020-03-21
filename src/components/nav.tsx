import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

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

const TitleLink = styled(Link)`
  font-size: 40px;
  font-weight: 600;
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

function Nav(): React.ReactElement {
  return (
    <Header>
      <TitleLink to="/">P</TitleLink>

      <nav role="navigation">
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
