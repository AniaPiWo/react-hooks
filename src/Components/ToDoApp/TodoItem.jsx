// eslint-disable-next-line react/prop-types
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
      <button className="btn" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
