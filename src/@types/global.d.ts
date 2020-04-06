import { FluidObject } from "gatsby-image";

declare global {
  type Image = {
    id: string;
    childImageSharp: {
      fluid: FluidObject;
    };
  };

  type ProjectType = {
    id: string;
    title: string;
    description: string;
    tecnologies: string[];
    codeUrl: string;
    demoUrl?: string;
    images?: Image[]
  };
}
