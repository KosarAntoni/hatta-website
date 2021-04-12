import React from "react";
import PageInfo from "../components/molecules/PageInfo/PageInfo"

const pageData = {
  title: "gallery",
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`
};

const GalleryPage = () => (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    </>
);

export default GalleryPage;

