import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import mountAndRunCharAnimation from "../animation/character";
import light from "../styles/themes/light";

const Section = styled.section`
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  aside {
    width: 300px;
    height: 300px;
    margin-bottom: 100px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;
      justify-content: space-evenly;
    }

    article,
    aside {
      margin: 0;
    }
  }
`;

const Article = styled(motion.article)`
  max-width: 500px;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  header {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    h1 {
      font-size: clamp(34px, 42px, 42px);
      margin-left: -0.04em;
    }

    h2 {
      font-size: clamp(16px, 22px, 24px);
      opacity: 0.8;
    }
  }

  p {
    line-height: 150%;
  }
`;

function Home() {
  useEffect(() => {
    mountAndRunCharAnimation(".char");
  }, []);

  return (
    <Layout theme={light}>
      <SEO title="Pedro Pinho" themeColor={light.colors.metaBackground} />
      <Section>
        <Article
          initial={{ opacity: 0, skew: 30, x: -250 }}
          animate={{ opacity: 1, skew: 0, x: 0 }}
        >
          <header>
            <h1>Pedro Pinho</h1>
            <h2>FullStack Developer</h2>
          </header>
          <p>
            Passionate about development, I study every day to become a better
            developer. I love web development and I can bring your idea to
            market.
          </p>
        </Article>
        <aside>
          <canvas className="char" width={240} height={240} />
        </aside>
      </Section>
    </Layout>
  );
}

export default Home;
