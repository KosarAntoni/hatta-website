import React from 'react';
import styled from 'styled-components';
import Title from "../../atoms/Title/Title"
import Paragraph from "../../atoms/Paragraph/Paragraph"

const Wrapper = styled.div`
  margin: 0 0 50px;
  max-width: 350px;
`;

const StyledTitle = styled(Title)`
  text-transform: lowercase;
  margin-bottom: 15px;
`

const PageInfo = ({ title, paragraph }) => (
  <Wrapper>
    <StyledTitle>{title}</StyledTitle>
    <Paragraph>{paragraph}</Paragraph>
  </Wrapper>
);

export default PageInfo;