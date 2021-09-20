import React, {useState} from "react";
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Todos() {

    const [todo, setTodo] = useState({date: '', description: '', priority: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    const deleteTodo = (i) => {
        console.log(i);
        setTodos(todos.filter((item, index) => index !== i));
    }

    const columns = [
        {field: 'description', sortable: true, filter:true, floatingFilter:true},
        {field: 'date', sortable: true, filter:true, floatingFilter:true},
        {field: 'priority', sortable: true, filter:true, floatingFilter:true, cellStyle: params => params.value === "High" ? {color:'red'} : {color:'black'}}
    ]

    return (
        <>
            <h1>Add Todos</h1>
            <label>Description: </label><input name="description" value={todo.description} onChange={inputChanged}></input> 
            <label>Date: </label><input name="date" type= "date" value={todo.date} onChange={inputChanged}></input>   
            <label>Priority: </label><input name="priority" type= "text" value={todo.priority} onChange={inputChanged}></input> 
            <button onClick={() => setTodos([todo, ...todos])}>Add</button>  

            <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
                <AgGridReact
                    rowData={todos}
                    columnDefs = {columns}
                    animateRows {...true}>
                </AgGridReact>

            </div>
               
        </>
    );
}

export default Todos;