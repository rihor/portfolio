import React from "react";
import { Link } from "gatsby";

function Nav(): React.ReactElement {
  return (
    <header>
      <nav>
        <Link to="/">Pedro</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export { Nav };
