import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainContentContainer from './MainContentContainer';
import EntryContainer from './EntryContainer';


class UserPageContainer extends Component {

  render() {
    return (
      <div className="ui internally celled grid">
        <div className="row">
          <div className="three wide column">
            <div className="ui small header">Journals</div>
          </div>
          <div className="three wide column">
              <div className="ui small header">Entries</div>
          </div>
        </div>
        <div className="row">
          <div className="three wide column">
            <Sidebar/>
          </div>
          <div className="three wide column">
            <MainContentContainer/>
          </div>
          <div className="eight wide column">
            <EntryContainer/>
          </div>
        </div>
      </div>
    )
  }
}



export default UserPageContainer
