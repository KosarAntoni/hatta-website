const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)

  const result = await graphql(`
      query articlesQuery {
        allMdx {
          nodes {
            frontmatter {
              author
              slug
              title
              featuredImage {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
            }
            body
          }
        }
      }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMdx.nodes.forEach(post => {
      createPage({
        path: `articles/${post.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          post
        }
      })
    })
  })
}
