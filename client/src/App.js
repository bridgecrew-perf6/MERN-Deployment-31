import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import DisplayAll from './components/DisplayAll';
import Create from './components/Create';
import ShowOne from './components/ShowOne';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>

      <Route exact path={"/pirate/new"}>
        <Create/>
      </Route>
          
      <Route path={"/pirate/:id"}>
        <ShowOne/>
      </Route>

      <Route path={"/"}>
        <DisplayAll/>
      </Route>
          
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;






