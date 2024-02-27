import { useId } from "react";
import css from "./SearchForm.module.css";

export default function SearchForm({ value, onFilter }) {
  const searchId = useId();
  return (
    <div className={css.form}>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.field}
      />
    </div>
  );
}
