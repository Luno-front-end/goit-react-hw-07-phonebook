// import types from "./phonebook-types";
// import shortid from "shortid";

import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("phonebook/addContactRequest");
export const addContactSuccess = createAction("phonebook/addContactSuccess");
export const addContactError = createAction("phonebook/addContactError");

// const addContact = createAction("phonebook/addContact", (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

export const onDeleted = createAction("phonebook/deletedContact");

// const onDeleted = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

export const veluesFilter = createAction("phonebook/veluesFilter");

// const veluesFilter = (value) => ({
//   type: types.VALUES_FILTER,
//   payload: value,
// });

// export default {
//   addPhonebookRequest,
//   addPhonebookSuccess,
//   addPhonebookError,
//   onDeleted,
//   veluesFilter,
// };
