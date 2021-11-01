import React, { useEffect, useRef, useState } from "react";
import {AgGridReact} from 'ag-grid-react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import AddCar from "./AddCar";
import EditCar from "./EditCar";

function Carlist() {

    const [cars, setCars] = useState([])
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState('')

    const gridRef = useRef()

    useEffect(() => fetchCars(), [])

    const fetchCars = () => {
        fetch('http://carrestapi.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.log(err))
    }

    const deleteCar = (car) => {
        if (window.confirm('Are you sure?')) {
            fetch(car._links.self.href, {
                method: 'DELETE'
            })
            .then(_ => {
                fetchCars()
                setMsg('Car deleted successfully')
                setOpen(true)
            })
            .catch(err => console.log(err))
        }
    }

    const addCar = (car) => {
        fetch('http://carrestapi.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(_ => {
            fetchCars()
            setMsg('Car added successfully')
            setOpen(true)
        })        
        .catch(err => console.log(err))
    }

    const editCar = (car) => {
        fetch(car._links.self.href, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(_ => {
            fetchCars()
            setMsg('Car edited successfully')
            setOpen(true)
        })
        .catch(err => console.error(err))
    }

    const columns = [
        {field: 'brand', sortable: true, filter:true, floatingFilter: true},
        {field: 'model', sortable: true, filter:true, floatingFilter: true},
        {field: 'color', sortable: true, filter:true, floatingFilter: true},
        {field: 'fuel', sortable: true, filter:true, floatingFilter: true},
        {field: 'year', sortable: true, filter:true, floatingFilter: true},
        {field: 'price', sortable: true, filter:true, floatingFilter: true},
        {
            width: 140,
            cellRendererFramework: params => <Button startIcon={<DeleteIcon />} variant="outlined" color="error" size="small" onClick={() => deleteCar(params.data)}>Delete</Button>
        },
        {
            width: 140,
            cellRendererFramework: params => <EditCar car={params} editCar={editCar}/>
        }
    ]

    return (
        <div>
        
        <AddCar addCar={addCar} />
        
        <div className="ag-theme-material" style={{height: 650, width: '100%', margin: 'auto', marginTop: 20}}>
           <AgGridReact
               rowData={cars}
               columnDefs={columns}
               animateRows={true}
               pagination={true}
               paginationPageSize={10}
               onGridReady={params => gridRef.current = params.api}
               rowSelection="single"
               suppressCellSelection={true}>
           </AgGridReact>
        </div>        
        <Snackbar 
            open={open}
            message={msg}
            onClose={() => setOpen(false)}
            autoHideDuration={3000}
        />
        </div>
    )
}

export default Carlist

