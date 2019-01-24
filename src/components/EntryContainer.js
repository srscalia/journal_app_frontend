import React, { Component, Fragment } from 'react'
import ViewEntry from './ViewEntry';
import NewEntryContainter from './NewEntryContainer';
import EditEntry from './EditEntry';
import PhotoGallery from './PhotoGallery';
import { connect } from 'react-redux';

class EntryContainer extends Component {

  state = {
    title: '',
    body: '',
    photo: '',
    location: '',
    date: ''
  }

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
      body: entry.body,
      photo: entry.photo,
      location: entry.location,
      date: entry.date
    })
  }

  renderContent = ()=>{
    if (this.props.showEntry) {
      return (
        <ViewEntry editEntry={this.editEntry} entryToEdit={this.entryToEdit}/>
      )
    } else if (this.props.showEntryEditForm) {
      return (
        <EditEntry title={this.state.title} body={this.state.body} photo={this.state.photo} location={this.state.location} date={this.state.date}/>
      )
    } else if (this.props.showPhotos) {
      return (
        <PhotoGallery photos={this.props.photos}/>
      )
    }else {
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
    showEntryEditForm: state.showEntryEditForm,
    showPhotos: state.showPhotos
  }
}


export default connect(mapStateToProps)(EntryContainer)
