import React, {useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function DeleteCustomer(props) {

    const [openDialog, setopenDialog] = useState(false)
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    }

    const handleCloseDialog = () => {
        setopenDialog(false);
    }

    const deleteCustomer = () => {
        fetch(props.customer.links[0].href, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                setMessage(`Customer ${props.customer.firstname} ${props.customer.lastname} deleted`)
                props.fun()
                setopenDialog(false)
                setOpen(true)
            } else {
                setopenDialog(false)
                setMessage('Something went wrong... customer not deleted')
                setOpen(true)
            }
        })
        .catch(err => console.log(err))        
        
    }

    const action = (
        <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
        </React.Fragment>
    )

    return (
        <>
            <Button variant="contained" color="error" onClick={() => setopenDialog(true)}>Delete Customer</Button>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {`Delete ${props.customer.firstname} ${props.customer.lastname} from database?`}
                </DialogTitle>
                <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button onClick={deleteCustomer} autoFocus variant="contained" color="error">
                    Delete
                </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
            action={action}
        />
        </>
    )
}