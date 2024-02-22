import { useState, useId } from "react";
import users from "./components/ContactList/users.json";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchForm from "./components/SearchForm/SearchForm";

export default function App() {
  const initialValues = {
    username: "",
    number: "",
  };

  // для пошуку
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // ----

  // для форми контактів
  const [values, setValues] = useState(initialValues);

  const handleFormChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  // ----

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        value={values}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
        idName={nameFieldId}
        idNumber={numberFieldId}
      />

      <SearchForm inputValue={inputValue} handleChange={handleChange} />
      <ContactList users={users} />
    </>
  );
}
