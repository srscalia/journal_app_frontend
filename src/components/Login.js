import React, { Component } from 'react';
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
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }
  )
  .then(r=>r.json())
  .then(json=>{
    // console.log(json.user)
    localStorage.setItem('Authorization', [json.jwt])
    // console.log(localStorage.getItem('Authorization'))
    this.props.loginUser(json.user)
  })
}

  render() {
    return (
      <div className="ui grid container centered">
        <div className="six wide column">
          <form onSubmit={this.handleSubmit} className="ui form">
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
          <div onClick={this.props.createAccount}>new user</div>
        </div>
      </div>
    )
  }
}

function mapDispatchToState(dispatch){
  return {
    loginUser: (user)=> dispatch({
      type: "LOGIN_USER",
      payload: user
    })
  }
}

export default connect(null, mapDispatchToState)(Login)
