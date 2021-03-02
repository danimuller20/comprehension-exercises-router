import React, { Component, useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import StrictAccess from './components/StrictAccess';


class App extends Component {
  render() {
    let user = {
      username: 'João',
      password: '1234'
    }
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage={'Good Morning'} />} />
          <Route path="/about" component={About} />
          <Route path="/strict-access" render={ (props) => <StrictAccess {...props} user={user}/>} />
          <Route path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
