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

  h1 {
    display: flex;
    flex-direction: column;
  }

  span:nth-child(1) {
    margin-right: 0.2em;
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
          <h1>
            <span>Pedro Pinho.</span>
            <span>FullStack Developer.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ex
            est. Proin pulvinar pharetra eros finibus viverra. Integer
            sollicitudin iaculis lobortis. In accumsan semper ullamcorper.
            Mauris sit amet erat tempus, hendrerit eros vel, ullamcorper dui.
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
