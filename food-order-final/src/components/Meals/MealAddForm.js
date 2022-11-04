import { useRef } from "react";
import Button from "../UI/Button";
import styles from "./MealAddForm.module.css";

const MealAddForm = props => {

  const countRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    props.onAddItem(countRef.current.value);
  };

  return (
    <form className={styles.form}
      onSubmit={submitHandler}>
      <input ref={countRef} type="number" min="1" defaultValue="1" />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default MealAddForm;
