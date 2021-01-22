import React from "react";
import shortid from "shortid";
import * as phonebookActions from "../Redux/phonebook/phonebook-actions";

import s from "./PhoneBock.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";

export default function SearchContact() {
  const state = useSelector(phonebookSelectors.getContactFilter);
  const dispatch = useDispatch();

  const searchContact = (e) => {
    dispatch(phonebookActions.veluesFilter(e.target.value));
  };

  const id = shortid.generate();
  return (
    <div className={s.containerSearch}>
      <label className={s.labelSearch} htmlFor={id}>
        Поиск контакта по имени
      </label>
      <input
        type="text"
        name="filter"
        value={state}
        onChange={searchContact}
        id={id}
        autoComplete="off"
        className={s.inputSearch}
      ></input>
    </div>
  );
}
