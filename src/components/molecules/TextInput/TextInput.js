import Label from "../../atoms/Label/Label"
import React from "react"
import styled from "styled-components"

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`

const StyledInput = styled.input`
  border-radius: 0;
  border: 1px solid #000;
  padding: 8px;
  transition: box-shadow 0.3s;
  box-shadow: 0 0 0 0 #000;
  resize: none;

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px #000;
  }
`

const StyledLabel = styled(Label)`
  margin-bottom: 10px;
`

const TextInput = ({
                     type,
                     name,
                     placeholder,
                     error,
                     value,
                     onChange,
                     onBlur,
                     children,
                     textarea,
                     ...props
                   }) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={name} error={error}>
        {children}
      </StyledLabel>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
        as={textarea ? "textarea" : null}
        rows="8"
      />
    </InputWrapper>
  )
}

export default TextInput;