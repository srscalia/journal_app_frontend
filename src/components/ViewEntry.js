import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NewEntryContainer from './NewEntryContainer'

class ViewEntry extends Component {

  renderEntry = ()=>{
    if (this.props.selectedEntry) {
      let journal = this.props.user.journals.find(journal=>journal.id===this.props.selectedJournal)
      return journal.entries.find(entry=>entry.id ===this.props.selectedEntry)
    }
  }

  editClickHandler = ()=>{
    this.props.showEntryEditForm()
    this.props.entryToEdit()
  }

  render() {
    let entry = this.renderEntry()
    return (
      <div>
        {this.props.selectedEntry ? <Fragment><h1>{entry.title}</h1>
          <div>{entry.body}</div>
          <button onClick={this.editClickHandler} className="ui primary button">Edit</button></Fragment> : <NewEntryContainer/>}

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
function mapDispatchToProps(dispatch){
  return {
    showEntryEditForm: ()=> dispatch({
      type: "SHOW_ENTRY_EDIT_FORM"
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEntry)
