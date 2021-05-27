// import TextInput from "../../molecules/TextInput/TextInput"
// import React from "react"
// import { withFormik } from "formik"
// import * as Yup from "yup"
// import Button from "../../atoms/Button/Button"
// import styled from "styled-components"

// const StyledTextInput = styled(TextInput)`
//   margin-bottom: 15px;
// `
//
// const StyledButton = styled(Button)`
//   margin-top: 15px;
// `

// const ContactForm = props => {
//   const {
//     values,
//     touched,
//     errors,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     isSubmitting
//   } = props
//   return (
//     <form onSubmit={handleSubmit} data-netlify={true}>
//       <input type="hidden" name="form-name" value="contact" />
//       <StyledTextInput
//         id="name"
//         type="text"
//         label="Name"
//         placeholder=""
//         error={touched.name && errors.name}
//         value={values.name}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//       <StyledTextInput
//         id="email"
//         type="email"
//         label="E-mail"
//         placeholder=""
//         error={touched.email && errors.email}
//         value={values.email}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//       <StyledButton type="submit" disabled={isSubmitting}>
//         Submit
//       </StyledButton>
//     </form>
//   )
// }
//
// const formikEnhancer = withFormik({
//   validationSchema: Yup.object().shape({
//     name: Yup.string()
//       .min(2, "C'mon, your name is longer than that")
//       .required(" is required."),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required(" is required!")
//   }),
//
//   mapPropsToValues: ({ user }) => ({
//     ...user
//   }),
//   handleSubmit: (values, actions) => {
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact-demo", ...values })
//     })
//       .then(() => {
//         alert("Success")
//         actions.resetForm()
//       })
//       .catch(() => {
//         alert("Error")
//       })
//       .finally(() => actions.setSubmitting(false))
//   },
//   displayName: "ContactForm"
// })

import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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
          body: encode({ "form-name": "contact-demo", ...values })
        })
          .then(() => {
            alert('Success');
            actions.resetForm()
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))
      }
    }
    validate={values => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const errors = {};
      if(!values.name) {
        errors.name = 'Name Required'
      }
      if(!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Valid Email Required'
      }
      if(!values.message) {
        errors.message = 'Message Required'
      }
      return errors;
    }}
  >
    {() => (
      <Form name="contact-demo" data-netlify={true}>
        <label htmlFor="name">Name: </label>
        <Field name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email: </label>
        <Field name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="message">Message: </label>
        <Field name="message" component="textarea"/>
        <ErrorMessage name="message" />

        <button type="submit">Send</button>
      </Form>
    )}
  </Formik>
)
// const EnhancedForm = formikEnhancer(ContactForm)

// export default EnhancedForm
export default ContactForm;