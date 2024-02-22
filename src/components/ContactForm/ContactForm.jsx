import { Formik, Form, Field } from "formik";

import css from "./ContactForm.module.css";

export default function ContactForm(
  values,
  handleSubmit,
  handleFormChange,
  idName,
  idNumber
) {
  return (
    <Formik
      initialValues={{ values }}
      onSubmit={() => {
        handleSubmit;
      }}
      onChange={() => {
        handleFormChange;
      }}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={idName} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={idName}
            className={css.field}
          />
        </div>
        <div>
          <label htmlFor={idNumber} className={css.label}>
            Number
          </label>
          <Field type="tel" name="tel" id={idNumber} className={css.field} />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
