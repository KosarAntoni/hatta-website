import TextInput from "../../molecules/TextInput/TextInput"
import React from "react"
import { withFormik } from "formik"
import * as Yup from "yup"
import Button from "../../atoms/Button/Button"
import styled from "styled-components"

const StyledTextInput = styled(TextInput)`
  margin-bottom: 15px;
`

const StyledButton = styled(Button)`
  margin-top: 15px;
`

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <StyledTextInput
        id="name"
        type="text"
        label="Name"
        placeholder=""
        error={touched.name && errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <StyledTextInput
        id="email"
        type="email"
        label="E-mail"
        placeholder=""
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <StyledButton type="submit" disabled={isSubmitting}>
        Submit
      </StyledButton>
    </form>
  )
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required(" is required."),
    email: Yup.string()
      .email("Invalid email address")
      .required(" is required!")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "driversubmit", payload })
    })
    alert(payload.email)
    setSubmitting(false)
  },
  displayName: "ContactForm"
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const EnhancedForm = formikEnhancer(ContactForm)

export default EnhancedForm;