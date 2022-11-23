import react from "react"
import './App.css';
import TodoForm from "./Components/TodoForm"

function App() {
  
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm />
    </div>
  );
}

export default App;