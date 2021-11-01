import React, { useEffect, useRef, useState } from "react";
import {AgGridReact} from 'ag-grid-react';
import Stack from '@mui/material/Stack';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import AddTrainingToCustomer from "./AddTrainingToCustomer";
import DeleteTraining from "./DeleteTraining";

export default function Trainings() {

    const [trainings, setTrainings] = useState([])
    const [training, setTraining] = useState({})

    const gridRef = useRef()

    useEffect(() => fetchTrainings(), [])

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(res => res.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.log(err))
    }

    const columns = [
        {field: 'date'},
        {field: 'duration'},
        {field: 'activity'}
    ]

    return (
        <>
            <Stack spacing={2} direction="row" justifyContent="center" style={{marginTop: 20}}>
                <AddTrainingToCustomer training={training} />
                <DeleteTraining training={training} fun={fetchTrainings}/>
            </Stack>
            <div className="ag-theme-material" style={{height: 680, width: 600, margin: 'auto', marginTop: 30}}>
            <AgGridReact
                rowData={trainings}
                columnDefs={columns}
                animateRows={true}
                onGridReady={params => gridRef.current = params.api}
                rowSelection="single"
                onRowSelected={() => setTraining(gridRef.current.getSelectedNodes()[0].data)}
                pagination={true}
                paginationPageSize={10}>
                
            </AgGridReact>
            </div>

        </>
    )
}