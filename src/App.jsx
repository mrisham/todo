import "./App.css";

function App() {
  const arr = [
    { id: 1, name: "ms" },
    { id: 2, name: "sm" },
  ];
  return (
    <div className="app">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm">
          <input type="text" />
          <button>Add</button>
        </form>
        <ul className="all-todos">
          <li className="single-todo">
            <span className="todo-text">LEarn react</span>
            <button>edit</button>
            <button>delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
