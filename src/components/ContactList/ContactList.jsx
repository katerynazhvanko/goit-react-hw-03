import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ users }) {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <Contact user={user} key={user.id} />
      ))}
    </ul>
  );
}
