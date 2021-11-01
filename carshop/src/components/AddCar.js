import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCar(props) {

    const [open, setOpen] = useState(false)
    const [car, setCar] = useState({})

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
        props.addCar(car)
        handleClose()
    }
    

    return (
        <>
            <Button variant="outlined" onClick={handleOpen} style={{textAlign: 'center'}} >New Car</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="brand"
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
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    margin="dense"
                    id="color"
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
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    margin="dense"
                    id="year"
                    label="Year"
                    type="number"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    margin="dense"
                    id="price"
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