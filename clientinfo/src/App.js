import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';


import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Client Information</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/details'>Details</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/details'>
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
