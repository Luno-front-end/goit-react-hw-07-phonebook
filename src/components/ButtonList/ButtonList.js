import s from "./ButtonList.module.css";
import phonebookOperations from "../../Redux/phonebook/phonebook-operation";
import { connect } from "react-redux";

function ButtonList({ children, id, onDeleted }) {
  return (
    // <div className={s.body_button}>
    <button className={s.btnList} onClick={() => onDeleted(id)} type="button">
      <span> {children}</span>
    </button>
    // </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onDeleted: (id) => dispatch(phonebookOperations.onDeleted(id)),
});

export default connect(null, mapDispatchToProps)(ButtonList);
