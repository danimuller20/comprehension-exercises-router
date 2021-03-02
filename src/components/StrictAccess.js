import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    const { username, password } = user;
    let isLogged = false;
    if (username === 'João' && password === '1234') isLogged = true;

    return ( 
      <Route path='/strict-access'>
        {isLogged ? <p>Welcome João!</p> : (
          alert('Access denied'),
          <Redirect to="/" /> 
        )}
      </Route>
    );
  }
}
 
export default StrictAccess;