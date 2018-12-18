import React, { Component, Fragment } from 'react';
import Header from './Header'
import Body from './Body'
import { Route } from 'react-router-dom'


class App extends Component {
  render() {

    return (
      <Fragment>
        <Route path="/" component={Header}/>
        <Route path="/home" component={Body}/>
      </Fragment>
    )
  }
}

export default App
