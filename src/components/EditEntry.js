import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditEntry extends Component {

  state={
    title: this.props.title,
    body: this.props.body
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.editEntry()
  }

  editEntry = ()=>{
    fetch(`http://localhost:3000/api/v1/entries/${this.props.selectedEntry}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage['Authorization']}`
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        journal_id: this.props.selectedJournal
      })
    }).then(r=>r.json())
    .then(json=>{
      fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage['Authorization']}`
        }
      })
      .then(r=>r.json())
      .then(json => {
        this.props.updateUser(json)
        this.props.showEntryEditForm()
      })
    })
  }


  handleDelete = (event)=>{
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/entries/${this.props.selectedEntry}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage['Authorization']}`
      }
    }).then(()=>{
      fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage['Authorization']}`
        }
      })
      .then(r=>r.json())
      .then(json => {
        this.props.updateUser(json)
        this.props.deletedEntry()
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeFor('title')}></input>
          <textarea placeholder="A safe place your thoughts" value={this.state.body} onChange={this.handleChangeFor('body')}></textarea>
        </div>
        <button type='submit' className="ui primary button">
          Save
        </button>
        <div onClick={this.props.showEntryEditForm}>
          Discard
        </div>
        <button onClick={this.handleDelete}className="ui button">
          Delete
        </button>
      </form>
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
    }),
    updateUser: (user)=> dispatch({
      type: "UPDATE_USER",
      payload: user
    }),
    deletedEntry: ()=> dispatch({
      type: "DELETED_ENTRY"
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEntry)