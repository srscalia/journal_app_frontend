import React, { Component } from 'react';
import Sidebar from './Sidebar'
import MainContentContainer from './MainContentContainer'
import EntryContainer from './EntryContainer'

class UserPageContainer extends Component {

  state = {
    selectedJournal: null,
    selectedEntry: null
  }

  handleJournalClick = (id)=>{
    this.setState({
      selectedJournal: id,
      selectedEntry: null
    })
  }

  getJournal = ()=>{
    if (this.props.user) {
      return this.props.user.journals.find(journal=>journal.id===this.state.selectedJournal)
    }
  }

  handleEntryClick = (id) => {
    this.setState({
      selectedEntry: id
    })
  }

  getEntry = ()=>{
    if (this.state.selectedEntry) {
      let journal = this.props.user.journals.find(journal=>journal.id===this.state.selectedJournal)
      return journal.entries.find(entry=>entry.id ===this.state.selectedEntry)
    }
  }


  render() {
    return (
      <div>
        <Sidebar
          user={this.props.user}
          handleJournalClick={this.handleJournalClick}/>
        <MainContentContainer
          journal={this.getJournal()}
          handleEntryClick={this.handleEntryClick}
          />
        <EntryContainer entry={this.getEntry()}/>
      </div>
    )
  }
}

export default UserPageContainer
