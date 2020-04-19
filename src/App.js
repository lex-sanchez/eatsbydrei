import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route exact path="/about" render={() => 'This the about page'} />
          </Switch>
        </Router>
    )
  }
}

export default App;
