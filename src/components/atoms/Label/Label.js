import React from "react"
import styled from "styled-components"

const StyledLabel = styled.label`
  font-weight: 600;
  margin-bottom: 10px;
`

const Label = ({ error, children, ...props }) => {
  return (
    <StyledLabel {...props}>
      {children}
      {' '}
      {error}
    </StyledLabel>
  )
}

export default Label;