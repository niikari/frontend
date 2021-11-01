import React, { useEffect, useRef, useState } from "react";
import {AgGridReact} from 'ag-grid-react';
import Stack from '@mui/material/Stack';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CustomerDelete from "./CustomerDelete";
import CustomerAdd from "./CustomerAdd";
import CustomerTraining from "./CustomerTraining";

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

    const updateCustomer = () => {
        fetch(customer.links[0].href, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .catch(err => console.log(err))
    }

    const fields = {
        sortable: true,
        filter: true,
        floatingFilter: true,
        editable: true
    }
  
    const columns = [
        {field: 'firstname', sortable: fields.sortable, floatingFilter: fields.floatingFilter, filter:fields.filter, editable: fields.editable},
        {field: 'lastname', sortable: fields.sortable, floatingFilter: fields.floatingFilter, filter:fields.filter, editable: fields.editable},
        {field: 'streetaddress', sortable: fields.sortable, floatingFilter: fields.floatingFilter, filter:fields.filter, editable: fields.editable},
        {field: 'postcode', sortable: fields.sortable, floatingFilter: fields.floatingFilter, filter:fields.filter, editable: fields.editable},
        {field: 'city', sortable: fields.sortable, floatingFilter: fields.floatingFilter, filter:fields.filter, editable: fields.editable},
        {field: 'email', sortable: fields.sortable, floatingFilter: fields.floatingFilter, filter:fields.filter, editable: fields.editable},
        {field: 'phone', sortable: fields.sortable, floatingFilter: fields.floatingFilter, filter:fields.filter, editable: fields.editable}
    ]

    return (
        <>
        <Stack spacing={2} direction="row" style={{ marginTop:20, justifyContent: 'center' }}>
            <CustomerAdd function={fetchCustomers}/>
            <CustomerDelete value={customer} function={fetchCustomers} />  
            <CustomerTraining value={customer} />  
        </Stack>
        <div className="ag-theme-alpine" style={{height: 800, width: 1400, margin:'auto', marginTop:20}}>
           <AgGridReact
               rowData={customers}
               columnDefs={columns}
               ref={gridRef}
               onGridReady={params => {
                    gridRef.current = params.api
                }}
               rowSelection='single'
               animateRows={true}
               onRowSelected={() => setCustomer(gridRef.current.getSelectedNodes()[0].data)}
               onCellEditingStopped={() => updateCustomer()}>
               
           </AgGridReact>
       </div>
        </>
    )
}

export default Customers