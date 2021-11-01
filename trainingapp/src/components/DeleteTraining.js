import React, {useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteTraining(props) {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }

    const fetchDeleteTraining = () => {
        fetch(props.training.links[0].href, {
            method: 'DELETE'
        })
        .then(res => props.fun())
        .then(setOpen(false))
        .catch(err => console.log(err))
    }

    return (
        <>
            <Button variant="contained" color="error" onClick={() => setOpen(true)}>Delete Training</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {`Delete ${props.training.activity} from database?`}
                </DialogTitle>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={fetchDeleteTraining} autoFocus variant="contained" color="error">
                    Delete
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}