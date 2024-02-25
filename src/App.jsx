import { useState } from "react";
import inititalState from "./users.json";

// import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchForm from "./components/SearchForm/SearchForm";

export default function App() {
  const [users, setUsers] = useState(inititalState);
  // const [text, setText] = useState("");
  const [filter, setFilter] = useState("");

  const visibleContacts = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const initialValues = {
  //   username: "",
  //   number: "",
  // };

  // для пошуку
  // const [inputValue, setInputValue] = useState("");

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };
  // ----

  // для форми контактів
  // const [values, setValues] = useState(initialValues);

  // const handleFormChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (values, actions) => {
  //   console.log(values);
  //   actions.resetForm();
  // };
  // ----

  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm
        value={values}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      /> */}

      <SearchForm value={filter} onFilter={setFilter} />
      <p>{filter}</p>
      <ContactList users={visibleContacts} />
    </>
  );
}
