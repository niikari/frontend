import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Customers from "./components/Customers";
import Trainings from "./components/Trainings";

function App() {

  const [page, setPage] = useState('one')

  const handleChange = (e, value) => {
    setPage(value)
  }

  return (
    <div className="App">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Training App
          </Typography>
          <Tabs value={page} onChange={handleChange} textColor="secondary">
            <Tab label="Customers" value="one"></Tab>
            <Tab label="Trainings" value="two"></Tab>
            <Tab label="Calendar" value="three"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
      {page === "one" && <Customers />}
      {page === "two" && <Trainings />}
    </div>
  );
}

export default App;
