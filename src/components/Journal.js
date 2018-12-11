import React, { Component } from 'react'

class Journal extends Component {
  render() {
    return (
      <div onClick={()=>this.props.handleJournalClick(this.props.journal.id)}>
        Journal: {this.props.journal.theme}
      </div>
    )
  }
}

export default Journal
