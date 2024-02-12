import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list-items">
      {todos.length === 0 && <li>No items to display</li>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
