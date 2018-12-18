import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewJournal extends Component {

  state = {
    theme: ''
  }

  handleChangeFor = (event) => {
    this.setState({
      theme: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.addJournal()
  }

  addJournal = ()=>{
    fetch('http://localhost:3000/api/v1/journals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage['Authorization']}`
      },
      body: JSON.stringify({
        theme: this.state.theme,
        user_id: this.props.user.id
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
      .then(json => {
        this.props.updateUserJournals(json)
        this.props.showFormFn()
      })
    })
  }

  handleDiscard = (event)=>{
    event.preventDefault()
    this.props.showFormFn()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <input type="text" placeholder="New Journal" value={this.state.theme} onChange={this.handleChangeFor}></input>
        </div>
        <button type='submit' className="small ui primary button">
          Save
        </button>
        <button onClick={this.handleDiscard} className="small ui button">
          Discard
        </button>
      </form>
    )
  }
}


function mapStateToProps(state){
  return {
    user: state.user
  }
}

function mapDispatchToState(dispatch){
  return {
    updateUserJournals: (user)=> dispatch({
      type: "UPDATE_USER",
      payload: user
    })
  }
}

export default connect(mapStateToProps, mapDispatchToState)(NewJournal)
