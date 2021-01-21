import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "./ButtonList/ButtonList";

import s from "./PhoneBock.module.css";

const СontactList = ({ contactList, onDeleted }) => {
  return (
    <div>
      <p className={s.infoContact}>
        Для того щоб набрати номер, просто натисніть на нього :)
      </p>
      <ul className={"js-list"}>
        {contactList.map(({ id, newName, number }) => {
          return (
            <li key={id}>
              <span className={s.nameContact}>{newName}: </span>
              <span className={s.numberContact}>
                +38{" "}
                <a href={`tel: ${number}`} className={s.numberContact}>
                  {number}
                </a>
              </span>
              {/* <button
                className={s.btnList}
                type="button"
                onClick={() => onDeleted(id)}
              >
                Видалити
              </button> */}

              <Button id={id}>Видалити</Button>
            </li>
          );
        })}
      </ul>
    </div>
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

// const mapDispatchToProps = (dispatch) => ({
//   onDeleted: (id) => dispatch(phonebookOperations.onDeleted(id)),
// });

export default connect(mapStateToProps, null)(СontactList);
