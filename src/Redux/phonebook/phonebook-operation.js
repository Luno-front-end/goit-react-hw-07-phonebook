import axios from "axios";
import * as actions from "./phonebook-actions";

axios.defaults.baseURL = "http://localhost:3000/";

const addContact = (newName, number) => (dispatch) => {
  const contact = { newName, number };

  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

export default { addContact };
