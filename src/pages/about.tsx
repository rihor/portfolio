import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import purple from "../styles/themes/purple";

/***************************************************************
  Below are some examples of using styled-components with the
  theme and framer-motion.
/***************************************************************

/*
  1. A basic styled component using the theme.
*/
const StyledComponent1 = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
`;

/*
  3. A styled component that extends a framer-motion component.
  (animation props applied in the component instance)
*/

const OrangeBlock = styled(motion.div)`
  background: ${props => props.theme.colors.primary};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

/*
  4. A styled component that extends a framer-motion component.
  (animation props applied in the styled-component definition
  via the attrs method)
*/
const BlueBlock = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 2 },
  whileHover: { scale: 0.8 },
}))`
  background: ${props => props.theme.colors.background};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

const BlocksWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AboutPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <Layout>
      <SEO
        title="About gatsby-starter-template-deluxe"
        description="Examples using the gatsby-starter-template-deluxe."
      />
      <h3>
        Hi, you are on the <code>{path}</code> page!
      </h3>

      <StyledComponent1>I am a basic styled component.</StyledComponent1>
    </Layout>
  );
};

export default AboutPage;
