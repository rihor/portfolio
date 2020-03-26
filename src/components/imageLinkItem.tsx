import React from "react";
import styled from "styled-components";

const Image = styled.img`
  /* width: 50px; */
  height: 50px;
`;

type Props = {
  url: string;
  src: string;
  alt: string;
  text?: string;
  tooltip?: string;
};

const ImageLinkItem: React.FC<Props> = ({ url, src, alt, text, tooltip }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} />
      {text && <p>{text}</p>}
    </a>
  </li>
);

export { ImageLinkItem };
