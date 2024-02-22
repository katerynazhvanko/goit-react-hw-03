import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ user: { id, name, number } }) {
  return (
    <li className={css.contact} key={id}>
      <div className={css.information}>
        <p className={css.name}>
          <BsFillPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button type="button" className={css.button}>
        Delete
      </button>
    </li>
  );
}
