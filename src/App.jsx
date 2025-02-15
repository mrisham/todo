import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("todo", todo);
    console.log("aatodo", allTodo);
    if (todo != "")
      setAllTodo([{ id: `${todo}-${Date.now()} `, todo }, ...allTodo]);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">Add</button>
        </form>
        <ul className="all-todos">
          {allTodo.map((t) => (
            <li className="single-todo">
              <span className="todo-text">{t.todo}</span>
              <button>edit</button>
              <button>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
