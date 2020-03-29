import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Project } from "../components/project";
import green from "../styles/themes/green";

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
    <Layout theme={green}>
      <SEO title="Projects" themeColor={green.colors.metaBackground} />
      <Article>
        <header>
          <h1>My Projects</h1>
        </header>

        {console.log(data)}
        <ul>
          {projectsArray.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </ul>
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
          title
          codeUrl
          image {
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
