import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image"
import {Link} from "gatsby"
import Paragraph from "../../atoms/Paragraph/Paragraph"

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

  h2,
  p {
    margin: 5px;
  }
`;

const Preview = ({ title, slug, image, date }) => (
  <PreviewWrapper to={`/articles/${slug}`}>
    <StyledGatsbyImage image={image} alt={title}/>
    <PreviewInfoLabel>
      <Paragraph bold>{title}</Paragraph>
      <Paragraph>{date}</Paragraph>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
