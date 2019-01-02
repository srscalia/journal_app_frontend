import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

class Journal extends Component {

  state = {
    editJournal: false,
    theme: this.props.journal.theme
  }

  rowStyle = {
    float: 'right'
  };

  styleMe = ()=>{
    return {
      'backgroundColor': this.props.journal.id === this.props.selectedJournal ? '#F5F5F5' : '#FFFFFF'
    }
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

  handleClick = ()=>{
    this.props.selectJournal(this.props.journal.id)
  }


  render() {
    return (
      <Fragment>
      {this.state.editJournal ? <div className="row">
        <div className="column">
          <form onSubmit={this.handleEdit} className="ui form">
            <div className="field">
              <input onChange={this.handleChangeFor} type="text" placeholder="Theme" value={this.state.theme}></input>
            </div>
            <div class="mini ui buttons">
              <button id='editJournalButton' className="mini ui button primary" type="submit">Submit</button>
              <button onClick={this.handleDeleteJournal} className="mini ui button">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div> : this.props.journal.id === this.props.selectedJournal
       ? <div className="row" style={this.styleMe()} onClick={this.handleClick}>
         <div className="column">
          {this.props.journal.theme}
           <div style={this.rowStyle}><i className="circular small wrench icon" onClick={()=>this.handleEditJournal()}></i></div>
         </div>
       </div> : <div className="row" style={this.styleMe()} onClick={this.handleClick}>
         <div className="column">
           {this.props.journal.theme}
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
