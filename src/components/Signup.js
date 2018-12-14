import React, { Component } from 'react';
import { connect } from 'react-redux'

class Signup extends Component {

  state={
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phone: ''
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.postToUsers()
  }

  postToUsers = ()=>{
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone
      })
    }
  )
  .then(r=>
    r.json())
  .then(json=>{
    localStorage.setItem('Authorization', json.jwt)
    // console.log(localStorage.getItem('Authorization'))
    this.props.loginUser(json.user)
  })
}


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui equal width form container centered">
        <div className="fields">
          <div className="field">
            <label>Username</label>
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChangeFor('username')}></input>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangeFor('password')}></input>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>First name</label>
            <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleChangeFor('firstName')}></input>
          </div>
          <div className="field">
            <label>Last name</label>
            <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChangeFor('lastName')}></input>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Email</label>
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChangeFor('email')}></input>
          </div>
          <div className="field">
            <label>Phone</label>
            <input type="text" placeholder="Phone" value={this.state.phone} onChange={this.handleChangeFor('phone')}></input>
          </div>
        </div>
        <button className="ui button" type="submit" value="submit">Submit</button>
      </form>


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

export default connect(null, mapDispatchToState)(Signup)
