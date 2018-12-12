import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainContentContainer from './MainContentContainer';
import EntryContainer from './EntryContainer';
// import { connect } from 'react-redux';

class UserPageContainer extends Component {

  render() {
    return (
      <div className="ui internally celled grid">
        <div className="row">
          <div className="three wide column">
            <Sidebar/>
          </div>
          <div className="ten wide column">
            <MainContentContainer/>
          </div>
          <div className="three wide column">
            <EntryContainer/>
          </div>
        </div>
      </div>
    )
  }
}

export default UserPageContainer
