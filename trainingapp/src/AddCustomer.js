import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCustomer(props) {

    const [customer, setCustomer] = useState({})
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    }

    const addCustomer = () => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => props.fun())
        .catch(err => console.log(err))
        
        setOpen(false)
        
    }

    const onChange = (e) => {
        setCustomer({...customer, [e.target.id]: e.target.value})
    }

    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)}>Add Customer</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add customer</DialogTitle>
                    <DialogContent>
                    <TextField
                        onChange={onChange}
                        autoFocus
                        margin="dense"
                        id="firstname"
                        label="Firstname"
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        onChange={onChange}
                        autoFocus
                        margin="dense"
                        id="lastname"
                        label="Lastname"
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        onChange={onChange}
                        autoFocus
                        margin="dense"
                        id="streetaddress"
                        label="Streetaddress"
                        fullWidth
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        onChange={onChange}
                        autoFocus
                        margin="dense"
                        id="postcode"
                        label="Postcode"
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        onChange={onChange}
                        autoFocus
                        margin="dense"
                        id="city"
                        label="City"
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        onChange={onChange}
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={onChange}
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="text"
                        variant="standard"
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addCustomer} variant="contained">Add</Button>
                    </DialogActions>
                </Dialog>
        </>
    )
}