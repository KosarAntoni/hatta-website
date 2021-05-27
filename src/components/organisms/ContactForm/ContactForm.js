// import TextInput from "../../molecules/TextInput/TextInput"
import React from "react"
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

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>

      </form>
    );
  }
}
// const EnhancedForm = formikEnhancer(ContactForm)

// export default EnhancedForm
export default ContactForm;