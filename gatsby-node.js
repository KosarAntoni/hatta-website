const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/article.js`)
  const galleryPictureTemplate = path.resolve(`src/layouts/picture.js`)

  const result = await graphql(`
  query datoCmsPage {
    allDatoCmsArticle {
      nodes {
        id
        title
        }
      }
    allDatoCmsPicture {
      nodes {
        id
      }
    }
  }
`)

  result.data.allDatoCmsArticle.nodes.forEach(article => {
    const slugifiedTitle = slugify(article.title, { lower: true })

    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: article.id
      }
    })
  })

  result.data.allDatoCmsPicture.nodes.forEach(picture => {

    createPage({
      path: `gallery/${picture.id}`,
      component: galleryPictureTemplate,
      context: {
        id: picture.id
      }
    })
  })
}
