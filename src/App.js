import React from 'react';
import './App.css';

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

function TodoForm({ addTodo}) {
  //start with an empty state so that the user knows they can add another to do item.
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    //exit early if the user has not entered anything
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Create a Todo App"},
    { text: "Clean Room" },
    { text: "Workout" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo,index) => (
          <Todo
            key={index}
            intex={index}
            todo={todo}
            />
        ))}
        <TodoForm addTodo={{addTodo}}/>
      </div>
    </div>
  );
}

export default App;
