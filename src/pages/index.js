import React from "react"
import { graphql, Link } from "gatsby"
import Button from "../components/atoms/Button/Button"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Title from "../components/atoms/Title/Title"

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 100px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const StyledTitle = styled(Title)`
  font-size: 85px;
  width: 70%;
  line-height: 0.9;
  margin: 0;
  user-select: none;
`

const StyledParagraph = styled(Paragraph)`
  margin: 20px 0 40px;
  width: 40%;
  user-select: none;
`

const HeroImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
  z-index: 10;
`

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <StyledTitle>Your new space</StyledTitle>
      <StyledParagraph>{data.datoCmsHeadline.headlineText}</StyledParagraph>
      <Button as={Link} to="/contact">estimate project</Button>
    </ContentWrapper>
    <HeroImage image={data.file.childImageSharp.gatsbyImageData} alt="" />
  </>
)

export const query = graphql`
  {
    datoCmsHeadline {
      headlineText
    }
    file(name: {eq: "hero"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
  }
`
export default IndexPage
