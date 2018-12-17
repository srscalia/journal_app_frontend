import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

class Journal extends Component {

  state = {
    editJournal: false,
    theme: this.props.journal.theme
  }

  handleEditJournal = ()=>{
    this.setState({
      editJournal: !this.state.editJournal
    })
  }

  handleChangeFor = (event) => {
    this.setState({
      theme: event.target.value
    })
  }

  handleEdit = (event)=>{
    event.preventDefault()
    this.editEntry()
  }
  editEntry = ()=>{
    fetch(`http://localhost:3000/api/v1/journals/${this.props.selectedJournal}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage['Authorization']}`
      },
      body: JSON.stringify({
        theme: this.state.theme,
        user_id: this.props.user.id
      })
    }).then(r=>r.json())
    .then(()=>{
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
        this.handleEditJournal()
      })
    })
  }

  handleDeleteJournal = (event)=>{
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/journals/${this.props.selectedJournal}`, {
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
          this.props.deleteJournal()
        this.props.updateUser(json)

      })
    })
  }


  render() {
    return (
      <Fragment>
      {this.state.editJournal ? <div className="card">
        <div className="content">
          <form onSubmit={this.handleEdit} className="ui form">
            <div className="field">
              <input onChange={this.handleChangeFor} type="text" placeholder="Theme" value={this.state.theme}></input>
            </div>
            <button className="ui button primary" type="submit">Submit</button>
            <button onClick={this.handleDeleteJournal} className="ui button">
                Delete
              </button>
          </form>
        </div>
      </div> :
      <div className="card" onClick={()=>this.props.selectJournal(this.props.journal.id)}>
        <div className="content">
          <div className="header">{this.props.journal.theme}</div>
          <div className="meta" onClick={()=>this.handleEditJournal()}>Edit</div>
        </div>
      </div>}
    </Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    selectedJournal: state.selectedJournal
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectJournal: (id)=> dispatch({
      type: "SELECT_JOURNAL",
      payload: id
    }),
    updateUser: (user)=> dispatch({
      type: "UPDATE_USER",
      payload: user
    }),
    deleteJournal: ()=> dispatch({
      type: "DELETED_JOURNAL"
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
