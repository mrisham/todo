import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = allTodo.find((i) => i.id === editId);
      const updatedTodo = allTodo.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setAllTodo(updatedTodo);
      setEditId(0);
      return;
    }
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
  const handleEdit = (id) => {
    const editTodo = allTodo.find((i) => i.id === id);
    console.log(editTodo.todo);
    setTodo(editTodo.todo);
    setEditId(editTodo.id);
  };
  useEffect(() => {
    console.log("triggered", editId);
  }, [todo]);
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
          <button type="submit">{editId ? "edit" : "Add"}</button>
        </form>
        <ul className="all-todos">
          {allTodo.map((t) => (
            <li className="single-todo" key={t.id}>
              <span className="todo-text">{t.todo}</span>
              <button onClick={() => handleEdit(t.id)}>edit</button>
              <button onClick={() => handleDelete(t.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
