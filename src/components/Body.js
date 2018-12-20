import React, { Component, Fragment } from 'react';
import LoginContainer from './LoginContainer'
import UserPageContainer from './UserPageContainer';
import { connect } from 'react-redux';
import withAuth from '../hoc/withAuth'

class Body extends Component {

  render() {
    return (
      <Fragment>
        {this.props.user ? <UserPageContainer/> : <LoginContainer/>}
      </Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default withAuth(connect(mapStateToProps)(Body))
