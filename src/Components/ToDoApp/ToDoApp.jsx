import "./ToDoApp.css";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function ToDoApp() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  function addTodo(task) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), task, completed: false },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Just Another ToDoApp</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
