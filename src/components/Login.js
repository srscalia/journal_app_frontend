import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Login extends Component {

  state = {
    username:'',
    password: ''
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.login()
  }

  login = ()=>{
    this.props.authenticatingUser()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(r=>r.json())
    .then(json=>{
      localStorage.setItem('Authorization', [json.jwt])
      localStorage.setItem('user', JSON.stringify([json.user]))
      // console.log(localStorage.getItem('Authorization'))
      this.props.loginUser(json.user)

    })
  }

  render() {
    return (
      <Fragment>
      <div className="ui grid container centered">
        <div className="six wide column">
          <form onSubmit={this.handleSubmit} className="ui form grey">
            <div className="field">
              <label>Username</label>
              <input type="text" name="first-name" placeholder="Username" value={this.state.username} onChange={this.handleChangeFor('username')}></input>
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="last-name" placeholder="Password" value={this.state.password} onChange={this.handleChangeFor('password')}></input>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
          <div onClick={this.props.createAccount} className="ui small message">New to us? Sign Up Here.</div>
        </div>
      </div>
</Fragment>
    )
  }
}

function mapDispatchToState(dispatch){
  return {
    loginUser: (user)=> dispatch({
      type: "LOGIN_USER",
      payload: user
    }),
    authenticatingUser: ()=>dispatch({
      type: "AUTHENTICATING_USER"
    })
  }
}

export default connect(null, mapDispatchToState)(Login)
