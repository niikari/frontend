import React, {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function CustomerAdd(props) {

    const [customer, setCustomer] = useState({})
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
      }
    
    const handleClose = () => {
       setOpen(false);
    }

    const handleChange = (e) => {
        setCustomer({...customer, [e.target.id]: e.target.value})
    }

    const addCustomer = () => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => props.function())
            .catch(err => console.log(err))
        
        setCustomer({})

        handleClose()
    }


    return (
        <>
            <Button variant='contained' onClick={handleClickOpen}>Add new customer</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new customer</DialogTitle>
                <DialogContent>
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="firstname"
                    label="Firstname"
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="lastname"
                    label="Lastname"
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="streetaddress"
                    label="Streetaddress"
                    fullWidth
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="postcode"
                    label="Postcode"
                    type="number"
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="city"
                    label="City"
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    variant="standard"
                /><TextField
                    onChange={handleChange}
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

export default CustomerAdd