import { FluidObject } from "gatsby-image";

declare global {
  type ProjectType = {
    id: string;
    title: string;
    description: string;
    codeUrl: string;
    demoUrl?: string;
    image: {
      id: string;
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}
