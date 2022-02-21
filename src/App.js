import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      {/*<HomePage />*/}
    </>
  );
}

export default App;
