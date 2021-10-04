import React, {useState, useRef} from "react";
import {AgGridReact} from 'ag-grid-react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import DateFnsUtils from '@date-io/date-fns'; 
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Todos() {

    const [todo, setTodo] = useState({date: '', description: '', priority: ''});
    const [todos, setTodos] = useState([]);

    const gridRef = useRef();

    const inputChanged = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }


    const deleteTodo = () => {
        try {
            setTodos(todos.filter((item, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
        } catch (Exception) {
            alert("Valitse poistettava...")
        }
    }

    const handleDateChange = (date) => {
        setTodo({...todo, date: date.toLocaleDateString('fi')})
    }

    const columns = [
        {field: 'description', sortable: true, filter:true, floatingFilter:true},
        {field: 'date', sortable: true, filter:true, floatingFilter:true},
        {field: 'priority', sortable: true, filter:true, floatingFilter:true, cellStyle: params => params.value === "High" ? {color:'red'} : {color:'black'}}
    ]

    return (
        <div style={{marginTop: 20,}}>
            <Stack spacing={2} direction="row" justifyContent="center">
                <TextField label="Description" size="small" name="description" value={todo.description} onChange={inputChanged}></TextField> 
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker onChange={date => handleDateChange(date)} /> 
                </MuiPickersUtilsProvider> 
                <TextField label="Priority" size="small" name="priority" type= "text" value={todo.priority} onChange={inputChanged}></TextField> 
                <Button variant="contained" onClick={() => {
                    setTodos([todo, ...todos])
                    setTodo({date:'' , description: '', priority:''})}
                    } startIcon={<AddIcon />}>Add</Button>  
                    <Tooltip title="select row to remove">
                        <Button variant="contained" color="error" onClick={deleteTodo} startIcon={<DeleteIcon />}>Delete</Button>
                    </Tooltip>
            </Stack>
            <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
                <AgGridReact
                    ref = {gridRef}
                    onGridReady = {params => gridRef.current = params.api}
                    rowSelection = "single"
                    rowData={todos}
                    columnDefs = {columns}
                    animateRows {...true}>
                </AgGridReact>

            </div>
               
        </div>
    );
}

export default Todos;