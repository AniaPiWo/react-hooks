import { useState } from "react";
import styles from "./ToDoApp.module.css";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.newItemForm}>
      <div className={styles.formRow}>
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          id="item"
          type="text"
          placeholder="Add new task"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className={styles.btn}>Add</button>
    </form>
  );
};

export default TodoForm;
