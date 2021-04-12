import React from "react";
import PageInfo from "../components/molecules/PageInfo/PageInfo";

const pageData = {
  title: "contact",
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`
}

const ContactPage = () => (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    </>
);

export default ContactPage;
