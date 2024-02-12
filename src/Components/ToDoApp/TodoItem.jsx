import styles from "./ToDoApp.module.css";
import PropTypes from "prop-types";

const TodoItem = ({ completed, id, task, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {task}
      </label>
      <button className={styles.btn} onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
