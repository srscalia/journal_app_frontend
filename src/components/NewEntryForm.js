import React, { Component } from 'react'
import { connect } from 'react-redux';

class NewEntryForm extends Component {

  state={
    title: '',
    body: ''
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.addEntry()
  }

  addEntry = ()=>{
    fetch('http://localhost:3000/api/v1/entries', {
      method: 'POST',
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
      .then((json)=>{
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage['Authorization']}`
          }
        })
        .then(r=>r.json())
        .then(json => this.props.updateUserEntries(json))

    }).then(()=>{
      this.props.updateShowForm()
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
        <div onClick={this.props.updateShowForm}>
          Discard
        </div>
      </form>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    selectedJournal: state.selectedJournal
  }
}

function mapDispatchToState(dispatch){
  return {
    updateUserEntries: (user)=> dispatch({
      type: "UPDATE_USER",
      payload: user
    }),
    updateShowForm: ()=> dispatch({
      type: "SHOW_FORM",
      payload: false
    })
  }
}

export default connect(mapStateToProps, mapDispatchToState)(NewEntryForm)
