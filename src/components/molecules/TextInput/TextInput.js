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
`

const StyledLabel = styled(Label)`
  margin-bottom: 10px;
`

const TextInput = ({
                     type,
                     name,
                     id,
                     placeholder,
                     label,
                     error,
                     value,
                     onChange,
                     ...props
                   }) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={id} error={error}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  )
}

export default TextInput;