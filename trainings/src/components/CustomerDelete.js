import React, {useState, Fragment} from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function CustomerDelete(props) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    }

    const action = (
        <Fragment>
          
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
    )

    const deleteCustomer = () => {
        if (Object.keys(props.value).length !== 0) {
            if (window.confirm('Are you sure?')) {
                fetch(props.value.links[0].href, {method: 'DELETE'})
                    .then(res => props.function())
                    .catch(err => console.log(err))
    
                setOpen(true)
            }
        } else {
            alert("Please choose customer")
        }
        
        
    }

    return (
        <>
            <Button variant='contained' color="error" onClick={deleteCustomer}>Delete selected</Button>
            {
                open && <Snackbar
                open={open}
                autoHideDuration={3200}
                onClose={handleClose}
                message="Customer deleted"
                action={action}
              />
            }
        </>
    )
}

export default CustomerDelete