import React, { Component } from 'react';
import Login from './Login'
import Signup from './Signup'

class LoginContainer extends Component {

  state ={
    newUser: false
  }

  createAccount = () => {
    this.setState({
      newUser: true
    })
  }

  render() {
    return (
      this.state.newUser ? <Signup/> : <Login createAccount={this.createAccount}/>
    )
  }
}

export default LoginContainer
