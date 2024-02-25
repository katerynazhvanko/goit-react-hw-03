import { useId } from "react";

import { Formik, Form, Field } from "formik";

import css from "./ContactForm.module.css";

export default function ContactForm(values, handleSubmit, handleFormChange) {
  const nameId = useId();
  const numberId = useId();

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
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={nameId}
            className={css.field}
          />
        </div>
        <div>
          <label htmlFor={numberId} className={css.label}>
            Number
          </label>
          <Field type="tel" name="tel" id={numberId} className={css.field} />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
