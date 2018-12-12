import React, { Component } from 'react'
import { connect } from 'react-redux'

class ViewEntry extends Component {

  renderEntry = ()=>{
    if (this.props.selectedEntry) {
      let journal = this.props.user.journals.find(journal=>journal.id===this.props.selectedJournal)
      return journal.entries.find(entry=>entry.id ===this.props.selectedEntry)
    }
  }

  render() {
    return (
      <div>
        {this.props.selectedEntry ? this.renderEntry().title: null}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    selectedJournal: state.selectedJournal,
    selectedEntry: state.selectedEntry
  }
}

export default connect(mapStateToProps)(ViewEntry)
