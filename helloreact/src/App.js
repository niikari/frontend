import './App.css';
import TodoTable from './components/TodoTable';
import React, { useState } from 'react';

function App() {

  const [todo, setTodo] = useState({date: '', description: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value})
  }

  const deleteTodo = (i) => {
    setTodos(todos.filter((item, index) => index !== i))
  }

  return (
    <div className="App">
        <h1>Add todo</h1>
        <label>Description: </label><input name="description" value={todo.description} onChange={inputChanged}></input> 
        <label>Date: </label><input name="date" type= "date" value={todo.date} onChange={inputChanged}></input>     
        <button onClick={() => setTodos([todo, ...todos])}>Add</button> 
        <TodoTable todos={todos} deleteFunction={deleteTodo}></TodoTable>
    </div>
  );
}

export default App;
