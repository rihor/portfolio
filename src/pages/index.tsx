import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Link } from "../components/link";

const App = () => (
  <Layout>
    <SEO title="Pedro Pinho" />
    <div>Hello World</div>
    <Link to="/about">About</Link>
  </Layout>
);

export default App;
