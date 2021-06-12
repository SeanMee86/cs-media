module.exports = {
  flags: {
      DEV_SSR: false
  },
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-source-wordpress`,
        options: {
            url: `http://54.212.245.198/graphql`,
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
          url: `http://54.212.245.198/graphql`,
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
