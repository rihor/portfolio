import React from "react";
import styled from "styled-components";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { ImageLinkItem } from "../components/imageLinkItem";
import dark from "../styles/themes/dark";
import reactSVG from "../images/react.svg";
import nextSVG from "../images/next.svg";
import gatsbySVG from "../images/gatsby.svg";
import reduxSVG from "../images/redux.svg";
import jestSVG from "../images/jest.svg";
import sequelizeSVG from "../images/sequelize.svg";
import adonisSVG from "../images/adonis.svg";
import rollupSVG from "../images/rollup.svg";
import typescriptSVG from "../images/typescript.svg";
import expressSVG from "../images/express.svg";
import pythonSVG from "../images/python.svg";
import eslintSVG from "../images/eslint.svg";

const Article = styled.article`
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const IconsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & + section {
    margin: 0 20px;
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

export default function Skills() {
  return (
    <Layout theme={dark}>
      <SEO title="Skills" themeColor={dark.colors.metaBackground} />
      <Article>
        <header>
          <h1>My skills</h1>
          <p>
            Throught my life I&#x27;ve gathered some experience with these
            tecnologies
          </p>
        </header>
        <section>
          <IconsSection>
            <h2>Frontend</h2>
            <List>
              <ImageLinkItem
                src={reactSVG}
                url="https://reactjs.org/"
                alt="React"
                tooltip="React"
              />
              <ImageLinkItem
                src={nextSVG}
                url="https://nextjs.org/"
                alt="Next"
              />
              <ImageLinkItem
                src={gatsbySVG}
                url="https://www.gatsbyjs.org/"
                alt="Gatsby"
              />
            </List>
          </IconsSection>
          <IconsSection>
            <h2>Backend</h2>
            <List>
              <ImageLinkItem
                src={expressSVG}
                url="https://expressjs.com/"
                alt="Express"
              />
              <ImageLinkItem
                src={adonisSVG}
                url="https://adonisjs.com/"
                alt="Adonis"
              />
              <ImageLinkItem
                src={sequelizeSVG}
                url="https://sequelize.org/"
                alt="Sequelize"
              />
            </List>
          </IconsSection>
          <IconsSection>
            <h2>General</h2>
            <List>
              <ImageLinkItem
                src={jestSVG}
                url="https://jestjs.io/"
                alt="Jest"
              />
              <ImageLinkItem
                src={reduxSVG}
                url="https://redux.js.org/"
                alt="Redux"
              />
              <ImageLinkItem
                src={rollupSVG}
                url="https://rollupjs.org/"
                alt="Rollup"
              />
              <ImageLinkItem
                src={eslintSVG}
                url="https://eslint.org/"
                alt="ESLint"
              />
              <ImageLinkItem
                src={typescriptSVG}
                url="https://www.typescriptlang.org/"
                alt="Typescript"
              />
              <ImageLinkItem
                src={pythonSVG}
                url="https://www.python.org/"
                alt="Python"
              />
            </List>
          </IconsSection>
        </section>
      </Article>
    </Layout>
  );
}
