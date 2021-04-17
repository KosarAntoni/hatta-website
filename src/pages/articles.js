import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ArticlePreview from "../components/molecules/ArticlePreview/ArticlePreview"
import PageInfo from "../components/molecules/PageInfo/PageInfo"
import slugify from "slugify"

const pageData = {
  title: "articles",
}

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`

const ArticlesPage = ({ data }) => (
  <>
    <PageInfo title={pageData.title} paragraph={data.datoCmsHeadline.headlineText} />
    <ArticlesWrapper>
      {data.allDatoCmsArticle.nodes.map(item => (
        <ArticlePreview
          key={item.id}
          title={item.title}
          image={item.featuredImage.gatsbyImageData}
          date={item.meta.publishedAt}
          slug={slugify(item.title,{lower:true})}
        />
      ))}
    </ArticlesWrapper>
  </>
)

export const query = graphql`
  {
    datoCmsHeadline {
      headlineText
    }
    allDatoCmsArticle {
      nodes {
        id
        featuredImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        title
        meta {
          publishedAt(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`

export default ArticlesPage
