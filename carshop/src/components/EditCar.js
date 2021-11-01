import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditCar(props) {

    const [open, setOpen] = useState(false)
    const [car, setCar] = useState(props.car.data)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleChange = (e) => {
        setCar({...car, [e.target.id]: e.target.value})
    }

    const handleSave = () => {
        props.editCar(car)
        handleClose()
    }
    

    return (
        <>
            <Button size="small" variant="outlined" onClick={handleOpen} style={{textAlign: 'center'}} >Edit</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="brand"
                    value={car.brand}
                    label="Brand"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    margin="dense"
                    id="model"
                    label="Model"
                    value={car.model}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    margin="dense"
                    id="color"
                    value={car.color}
                    label="Color"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    margin="dense"
                    id="fuel"
                    label="Fuel"
                    value={car.fuel}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    margin="dense"
                    id="year"
                    value={car.year}
                    label="Year"
                    type="number"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    margin="dense"
                    id="price"
                    value={car.price}
                    label="Price"
                    type="number"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave} variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}