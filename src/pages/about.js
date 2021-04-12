import React from "react";
import PageInfo from "../components/molecules/PageInfo/PageInfo";
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Paragraph from "../components/atoms/Paragraph/Paragraph"

const pageData = {
  title: "about",
};

const ContentContainer = styled.div`
  position: relative;
  width: 50%;
  padding: 40px 50px 40px 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  ::before {
    position: absolute;
    display: block;
    content: '';
    height: 4px;
    width: 300%;
    background-color: #000;
    z-index: -1;
    top: -4px;
    left: -200%;
  }

  ::after {
    position: absolute;
    display: block;
    content: '';
    height: 4px;
    width: 300%;
    background-color: #000;
    z-index: -1;
    bottom: -4px;
    left: -200%;
  }
`;

const MainImage = styled(GatsbyImage)`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;

const AboutPage = ({data}) => (
    <>
      <PageInfo title={pageData.title} paragraph={data.datoCmsHeadline.headlineText} />
      <MainImage
        image={data.datoCmsAboutAuthor.photo.gatsbyImageData}
        alt={data.datoCmsAboutAuthor.name} />
      <ContentContainer>
        <Paragraph>{data.datoCmsAboutAuthor.about}</Paragraph>
        <Paragraph bold>{data.datoCmsAboutAuthor.name}</Paragraph>
      </ContentContainer>
      </>
);

export const query = graphql`
  {
    datoCmsHeadline {
      headlineText
    }
    datoCmsAboutAuthor {
      id
      about
      name
      photo {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default AboutPage;
