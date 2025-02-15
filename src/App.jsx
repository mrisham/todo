import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("todo is::", todo);
    if (todo != "") {
      setAllTodo([{ id: `${todo}-${Date.now()} `, todo }, ...allTodo]);
    }
    setTodo("");
  };
  const handleDelete = (id) => {
    console.log("id is", id);
    const deleteTodo = allTodo.filter((t) => t.id != id);
    setAllTodo(deleteTodo);
    console.log(allTodo);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul className="all-todos">
          {allTodo.map((t) => (
            <li className="single-todo" key={t.id}>
              <span className="todo-text">{t.todo}</span>
              <button>edit</button>
              <button onClick={() => handleDelete(t.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
