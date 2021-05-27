import React from "react";
import { Formik, Form } from 'formik';
import styled from "styled-components";
import Button from "../../atoms/Button/Button"
import TextInput from "../../molecules/TextInput/TextInput"
import * as Yup from 'yup';
import { navigate } from "gatsby"

const StyledButton = styled(Button)`
  margin-top: 15px;
`

const StyledTextInput = styled(TextInput)`
  margin-bottom: 15px;
`

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'is too Short!')
    .max(50, 'is too Long!')
    .required('is required'),
  email: Yup.string().email('is invalid').required('is required'),
  message: Yup.string()
    .min(2, 'is too Short!')
    .required('is required'),
});

const ContactForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={
      (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-form", ...values })
        })
          .then(() => {
            actions.resetForm()
            navigate(
              "/form-submitted/",
              { replace: true, state: {modal: true} }
            )
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))
      }
    }
    validationSchema={ValidationSchema}
  >
    {({ errors,
        values,
        handleChange,
        handleBlur,
        touched}) => (
      <Form name="contact-demo" data-netlify={true}>
        <StyledTextInput
          name="name"
          placeholder=""
          error={touched.name && errors.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          Name
        </StyledTextInput>

        <StyledTextInput
          name="email"
          placeholder=""
          error={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          Email
        </StyledTextInput>

        <StyledTextInput
          name="message"
          placeholder=""
          error={touched.message && errors.message}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          textarea
        >
          Message
        </StyledTextInput>

        <StyledButton type="submit">Send</StyledButton>
      </Form>
    )}
  </Formik>
)

export default ContactForm;