import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home.js';
import Jewelry from './Jewelry.js'
import Detail from './JewelryDetail.js';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
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
          </Switch>
        </Router>
        <footer>
        </footer>
      </div>

    );
  }
}



