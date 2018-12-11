import React, { Component } from 'react'
import Journal from './Journal'

class JournalList extends Component {

  renderJournals = ()=>{
    if (this.props.user) {
      return this.props.user.journals.map(journal=>{
        return <Journal
          handleJournalClick={this.props.handleJournalClick}
          key={journal.id}
          journal={journal}/>
      })
    }
  }

  render() {
    return (
      <div>
        {this.renderJournals()}
      </div>
    )
  }
}

export default JournalList
