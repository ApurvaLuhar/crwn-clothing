import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage.Component.jsx';
import './App.css';
import { ROOT } from 'postcss-selector-parser';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
     <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/hats' component = {HatsPage} />
      </Switch>
      </BrowserRouter> 
    </div>

    
  );
}

export default App;
