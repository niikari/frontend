import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function AddTrainingToCustomer(props) {

    const [customers, setCustomers] = useState([])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => fetchCustomers(), [])

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.log(err))
    }

    const addTrainingToCustomer = (customer) => {

        fetch(`https://customerrest.herokuapp.com/api/trainings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                'date': props.training.date,
                'activity': props.training.activity,
                'duration': props.training.duration,
                'customer': customer.links[0].href
            }
            
        })
        .then(handleClose())
        .catch(err => console.log(err))

    }

    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)}>Add customer</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Select customer</DialogTitle>
                <DialogContent>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            {
                                customers.map((cust, index) =>
                                <ListItem key={index} disablePadding>
                                    <ListItemButton onClick={() => addTrainingToCustomer(cust)}>
                                        <ListItemText>{cust.firstname} {cust.lastname}</ListItemText>
                                    </ListItemButton>
                                </ListItem>)
                            }
                        
                        </List>
                    </nav>
                    
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}