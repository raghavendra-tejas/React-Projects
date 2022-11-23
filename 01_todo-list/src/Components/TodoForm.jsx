import React, { useState } from 'react'
import TodoList from "./TodoList"

function TodoForm() {

  const [inputText, setInputText] = useState("");

  // To add all the entered data into the array
  const [todos, setTodos] = useState([]);

  const handleChange = event => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // To prevent overall page refresh
  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputText);

    // To add all the old and new data into the array
    const newTodos = [...todos, inputText];
    setTodos(newTodos);
    // To empty the form after adding
    setInputText("");
  }

  // To handle Delete
  const handleDelete = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  }
  

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todo" value={inputText} onChange={handleChange}/> &nbsp;
        <input type="submit" value="Add"/>
      </form>
      <TodoList props={todos} deleteHandler={handleDelete} />
    </div>
  )
}

export default TodoForm