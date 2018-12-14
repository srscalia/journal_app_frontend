import React, { Component, Fragment } from 'react';
import Header from './Header'
import Body from './Body'

class App extends Component {
  render() {

    return (
      <Fragment>
        <Header/>
        <Body/>
      </Fragment>
    )
  }
}

export default App
