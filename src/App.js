import React from 'react';
import './App.css';

function Todo({ todo, index, completeTodo }) {
  return (
    <div 
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
    </div>
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
    { 
      text: "Create a Todo App",
      isCompleted: false
    },
    { 
      text: "Clean Room",
      isCompleted: false
    },
    { 
      text: "Workout",
      isCompleted: false
    }
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

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
            completeTodo={completeTodo}
            />
        ))}
        <TodoForm addTodo={{addTodo}}/>
      </div>
    </div>
  );
}

export default App;
