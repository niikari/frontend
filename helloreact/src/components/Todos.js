import React, {useState} from "react";

function Todos() {

    const [todo, setTodo] = useState({date: '', description: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    const deleteTodo = (i) => {
        console.log(i);
        setTodos(todos.filter((item, index) => index !== i));
    }

    return (
        <>
            <h1>Add Todos</h1>
            <label>Description: </label><input name="description" value={todo.description} onChange={inputChanged}></input> 
            <label>Date: </label><input name="date" type= "date" value={todo.date} onChange={inputChanged}></input>     
            <button onClick={() => setTodos([todo, ...todos])}>Add</button>  

            <table className="Todos">
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>   
                    {
                        todos.map((what, index) => <tr key={index}><td>{what.date}</td><td>{what.description}</td><td><button onClick={() => deleteTodo(index)}>Delete</button></td></tr>)
                    } 
                </tbody>    
            </table>     
        </>
    );
}

export default Todos;