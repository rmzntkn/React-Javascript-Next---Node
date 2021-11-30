module.exports = {
  siteMetadata: {
    title: `It is a website that contains react.js examples by Ramazan `,
    description:
      "Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.",
    keywords:
      "react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin",
    author: `Ramazan`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "x74ay9558nt0",
        accessToken: "yZ4LNCmMJ1xzbOoer_ZoKOluyRDdyTUVCEFh2qkgaM0",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
