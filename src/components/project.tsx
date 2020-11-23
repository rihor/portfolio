import React, { useState } from "react";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import chroma from "chroma-js";
import { motion } from "framer-motion";

import { useInterval } from "../hooks";

type ProjectsContainerProps = {
  hasImage: number;
};

// eslint-disable-next-line
const VerticalGridWithImage = css `
  grid-template-rows: 250px 1fr;
  grid-template-areas: "image" "body";
`;

// eslint-disable-next-line
const VerticalGridWithoutImage = css `
  grid-template-rows: 1fr;
  grid-template-areas: "body";
`;

const ProjectContainer = styled(motion.li)<ProjectsContainerProps>`
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-rows: 250px;
  grid-template-areas: "body image";

  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.secundary};

  @media screen and (max-width: 900px) {
    & {
      grid-template-columns: 1fr;

      ${({ hasImage }) =>
        hasImage ? VerticalGridWithImage : VerticalGridWithoutImage}
    }
  }
`;

const ProjectBody = styled.section`
  grid-area: body;
  padding: 25px 20px;
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;
`;

const Header = styled.header`
  margin-bottom: 40px;

  h1 {
    font-size: clamp(26px, 32px, 36px);
    margin-bottom: 10px;
  }

  p {
    line-height: 150%;
  }
`;

const TechList = styled.ul`
  display: flex;
  margin-top: 10px;

  li {
    padding: 4px 6px;
    margin-top: 5px;
    margin-right: 5px;
    font-size: 16px;
    background: #0002;
  }
`;

const ButtonLink = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
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
  grid-area: image;
`;

type Props = {
  project: ProjectType;
};

const Project: React.FC<Props> = ({ project }) => {
  const { title, description, tecnologies, codeUrl, demoUrl, images } = project;

  const [imagePosition, setImagePosition] = useState(0);

  useInterval(() => {
    if (!images) return;

    const lastImageIndex = images.length - 1;
    const nextPosition = imagePosition + 1;

    if (lastImageIndex < nextPosition) {
      setImagePosition(0);
    } else {
      setImagePosition(nextPosition);
    }
  }, 3000);

  return (
    <ProjectContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      hasImage={images ? 1 : 0}
    >
      <ProjectBody>
        <Header>
          <h1>{title}</h1>
          <p>{description}</p>
          <TechList>
            {tecnologies.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </TechList>
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
      {images && (
        <StyledImg
          sizes={images[imagePosition].childImageSharp.fluid}
          alt={title}
        />
      )}
    </ProjectContainer>
  );
};

export { Project };
