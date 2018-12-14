import React, { Component, Fragment } from 'react'
import ViewEntry from './ViewEntry';
import NewEntryContainter from './NewEntryContainer';
import EditEntry from './EditEntry';
import { connect } from 'react-redux';

class EntryContainer extends Component {

  state = {
    title: '',
    body: ''
  }
  //
  // editEntry=()=>{
  //   console.log('hi')
  //   this.setState({
  //     showEditForm: !this.state.showEditForm,
  //     showEntry: !this.state.showEntry
  //   })
  // }



  renderEntry = ()=>{
    if (this.props.selectedEntry) {
      let journal = this.props.user.journals.find(journal=>journal.id===this.props.selectedJournal)
      return journal.entries.find(entry=>entry.id ===this.props.selectedEntry)
    }
  }

  entryToEdit = ()=>{
    let entry = this.renderEntry()
    this.setState({
      title: entry.title,
      body: entry.body
    })
  }

  renderContent = ()=>{
    if (this.props.showEntry) {
      return (
        <ViewEntry editEntry={this.editEntry} entryToEdit={this.entryToEdit}/>
      )
    } else if (this.props.showEntryEditForm) {
      return (
        <EditEntry title={this.state.title} body={this.state.body} />
      )
    } else {
      return (
        <NewEntryContainter/>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderContent()}
      </Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    selectedJournal: state.selectedJournal,
    selectedEntry: state.selectedEntry,
    showEntry: state.showEntry,
    showEntryEditForm: state.showEntryEditForm
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     updateUserEntries: (user)=> dispatch({
//       type: "UPDATE_USER",
//       payload: user
//     }),
//     updateShowForm: ()=> dispatch({
//       type: "SHOW_FORM",
//       payload: false
//     })
//   }
// }

export default connect(mapStateToProps)(EntryContainer)
