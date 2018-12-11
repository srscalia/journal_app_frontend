import React, { Component } from 'react'
import JournalList from './JournalList'

class Sidebar extends Component {
  render() {
    return (
      <div>
        Sidebar
        <JournalList
          handleJournalClick={this.props.handleJournalClick}
          user={this.props.user}/>
      </div>
    )
  }
}

export default Sidebar
