import React, { useEffect, useRef, useState } from "react";
import {AgGridReact} from 'ag-grid-react';
import Stack from '@mui/material/Stack';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import AddCustomer from "../AddCustomer";
import DeleteCustomer from "./DeleteCustomer";

function Customers() {

    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState({})
    const gridRef = useRef()

    useEffect(() => fetchCustomers(), [])

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.log(err))
    }


    const editingStopped = () => {        
        fetch(customer.links[0].href, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .catch(err => console.log(err))
    }

    const columns = [
        {field: 'firstname', sortable: true, floatingFilter: true, filter:true, editable: true},
        {field: 'lastname', sortable: true, floatingFilter: true, filter:true, editable: true},
        {field: 'streetaddress', sortable: true, floatingFilter: true, filter:true, editable: true},
        {field: 'postcode', sortable: true, floatingFilter: true, filter:true, editable: true},
        {field: 'city', sortable: true, floatingFilter: true, filter:true, editable: true},
        {field: 'email', sortable: true, floatingFilter: true, filter:true, editable: true},
        {field: 'phone', sortable: true, floatingFilter: true, filter:true, editable: true}
    ]

    return (
        <>
            <Stack spacing={2} direction="row" justifyContent="center" style={{marginTop: 20}}>
                <AddCustomer fun={fetchCustomers}/>
                <DeleteCustomer customer={customer} fun={fetchCustomers} />
            </Stack>
            
            <div className="ag-theme-material" style={{height: 680, width: 1450, margin: 'auto', marginTop: 30}}>
            <AgGridReact
                rowData={customers}
                columnDefs={columns}
                animateRows={true}
                onGridReady={params => gridRef.current = params.api}
                rowSelection="single"
                onCellEditingStopped={() => editingStopped()}
                onRowSelected={() => setCustomer(gridRef.current.getSelectedNodes()[0].data)}
                pagination={true}
                paginationPageSize={10}
                suppressCellSelection={true}>
                
            </AgGridReact>
        </div>

        </>
    )
}

export default Customers