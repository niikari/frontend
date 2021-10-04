import './App.css';
import React, { useState } from 'react';
import Todos from './components/Todos';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {

  const [value, setValue] = useState('one')
  
  const handleChange = (event, value) => {
    setValue(value)
  }

  return (
    <div className="App">
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="Home"></Tab>
            <Tab value="two" label="My Todos"></Tab>
          </Tabs>
        </AppBar>
        {value === 'one' && <h1>Homepage</h1>}
        {value === 'two' && <Todos />}
    </div>
  );
}

export default App;
