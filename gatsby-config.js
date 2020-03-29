const siteTitle = "Pedro Pinho Portfolio";
const siteDescription =
  "My portfolio, come and see :)";
const siteAuthor = "Pedro Pinho";
const siteUrl = "http://rihor-portfolio.surge.sh";
const siteImage = `${siteUrl}/icons/icon_512x512.png`;
const siteKeywords = [
  "portfolio",
  "full-stack",
  "fullstack",
  "developer",
  "gatsby",
  "typescript",
  "javascript",
  "react",
  "rihor",
];

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: "https://www.example.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
        icon: "src/images/icon.png",
        icons: [
          {
            src: "icons/icon_512x512.png",
            sizes: "512x512",
            types: "image/png",
          },
          {
            src: "icons/icon_192x192.png",
            sizes: "192x192",
            types: "image/png",
          },
        ],
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      },
    },
  ],
};
