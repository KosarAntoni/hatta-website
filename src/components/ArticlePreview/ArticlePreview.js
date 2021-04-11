import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image"
import {Link} from "gatsby"

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
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

  h2,
  p {
    margin: 5px;
  }
`;

const Preview = ({ title, excerpt, slug, image }) => (
  <PreviewWrapper to={`/articles/${slug}`}>
    <StyledGatsbyImage image={image} alt={title}/>
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
