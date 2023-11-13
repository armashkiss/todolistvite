import React, { useState } from "react";
import "./App.css";
import Clock from "./clock";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Clock />
      <h1 className="heading">Task list</h1>
      <input
        className="input"
        name="todo"
        type="text"
        placeholder="create new task..."
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
      <button className="btn" onClick={addTodo}>
        Add
      </button>
      <ul className="list">
        {todos.map((todoItem, index) => (
          <li key={index}>
            {todoItem}
            <button className="btn" onClick={() => removeTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
