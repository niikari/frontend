import React, { useState } from "react";
import Customers from "./components/Customers";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Trainings from "./components/Trainings";

function App() {

  const [page, setPage] = useState('one')

  const handleChange = (e, page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div">
            <Tabs value={page} onChange={handleChange}>
              <Tab value="one" label="Customers"></Tab>
              <Tab value="two" label="Trainings"></Tab>
              <Tab value="three" label="Calendar"></Tab>
            </Tabs>
          </Typography>
        </Toolbar>
      </AppBar>

      {page === 'one' && <Customers />}
      {page === 'two' && <Trainings />}
    
    </div>
  );
}

export default App;
