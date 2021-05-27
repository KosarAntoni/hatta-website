import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import styled from "styled-components"
import { Link } from "gatsby"
import Heading from "../components/atoms/Heading/Heading"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const FormSubmitted = ( ) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <ContentWrapper>
        {modal ? (
          <CloseLink to={closeTo}>
            Close
          </CloseLink>
        ) : (
          <GalleryLink to="/">&#8592; back to main</GalleryLink>
        )}

        <Heading>Thank you!</Heading>
        <Paragraph>I'll contact you as soon as possible</Paragraph>
      </ContentWrapper>
    )}
  </ModalRoutingContext.Consumer>
)

export default FormSubmitted
