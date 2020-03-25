import React from "react";
import styled from "styled-components";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import purple from "../styles/themes/purple";
import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

const Article = styled.article`
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  span {
    margin-left: 10px;
  }

  @media screen and (max-width: 700px) {
    & {
      justify-content: left;
    }
  }
`;

const List = styled.ul`
  display: flex;

  li {
    height: 120px;
    padding: 20px;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export default function Contact() {
  return (
    <Layout theme={purple}>
      <SEO title="Contact me" themeColor={purple.colors.metaBackground} />
      <Article>
        <Header>
          <h1>
            Contact me
            <span role="img" aria-label="emoji smile">
              🙂
            </span>
          </h1>
        </Header>
        <List>
          <li>
            <a
              href="mailto: rihor.pedro@outlook.com?subject=[CONTACT]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={email} alt="Email" />
              <p>Email</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rihor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={github} alt="Github" />
              <p>Github</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/phpinhov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} alt="Linkedin" />
              <p>Linkedin</p>
            </a>
          </li>
        </List>
      </Article>
    </Layout>
  );
}
