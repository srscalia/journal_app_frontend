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
      <div id="loginContainer">
        <div id="loginMessage">A place for your thoughts</div>
        {this.state.newUser ? <Signup/> : <Login createAccount={this.createAccount}/>}
      </div>
    )
  }
}

export default LoginContainer
