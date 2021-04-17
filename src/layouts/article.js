import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import Title from "../components/atoms/Title/Title"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Heading from "../components/atoms/Heading/Heading"

const ArticleContainer = styled.div`
  width: 60%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const MainImage = styled(GatsbyImage)`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
  z-index: 10;
`

const ContentWrapper = styled.div`
  margin: 50px 0 10px;
`

const ContentImage = styled(GatsbyImage)`
  margin: 50px 0;
`

const PostLayout = ({ data }) => {
  return (
    <>
      <MainImage
        image={data.datoCmsArticle.featuredImage.gatsbyImageData}
        alt={data.datoCmsArticle.title} />
      <ArticleContainer>
        <Title>{data.datoCmsArticle.title}</Title>
        <Paragraph bold>{data.datoCmsArticle.author}</Paragraph>
        <ContentWrapper>
          {data.datoCmsArticle.articleContent.map(item => {
            if ("paragraphContent" in item) {
              return <Paragraph key={item.id}>{item.paragraphContent}</Paragraph>
            } else if ("headingContent" in item) {
              return <Heading key={item.id}>{item.headingContent}</Heading>
            } else if ("imageData" in item) {
              return <ContentImage key={item.id}
                                  image={item.imageData.gatsbyImageData}
                                  alt="" />
            }
            return null;
          })}
        </ContentWrapper>
      </ArticleContainer>
    </>
  )
}

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: {eq: $id}) {
      author
      title
      featuredImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
      articleContent {
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsImage {
          imageData {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
          id
        }
      }
    }
  }
`

export default PostLayout