import React, { Component } from 'react';
import Login from './Login'
import Signup from './Signup'

class LoginContainer extends Component {
  render() {
    return (
      <div>
        LoginContainer
        <Login/>
        <Signup/>
      </div>
    )
  }
}

export default LoginContainer