import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Paragraph from "../components/atoms/Paragraph/Paragraph"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CloseLink = styled(Link)`
  color: #000;
  text-decoration: none;
  align-self: flex-end;
  margin-bottom: 20px;
`

const GalleryLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-bottom: 20px;
`

const StyledGatsbyImage = styled(GatsbyImage)`
`

const PictureLayout = ({ data }) => (
  <div>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <ContentWrapper>
          {modal ? (
            <CloseLink to={closeTo}>
              Close
            </CloseLink>
          ) : (
            <GalleryLink to="/gallery">&#8592; back to gallery</GalleryLink>
          )}

          <StyledGatsbyImage
            alt={data.datoCmsPicture.pictureInfo}
            image={data.datoCmsPicture.pictureData.gatsbyImageData}
          />

          <Paragraph>{data.datoCmsPicture.pictureInfo}</Paragraph>
        </ContentWrapper>
      )}
    </ModalRoutingContext.Consumer>
  </div>
)

export const query = graphql`
  query querySinglePicture($id: String!) {
    datoCmsPicture(id: {eq: $id}) {
      pictureInfo
      pictureData {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
`

export default PictureLayout