import React from 'react'
import { connect } from 'react-redux'
import LoginContainer from '../components/LoginContainer'

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {

    componentDidMount() {
      // console.log('%c INSIDE COMPONENT DID MOUNT FOR AUTH HOC', 'color: purple')
      // POTENTIAL SECURITY FLAW!!! my tokens don't expire
      if (localStorage.getItem('Authorization') && !this.props.loggedIn) {
          // if i have a token but don't know who it belongs to, ask the server for that user's data
        this.props.authenticatingUser()
        fetch('http://localhost:3000/api/v1/profile', {
          method: 'GET',
          headers: {
             Authorization: `Bearer ${localStorage.getItem('Authorization')}`
           }
        })
        .then(r=>r.json())
        .then(json=>{
          this.props.loginUser(json.user)
        })
      }

    }

    render() {
      // console.log('%c INSIDE RENDER FOR HOC', 'color: green')
      if (localStorage.getItem('Authorization') && this.props.loggedIn) {
        //i have a token and i'm logged in
        // wrapped component in our case is Profile
        return <WrappedComponent />
      } else if (localStorage.getItem('Authorization') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        //we're currently fetching, show a loading spinner
        return <div className="ui active centered inline loader"></div>
      } else {
        //user is not AUTHORIZED to see this component
        return <LoginContainer/>
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn,
      authenticatingUser: state.authenticatingUser
    }
  }

  const mapDispatchToState = (dispatch)=>{
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

   return connect(mapStateToProps, mapDispatchToState)(AuthorizedComponent)
}

export default withAuth
