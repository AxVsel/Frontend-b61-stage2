import { useState } from "react";
import TodoItem from "./components/Toggle";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React", completed: false },
    { id: 2, text: "Membuat project", completed: true },
    { id: 3, text: "Review typescript", completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>To-Do List</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
      ))}
    </div>
  );
}

export default App;
