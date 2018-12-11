import React, { Component } from 'react';
import Sidebar from './Sidebar'
import MainContentContainer from './MainContentContainer'
import EntryContainer from './EntryContainer'

class UserPageContainer extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <MainContentContainer/>
        <EntryContainer/>
      </div>
    )
  }
}

export default UserPageContainer
