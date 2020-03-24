import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import purple from "../styles/themes/purple";

export default function Contact() {
  return (
    <Layout theme={purple}>
      <SEO title="Contact me" themeColor={purple.colors.background} />
      <article>I am open to contact on the email blablabla</article>
    </Layout>
  );
}
