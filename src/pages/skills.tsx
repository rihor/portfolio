import React from "react";
import styled from "styled-components";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import dark from "../styles/themes/dark";

const Article = styled.article``;

export default function Skills() {
  return (
    <Layout theme={dark}>
      <SEO title="Pedro Pinho | Skills" themeColor={dark.colors.background} />
      <Article>
        <h1>My skills</h1>
        <p>
          Throught my life Ive gathered some experience with these tecnologies
        </p>
        <section>
          <ul>
            <li>Tal skill</li>
            <li>Outra skill</li>
          </ul>
        </section>
      </Article>
    </Layout>
  );
}
