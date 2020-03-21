import React from "react";
import styled from "styled-components";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import light from "../styles/themes/light";

const Section = styled.section`
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  aside {
    width: 200px;
    height: 200px;
    border: 2px dotted #0005;
    border-radius: 16px;
    margin-bottom: 100px;
    margin-right: 50px;
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

const Article = styled.article`
  width: 500px;
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

const App = () => {
  return (
    <Layout theme={light}>
      <SEO title="Pedro Pinho" themeColor={light.colors.background} />
      <Section>
        <Article>
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
        <aside></aside>
      </Section>
    </Layout>
  );
};

export default App;
