import React, {useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

function CustomerTraining(props) {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({})

    const handleClickOpen = () => {
        if (Object.keys(props.value).length !== 0) {
            setOpen(true)
        } else {
            alert("Please choose customer")
        }
        
    }

   
    const handleClose = () => {
        setOpen(false)
    }

    const addTraining = () => {

    }


    return (
        <>
            <Button variant="contained" color="warning" onClick={handleClickOpen}>Add training to selected</Button>
            
                <Dialog open={open} onClose={handleClose}>                    
                    <DialogTitle>Add training to {props.value.firstname} {props.value.lastname}</DialogTitle>                   
                    <DialogActions>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="activity"
                            label="Activity"
                            type="text"
                            fullWidth
                            variant="standard">
                        </TextField>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="duration"
                            label="Duration"
                            type="text"
                            fullWidth
                            variant="standard">
                        </TextField>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="activity"
                            label="Date"
                            type="time"
                            fullWidth
                            variant="standard">
                        </TextField>
                    </DialogContent>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} variant="contained">Add</Button>
                    </DialogActions>                    
                </Dialog>       
            
        </>
    )
}

export default CustomerTraining