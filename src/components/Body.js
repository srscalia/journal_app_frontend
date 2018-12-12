import React, { Component, Fragment } from 'react';
import LoginContainer from './LoginContainer'
import UserPageContainer from './UserPageContainer'


const USER = 'http://localhost:3000/api/v1/users/1'

class Body extends Component {
  // 
  // state = {
  //   user: null
  // }

  componentDidMount(){
    fetch(USER)
    .then(r=>r.json())
    .then(json=>{
      this.setState({
        user: json
      })
    })
  }


  render() {
    return (
      <Fragment>
        <LoginContainer/>
        <UserPageContainer/>
      </Fragment>
      )
    }
}


export default Body
