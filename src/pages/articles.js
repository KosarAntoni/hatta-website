import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import PageInfo from "../components/PageInfo/PageInfo"

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`

const pageData = {
  title: "articles",
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`
}

const ArticlesPage = ({ data }) => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <ArticlesWrapper>
      {data.allMdx.nodes.map(item => (
        <ArticlePreview title={item.frontmatter.title}
                        excerpt={item.excerpt}
                        slug={item.frontmatter.slug}
                        image={item.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
        />
      ))}
    </ArticlesWrapper>
  </>
)

export const query = graphql`
  {
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
        excerpt(pruneLength: 50)
      }
    }
  }
`

export default ArticlesPage
