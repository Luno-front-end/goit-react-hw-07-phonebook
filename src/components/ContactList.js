import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as phonebookActions from "../Redux/phonebook/phonebook-actions";

import s from "./PhoneBock.module.css";

const СontactList = ({ contactList, onDeleted }) => {
  return (
    <ul className={"js-list"}>
      {contactList.map(({ id, newName, number }) => {
        return (
          <li key={id}>
            <span>{newName}: </span>
            <span>
              +38 <a href={`tel: ${number}`}>{number}</a>
            </span>
            <button
              className={s.btnList}
              type="button"
              onClick={() => onDeleted(id)}
            >
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const getFilterContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.newName.toLowerCase().includes(normalizeFilter)
  );
};
const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contactList: getFilterContacts(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleted: (id) => dispatch(phonebookActions.onDeleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СontactList);
