import React from "react";
import PageInfo from "../components/molecules/PageInfo/PageInfo"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby-plugin-modal-routing"

const pageData = {
  title: "gallery",
};

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const ImageWrapper = styled(Link)`
  display: block;
  height: 240px;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  height: 100%;
`

const GalleryPage = ({data}) => (
    <>
      <PageInfo title={pageData.title} paragraph={data.datoCmsHeadline.headlineText} />
      <GalleryWrapper>
        {data.allDatoCmsPicture.nodes.map(picture =>(
          <ImageWrapper
            to={`/gallery/${picture.id}`}
            asModal
            key={picture.id}
          >
            <StyledGatsbyImage alt={picture.pictureInfo} image={picture.pictureData.gatsbyImageData}/>
          </ImageWrapper>
        ))}
      </GalleryWrapper>
    </>
);

export const query = graphql`
  {
    allDatoCmsPicture {
      nodes {
        id
        pictureInfo
        pictureData {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
    datoCmsHeadline {
      headlineText
    }
  }
`;

export default GalleryPage;

