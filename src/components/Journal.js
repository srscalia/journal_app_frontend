import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

class Journal extends Component {

  state = {
    theme: this.props.journal.theme
  }

  rowStyle = {
    float: 'right'
  };

  styleMe = ()=>{
    return {
      'backgroundColor': this.props.journal.id === this.props.selectedJournal ? '#F5F5F5' : null,
      padding: '14px'
    }
  }

  handleEditJournal = ()=>{
    this.props.changeEditJournal(this.props.journal.id)
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

  handleClick = ()=>{
    this.props.selectJournal(this.props.journal.id)
  }


  render() {
    return (
      <Fragment>
      {this.props.editJournal && this.props.journal.id === this.props.selectedJournal
        ? <div className="row">
        <div className="column">
          <form onSubmit={this.handleEdit} className="ui form">
            <div className="field">
              <input onChange={this.handleChangeFor} type="text" placeholder="Theme" value={this.state.theme}></input>
            </div>
            <div className="mini ui buttons">
              <button id='editJournalButton' className="mini ui button primary" type="submit">Submit</button>
              <button onClick={this.handleDeleteJournal} className="mini ui button">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div> : <div className="row shelby" style={this.styleMe()} onClick={this.handleClick} onDoubleClick={()=>this.handleEditJournal()}>
         <div className="column">
          {this.props.journal.theme}
           <div style={this.rowStyle}></div>
         </div>
       </div>}
    </Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    selectedJournal: state.selectedJournal,
    editJournal: state.editJournal
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
    }),
    changeEditJournal: (id)=>dispatch({
      type: "CHANGE_EDIT_JOURNAL",
      payload: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
