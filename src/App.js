import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home.js';
import './App.css';
import Jewelry from './Jewelry.js'
import Detail from './JewelryDetail.js';
import Header from './Header.js';
import Create from './Create.js';


export default class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/jewelry"
              exact
              render={(routerProps) => <Jewelry {...routerProps} />}
            />
            <Route
              path="/jewelry/:id"
              exact
              render={(routerProps) => <Detail {...routerProps} />}
            />
            <Route
              path="/create"
              exact
              render={(routerProps) => <Create {...routerProps} />}
            />
          </Switch>
        </Router>
        <footer>
        </footer>
      </div>

    );
  }
}



