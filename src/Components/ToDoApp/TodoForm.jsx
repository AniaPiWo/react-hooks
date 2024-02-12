import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          id="item"
          type="text"
          placeholder="Add new task"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default TodoForm;
