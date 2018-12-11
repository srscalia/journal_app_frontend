import React, { Component } from 'react'
import TimelineList from './TimelineList'

class MainContentContainer extends Component {
  render() {
    return (
      <div>
        MainContentContainer
        <TimelineList
          journal={this.props.journal}
          handleEntryClick={this.props.handleEntryClick}
          />
      </div>
    )
  }
}

export default MainContentContainer
