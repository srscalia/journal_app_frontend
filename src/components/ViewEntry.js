import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NewEntryContainer from './NewEntryContainer'
import Image from './Image'

class ViewEntry extends Component {

  dateStyle = {
    float: 'right'
  };

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
      <div id="viewEntry">
        {
          this.props.selectedEntry ?
          <Fragment><h1>{entry.title}</h1>
            <div id="body">{entry.body}</div>
            <Image selectedEntry={this.props.selectedEntry} entry={entry}/>
            <div>Location: {entry.location} <span style={this.dateStyle}>Date: {entry.date}</span></div>
            <div><button id='editButton' onClick={this.editClickHandler} className="ui primary button">Edit</button></div>
          </Fragment> :
          <NewEntryContainer/>
        }

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
