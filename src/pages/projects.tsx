import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Project } from "../components/project";
import blue from "../styles/themes/blue";

const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

type AllProjectsQueryType = {
  data: {
    projectsResult: {
      edges: [
        {
          node: ProjectType;
        }
      ];
    };
  };
};

export default function ProjectsPage({ data }: AllProjectsQueryType) {
  const projectsArray = data.projectsResult.edges.map(projectEdge => {
    return projectEdge.node;
  });

  return (
    <Layout theme={blue}>
      <SEO title="Projects" themeColor={blue.colors.metaBackground} />
      <Article>
        <header>
          <h1>My Projects</h1>
        </header>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projectsArray.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </motion.ul>
      </Article>
    </Layout>
  );
}

export const AllProjectsQuery = graphql`
  query Projects {
    projectsResult: allProjectsJson {
      edges {
        node {
          demoUrl
          description
          tecnologies
          title
          codeUrl
          images {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
