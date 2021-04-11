import React from "react"
import { graphql } from "gatsby"
import Button from "../components/Button/Button"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    width: 70%;
    line-height: 0.9;
    margin: 0;
    user-select: none;
  }

  p {
    margin: 20px 0 40px;
    width: 35%;
    user-select: none;
  }
`

const ImageWrapper = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`

const IndexPage = ({ data }) => (
  <>
    {console.log(data)}
    <ContentWrapper>
      <h1>Your new space</h1>
      <p>While artists work from real to the abstract, architects must work from the abstract to the
        real.</p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <ImageWrapper image={data.file.childImageSharp.gatsbyImageData} alt=""/>
  </>
)

export const query = graphql`
  {
    file(name: {eq: "hero"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
  }
`
export default IndexPage
