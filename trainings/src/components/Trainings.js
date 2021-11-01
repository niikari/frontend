import React, { useEffect, useState } from "react";
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Trainings() {

    const [trainings, setTrainings] = useState([])

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(res => res.json())
            .then(data => {
                setTrainings(data.content)
            })
            .catch(err => console.log(err))
    }, [])

    const columns = [
        {field: 'date', sortable:'true', filter:'true'},
        {field: 'duration', sortable:'true', filter:'true'},
        {field: 'activity', sortable:'true', filter:'true'}
    ]

    return (
        <div className="ag-theme-alpine" style={{height: 500, width: 640, margin:'auto'}}>
            <AgGridReact
                rowData={trainings}
                columnDefs={columns}
                animateRows={true}>

            </AgGridReact>

        </div>
    )
}

export default Trainings