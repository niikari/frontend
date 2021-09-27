import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Switch>
          <Route exact path="/" render={() => <h1>This is home page</h1>}></Route>
          <Route exact path="/about" render={() => <h1>This is about page</h1>}></Route>
          <Route exact path="/contact" render={() => <h1>This is contact page</h1>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
