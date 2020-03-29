import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import chroma from "chroma-js";

const ProjectContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.secundary};

  @media screen and (max-width: 900px) {
    & {
      flex-direction: column-reverse;
    }
  }
`;

const ProjectBody = styled.section`
  height: 250px;
  max-width: 540px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
`;

const Header = styled.header`
  h2 {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }
`;

const ButtonLink = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;

    background: ${({ theme }) =>
      chroma(theme.colors.primary)
        .alpha(0.8)
        .hex()};
  }

  & + a {
    margin-left: 20px;
  }
`;

const StyledImg = styled(Img)`
  min-width: 500px;
  max-width: 500px;
  min-height: 250px;
  max-height: 250px;

  @media screen and (max-width: 900px) {
    & {
      min-width: 100%;
      max-width: 500px;
      height: 250px;
    }
  }
`;

type Props = {
  project: ProjectType;
};

const Project: React.FC<Props> = ({ project }) => {
  const { title, description, codeUrl, demoUrl, image } = project;

  return (
    <ProjectContainer>
      <ProjectBody>
        <Header>
          <h2>{title}</h2>
          <p>{description}</p>
        </Header>
        <div>
          {codeUrl && (
            <ButtonLink
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE
            </ButtonLink>
          )}
          {demoUrl && (
            <ButtonLink
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              DEMO
            </ButtonLink>
          )}
        </div>
      </ProjectBody>
      <StyledImg sizes={image.childImageSharp.fluid} alt={title} />
    </ProjectContainer>
  );
};

export { Project };
