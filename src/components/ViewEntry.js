import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NewEntryContainer from './NewEntryContainer'
import Image from './Image'

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
    let manipulateDate = ()=> {
      let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let month = months[new Date(entry.date).getMonth()]
      let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let day = days[new Date(entry.date).getDay()]
      let date = new Date(entry.date).getDate().toString()
      let year = new Date(entry.date).getFullYear().toString()
      let time = new Date(entry.date).toLocaleTimeString().split(":");
      let updatedTime = time[0]+':'+time[1]
      let ampm = new Date(entry.date).toLocaleTimeString().slice(-2)
      let formattedDate = day + ', ' + month + ' ' + date + ', ' + year + ' at ' + updatedTime + ' ' + ampm
    return formattedDate
    }
    return (
      <div id="viewEntry">
        {
          this.props.selectedEntry ?
          <Fragment><h1>{entry.title}<button id='editButton' onClick={this.editClickHandler} className="mini ui button">Edit</button></h1>
          <span id="date">Date: {manipulateDate()}</span>
            <div id="body">{entry.body}</div>
            <Image selectedEntry={this.props.selectedEntry} entry={entry}/>
            <div id='location'>Location: {entry.location}</div>
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
