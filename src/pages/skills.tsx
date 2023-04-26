import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { ImageLinkItem } from "../components/imageLinkItem";
import dark from "../styles/themes/dark";
import reactSVG from "../images/react.svg";
import nextSVG from "../images/next.svg";
import threeSVG from "../images/three.svg";
import reduxSVG from "../images/redux.svg";
import jestSVG from "../images/jest.svg";
import laravelSVG from "../images/laravel.svg";
import nestSVG from "../images/nest.svg";
import typescriptSVG from "../images/typescript.svg";
import pythonSVG from "../images/python.svg";
import dockerPNG from "../images/docker.png";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 80px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h1 {
      font-size: clamp(36px, 42px, 42px);
    }

    h1,
    p {
      text-align: center;
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const List = styled(motion.ul)`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

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
          <h1>Skills</h1>
          <p>These are the technologies that I&apos;m comfortable with.</p>
        </header>
        <section>
          <List
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ImageLinkItem
              src={reactSVG}
              url="https://reactjs.org/"
              alt="React"
            />
            <ImageLinkItem src={nextSVG} url="https://nextjs.org/" alt="Next" />
            <ImageLinkItem
              src={threeSVG}
              url="https://threejs.org/"
              alt="Three.js"
            />
            <ImageLinkItem
              src={dockerPNG}
              url="https://www.docker.com/"
              alt="Docker"
            />
            <ImageLinkItem src={nestSVG} url="https://nestjs.com/" alt="Nest" />
            <ImageLinkItem
              src={laravelSVG}
              url="https://laravel.com/"
              alt="Laravel"
            />
            <ImageLinkItem src={jestSVG} url="https://jestjs.io/" alt="Jest" />
            <ImageLinkItem
              src={reduxSVG}
              url="https://redux.js.org/"
              alt="Redux"
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
        </section>
      </Article>
    </Layout>
  );
}
