import React, { Component, Fragment } from 'react';
import LoginContainer from './LoginContainer'
import UserPageContainer from './UserPageContainer'


class Body extends Component {


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
