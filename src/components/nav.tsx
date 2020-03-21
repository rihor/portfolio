import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 40px 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  > a {
    font-size: 40px;
    font-weight: 600;
  }

  ul {
    display: flex;
    justify-content: space-between;

    li {
      margin: 0 10px;

      a {
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
`;

function Nav(): React.ReactElement {
  return (
    <StyledNav role="navigation">
      <Link to="/">P</Link>

      <ul>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export { Nav };
