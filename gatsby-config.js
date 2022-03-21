module.exports = {
  siteMetadata: {
    title: `CS Media`,
    description: `Social Media Marketing`,
    author: `Carly Sarah Mee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cs-media-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-source-wordpress`,
        options: {
            url: `https://csmedia.xyz/graphql`,
        },
    },
    {
        resolve: `gatsby-source-graphql`,
        options: {
          // This type will contain remote schema Query type
          typeName: `WPGraphQL`,
          // This is field under which it's accessible
          fieldName: `wpcontent`,
          // Url to query from
          url: `https://csmedia.xyz/graphql`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
    },
      `gatsby-plugin-gatsby-cloud`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
