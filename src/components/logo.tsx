import React from "react";
import { DefaultTheme } from "styled-components";
import chroma from "chroma-js";
import { motion } from "framer-motion";

type Props = {
  theme: DefaultTheme;
};

const Logo: React.FC<Props> = ({ theme }) => {
  const strokeBackColor = chroma(theme.colors.text).hex();
  const strokeFrontColor = chroma(theme.colors.primary).hex();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52.16 84.5"
      width="50px"
      height="50px"
    >
      <path
        d="M4.54,7.7A108.37,108.37,0,0,1,22.7,6.2c9.35,0,16.2,2.23,20.55,6.25,4,3.57,6.41,9,6.41,15.73S47.71,40.34,44,44.24C39,49.7,30.85,52.5,21.61,52.5A31.39,31.39,0,0,1,14,51.83V82H4.54Z"
        stroke={strokeBackColor}
        fill={strokeBackColor}
        strokeWidth="5px"
        strokeMiterlimit="10"
      />
      <motion.path
        d="M1.5,3A114.82,114.82,0,0,1,20.56,1.5c9.82,0,17,2.31,21.58,6.47,4.23,3.69,6.74,9.36,6.74,16.29S46.82,36.85,42.94,40.9c-5.25,5.66-13.81,8.55-23.52,8.55a33.56,33.56,0,0,1-8-.7V80H1.5Z"
        fill="none"
        strokeWidth="5px"
        stroke={strokeFrontColor}
        strokeMiterlimit="10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0.4,
            pathLength: 0,
          },
          visible: {
            opacity: 1,
            pathLength: 1,
          },
        }}
        transition={{
          duration: 1.5,
          ease: [1, 0, 0.8, 1],
        }}
      />
    </svg>
  );
};

export default Logo;
