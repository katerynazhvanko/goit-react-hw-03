import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchForm from "./components/SearchForm/SearchForm";

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem("contacts");

  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState("");

  // save in memory between reload page

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //add components

  const addContact = (newContact) => {
    console.log(newContact);
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  // delete component

  const deleteContact = (contactId) => {
    console.log(contactId);
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  // filter contacts
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchForm value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </>
  );
}
