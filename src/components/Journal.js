import React, { Component } from 'react';
import { connect } from 'react-redux'

class Journal extends Component {

  handleDeleteJournal = ()=>{
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
    })
  }


  render() {
    return (
      <div className="card" onClick={()=>this.props.selectJournal(this.props.journal.id)}>
        <div className="content">
          <div className="header">{this.props.journal.theme}</div>
          <div className="meta">Friend</div>
          <div onClick={()=>console.log('hi')}className="description">Edit</div>
          <div onClick={()=>this.handleDeleteJournal()}className="description">Delete</div>
        </div>
      </div>
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
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
