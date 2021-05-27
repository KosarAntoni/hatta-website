require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,600,700`
        ],
        display: "swap"
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          //modal window style
          style: {
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              zIndex: 100,

              overflow: "scroll",

              cursor: "zoom-out",
            },
            content: {
              position: "relative",
              top: "auto",
              left: "auto",
              right: "auto",
              bottom: "auto",

              border: "none",
              outline: "none",
              borderRadius: "0",
              background: "#fff",
              overflow: "auto",

              WebkitOverflowScrolling: "touch",
              padding: "40px 40px 20px",
              width: "100%",
              maxWidth: "max-content",
              margin: "40px auto",

              cursor: "default",
            }
          }
        }
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`
    // `gatsby-plugin-offline`,
  ]
}
