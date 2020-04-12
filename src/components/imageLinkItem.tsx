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
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} />
      {text && <p>{text}</p>}
    </a>
  </motion.li>
);

export { ImageLinkItem };
