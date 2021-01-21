import s from "./Button.module.css";

export default function Button({ children }) {
  return (
    // <div className={s.body_button}>
    <button className={s.btn} type="submite">
      <span> {children}</span>
    </button>
    // </div>
  );
}
