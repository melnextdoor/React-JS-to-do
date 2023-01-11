import React from 'react';
import './App.css';

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Create a Todo App"},
    { text: "Clean Room" },
    { text: "Workout" }
  ]);

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
      </div>
    </div>
  );
}

export default App;
