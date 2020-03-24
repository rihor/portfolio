import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" themeColor="#d0d" />
      <h1>Projects</h1>
      <div>
        <ul>
          <li>
            <div>
              <section>
                <h1>Project</h1>
                <p>Amazing Description</p>
                <div>
                  <button>Code</button>
                  <button>Live</button>
                </div>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
