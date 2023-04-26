import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Image = styled.img`
  /* width: 50px; */
  height: 50px;
`;

type Props = {
  url: string;
  src: string;
  alt: string;
  text?: string;
};

const ImageLinkItem: React.FC<Props> = ({ url, src, alt, text }) => (
  <motion.li
    initial={{ opacity: 0, rotate: 50 }}
    animate={{ opacity: 1, rotate: 0 }}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} />
      {text && <p>{text}</p>}
    </a>

    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15 }}
      style={{
        fontSize: 14,
      }}
    >
      {alt}
    </motion.span>
  </motion.li>
);

export { ImageLinkItem };
