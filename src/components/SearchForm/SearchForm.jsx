import { Formik, Form, Field } from "formik";
import css from "./SearchForm.module.css";

export default function SearchForm({ inputValue, handleChange }) {
  return (
    <Formik>
      <Form className={css.form}>
        <div>
          <label className={css.label}>Find contacts by name</label>
          <Field
            className={css.field}
            value={inputValue}
            onChange={() => {
              handleChange;
            }}
          >
            {inputValue}
          </Field>
        </div>
      </Form>
    </Formik>
  );
}
