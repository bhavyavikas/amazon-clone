import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    // <div className="App">Hello</div>
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            {/* <Header></Header> */}
            <Login />
            <h1>Login</h1>
          </Route>
          <Route path='/Checkout'>
            <Header></Header>
            <Checkout></Checkout>
            {/* <h1>Checkout</h1> */}
          </Route>
          <Route path='/'>
            <Header></Header>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
