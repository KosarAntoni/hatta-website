import React from "react"
import PageInfo from "../components/molecules/PageInfo/PageInfo"
import { graphql } from "gatsby"
import EnhancedForm from "../components/organisms/ContactForm/ContactForm"

const pageData = {
  title: "contact"
}

const ContactPage = ({data}) => (
  <>
    <PageInfo
      title={pageData.title}
      paragraph={data.datoCmsHeadline.headlineText}
    />
    <EnhancedForm user={{ email: "", name: "" }} />
  </>
)

export const query = graphql`
  {
    datoCmsHeadline {
      headlineText
    }
  }
`

export default ContactPage
