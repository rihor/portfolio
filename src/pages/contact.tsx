import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { ImageLinkItem } from "../components/imageLinkItem";
import purple from "../styles/themes/purple";
import emailSVG from "../images/email.svg";
import githubSVG from "../images/github.svg";
import linkedinSVG from "../images/linkedin.svg";

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
`;

const List = styled(motion.ul)`
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
        <List initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <ImageLinkItem
            url="mailto: rihor.pedro@outlook.com?subject=[CONTACT]"
            src={emailSVG}
            alt="Email"
            text="Email"
          />
          <ImageLinkItem
            url="https://github.com/rihor"
            src={githubSVG}
            alt="Github"
            text="Github"
          />
          <ImageLinkItem
            url="https://www.linkedin.com/in/phpinhov/"
            src={linkedinSVG}
            alt="Linkedin"
            text="Linkedin"
          />
        </List>
      </Article>
    </Layout>
  );
}
